export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  const isRoblox = userAgent.includes("Roblox") || userAgent.includes("HttpClient");

  res.setHeader("Content-Type", "text/plain");

  if (isRoblox) {
    // Roblox çekerse, scripti gönder
    res.send(`print("XVC Hub yüklendi!")\n-- diğer kodlar buraya`);
  } else {
    // Tarayıcı açarsa, sahte mesaj gönder
    res.status(404).send("404 Not Found");
  }
}
