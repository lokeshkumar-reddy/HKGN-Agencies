import requests
import random
import time
import re
import json

def register_and_verify():
    # 1. Fetch available domains from mail.tm
    print("Fetching active mail.tm domains...")
    try:
        domains_res = requests.get("https://api.mail.tm/domains")
        if domains_res.status_code != 200:
            print(f"Failed to fetch domains: {domains_res.status_code}")
            return
        domains = domains_res.json().get("hydra:member", [])
        if not domains:
            print("No active domains found on mail.tm.")
            return
        domain = domains[0]["domain"]
        print(f"Selected domain: {domain}")
    except Exception as e:
        print(f"Error fetching domains: {e}")
        return

    # 2. Generate random user details
    random_id = str(random.randint(100000, 999999))
    email_name = f"hkgnstore_{random_id}"
    email_address = f"{email_name}@{domain}"
    password = f"hkgnpass_{random_id}"
    print(f"Generating account: {email_address} with password: {password}")

    # 3. Create account on mail.tm
    print("Registering mail.tm account...")
    acc_url = "https://api.mail.tm/accounts"
    acc_payload = {
        "address": email_address,
        "password": password
    }
    acc_res = requests.post(acc_url, json=acc_payload)
    if acc_res.status_code not in (200, 201):
        print(f"Account registration failed: {acc_res.status_code} - {acc_res.text}")
        return
    print("Account created successfully!")

    # 4. Get JWT Token
    print("Authenticating to get JWT token...")
    token_url = "https://api.mail.tm/token"
    token_res = requests.post(token_url, json=acc_payload)
    if token_res.status_code not in (200, 201):
        print(f"Authentication failed: {token_res.status_code} - {token_res.text}")
        return
    jwt_token = token_res.json().get("token")
    headers = {
        "Authorization": f"Bearer {jwt_token}",
        "Content-Type": "application/json"
    }
    print("Authenticated successfully!")

    # 5. Register bucket on kvdb.io
    print("Registering bucket on kvdb.io...")
    reg_url = "https://kvdb.io/"
    reg_payload = {
        "email": email_address,
        "agree": "true"
    }
    reg_res = requests.post(reg_url, data=reg_payload)
    if reg_res.status_code not in (200, 201):
        print(f"kvdb.io registration failed: {reg_res.status_code} - {reg_res.text}")
        return
    
    bucket_id = reg_res.text.strip()
    print(f"Registered bucket ID: {bucket_id}")

    # 6. Poll inbox for the verification email
    print("Waiting for verification email...")
    msg_url = "https://api.mail.tm/messages"
    verify_url = None
    
    for attempt in range(15):
        time.sleep(4)
        print(f"Checking inbox (Attempt {attempt+1}/15)...")
        try:
            msg_res = requests.get(msg_url, headers=headers)
            if msg_res.status_code == 200:
                messages = msg_res.json().get("hydra:member", [])
                if messages:
                    print("Found email in inbox!")
                    msg_id = messages[0]["id"]
                    
                    # Fetch full mail content
                    msg_detail_url = f"https://api.mail.tm/messages/{msg_id}"
                    detail_res = requests.get(msg_detail_url, headers=headers)
                    if detail_res.status_code == 200:
                        text_content = detail_res.json().get("text", "")
                        # Find the verification link
                        links = re.findall(r'https://kvdb.io/activate/[a-zA-Z0-9_\-]+', text_content)
                        if links:
                            verify_url = links[0]
                            print(f"Found activation URL: {verify_url}")
                            break
            else:
                print(f"Inbox poll returned code {msg_res.status_code}: {msg_res.text}")
        except Exception as e:
            print(f"Error fetching mail: {e}")
            
    if not verify_url:
        print("Verification email not found or timed out.")
        return

    # 7. Activate the bucket
    print("Activating account by visiting verification link...")
    act_res = requests.get(verify_url)
    if act_res.status_code == 200:
        print("SUCCESS! Account verified successfully!")
        print(f"Your verified Bucket ID: {bucket_id}")
        
        # Test writing to verified bucket
        test_url = f"https://kvdb.io/{bucket_id}/testkey"
        test_res = requests.post(test_url, data="verified_working")
        if test_res.status_code in (200, 201):
            print("Write test: SUCCESS!")
            read_res = requests.get(test_url)
            print(f"Read test: {read_res.text} (SUCCESS!)")
        else:
            print(f"Write test failed: {test_res.status_code} - {test_res.text}")
    else:
        print(f"Activation failed: {act_res.status_code} - {act_res.text}")

if __name__ == "__main__":
    register_and_verify()
