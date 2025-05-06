export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const isRoblox = userAgent.includes("Roblox") || userAgent.includes("HttpClient");

  res.setHeader("Content-Type", "text/plain");

  if (isRoblox) {
    // Buraya uzun obfuscate edilmiş kodu yerleştiriyoruz.
    const obfuscatedCode = `
print ("hello")
`;

    // Obfuscate edilmiş kodu göndermeliyiz
    res.status(200).send(`loadstring("${obfuscatedCode.replace(/"/g, '\\"')}")()`);
  } else {
    res.status(404).send("404 Not Found");
  }
}
