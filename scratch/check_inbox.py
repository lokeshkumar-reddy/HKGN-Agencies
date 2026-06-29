import requests
import re

email_address = "hkgnstore_652087@web-library.net"
password = "hkgnpass_652087"

# 1. Login
token_res = requests.post("https://api.mail.tm/token", json={"address": email_address, "password": password})
if token_res.status_code != 200:
    print("Login failed:", token_res.text)
    exit()

jwt_token = token_res.json().get("token")
headers = {"Authorization": f"Bearer {jwt_token}"}

# 2. Get messages
msg_res = requests.get("https://api.mail.tm/messages", headers=headers)
if msg_res.status_code == 200:
    messages = msg_res.json().get("hydra:member", [])
    print(f"Inbox has {len(messages)} messages.")
    for msg in messages:
        msg_id = msg["id"]
        detail = requests.get(f"https://api.mail.tm/messages/{msg_id}", headers=headers).json()
        print("Subject:", detail.get("subject"))
        text = detail.get("text", "")
        links = re.findall(r'https://kvdb.io/activate/[a-zA-Z0-9_\-]+', text)
        if links:
            print("Found Activation Link:", links[0])
            # Visit link to activate!
            act_res = requests.get(links[0])
            print("Activation response code:", act_res.status_code)
else:
    print("Failed to fetch messages:", msg_res.text)
