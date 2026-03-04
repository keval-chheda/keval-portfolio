const https = require("https");

const data = JSON.stringify({
  host: "kevalchheda.com",
  key: "kevalchheda-indexnow-2026-portfolio",
  urlList: [
    "https://kevalchheda.com"
  ]
});

const options = {
  hostname: "api.indexnow.org",
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const req = https.request(options, res => {
  console.log(`Status Code: ${res.statusCode}`);
});

req.on("error", error => {
  console.error(error);
});

req.write(data);
req.end();