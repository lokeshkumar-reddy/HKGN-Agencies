// api/proxy.js
export default async function handler(req, res) {
  // Set CORS headers to allow local development and cross-origin calls
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Retrieve the target URL from the query parameter
  const { url } = req.query;
  if (!url) {
    res.status(400).send("Missing target url parameter");
    return;
  }

  try {
    const targetUrl = decodeURIComponent(url);
    
    // Construct fetch options
    const fetchOptions = {
      method: req.method,
      headers: {}
    };

    // If it's a POST request (write to keyvalue.immanuel.co), include Content-Length
    if (req.method === 'POST') {
      fetchOptions.headers['Content-Length'] = '0';
    }

    // Call the target API
    const response = await fetch(targetUrl, fetchOptions);
    const textData = await response.text();
    
    // Send response back to browser client
    res.status(response.status).send(textData);
  } catch (error) {
    res.status(500).send("Proxy error: " + error.message);
  }
}
