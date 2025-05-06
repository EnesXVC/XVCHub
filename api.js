export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const isRoblox = userAgent.includes("Roblox") || userAgent.includes("HttpClient");

  res.setHeader("Content-Type", "text/plain");

  if (isRoblox) {
    res.status(200).send(`print("Gizli script çalıştı!")`);
  } else {
    res.status(404).send("404 Not Found");
  }
}
