export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  const isRoblox = userAgent.includes("Roblox"); // Roblox HttpGet ise
  res.setHeader("Content-Type", "text/plain");

  if (isRoblox) {
    res.send(`print("Roblox'tan geldin, gizli script!")`);
  } else {
    res.send("404 Not Found");
  }
}
