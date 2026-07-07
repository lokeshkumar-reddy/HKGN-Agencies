// api/send-otp.js

export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Parse phone from body
  let body = {};
  if (req.body) {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }
  
  const { phone } = body;
  if (!phone) {
    res.status(400).json({ error: 'Mobile number is required' });
    return;
  }

  // Generate a random 6-digit OTP code
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Admin WhatsApp number for the deep link fallback
  const ADMIN_WHATSAPP = process.env.ADMIN_WHATSAPP_NUMBER || "919985958786"; 
  const messageText = `I am verifying my mobile number on HKGN Agencies. My OTP code is: ${otp}`;
  const whatsappDeepLink = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(messageText)}`;

  // Check for Twilio WhatsApp Credentials
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_WHATSAPP_FROM; // e.g. "whatsapp:+14155238886"

  // Check for UltraMsg Credentials
  const ultraMsgInstance = process.env.ULTRAMSG_INSTANCE_ID;
  const ultraMsgToken = process.env.ULTRAMSG_TOKEN;

  let apiSent = false;
  let errorMsg = null;

  try {
    if (twilioSid && twilioAuthToken && twilioFrom) {
      // Send message via Twilio WhatsApp API
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      const auth = Buffer.from(`${twilioSid}:${twilioAuthToken}`).toString('base64');
      
      const formData = new URLSearchParams();
      formData.append('To', `whatsapp:${phone}`);
      formData.append('From', twilioFrom);
      formData.append('Body', `Your HKGN Agencies verification OTP is: ${otp}. Valid for 5 minutes.`);

      const twilioRes = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      if (twilioRes.ok) {
        apiSent = true;
      } else {
        const errorText = await twilioRes.text();
        errorMsg = `Twilio error: ${errorText}`;
      }
    } else if (ultraMsgInstance && ultraMsgToken) {
      // Send message via UltraMsg WhatsApp API
      const ultraMsgUrl = `https://api.ultramsg.com/${ultraMsgInstance}/messages/chat`;
      const ultraMsgRes = await fetch(ultraMsgUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: ultraMsgToken,
          to: phone,
          body: `Your HKGN Agencies verification OTP is: ${otp}. Valid for 5 minutes.`
        })
      });

      if (ultraMsgRes.ok) {
        apiSent = true;
      } else {
        const errorText = await ultraMsgRes.text();
        errorMsg = `UltraMsg error: ${errorText}`;
      }
    }
  } catch (err) {
    errorMsg = `Exception details: ${err.message}`;
  }

  // Respond back with success, mock status, and details for user convenience
  res.status(200).json({
    success: true,
    otp: otp, // Returned for sandbox testing
    apiSent: apiSent,
    error: errorMsg,
    deepLink: whatsappDeepLink,
    message: apiSent 
      ? 'OTP sent successfully via WhatsApp API.' 
      : 'OTP generated. Please verify using the WhatsApp Deep Link or enter the OTP directly.'
  });
}
