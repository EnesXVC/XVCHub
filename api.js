export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const isRoblox = userAgent.includes("Roblox") || userAgent.includes("http");

  res.setHeader("Content-Type", "text/plain");

  if (isRoblox) {
    res.send(`print("Roblox'tan geldi, gizli script!")`);
  } else {
    res.status(404).send("404 Not Found");
  }
}
