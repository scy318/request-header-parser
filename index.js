const express = require('express');
const app = express();
// 兼容部署平台的动态端口（如 Render/Vercel）
const PORT = process.env.PORT || 3000;

// 解析请求头的核心接口
app.get('/api/whoami', (req, res) => {
  // 1. IP 地址（优先处理代理场景，如部署到线上）
  const ipaddress = req.headers['x-forwarded-for'] || req.ip;
  
  // 2. 语言偏好（Accept-Language 头）
  const language = req.headers['accept-language'];
  
  // 3. 软件信息（User-Agent 头，含浏览器/系统）
  const software = req.headers['user-agent'];

  // 严格匹配测试要求的键名：ipaddress、language、software
  res.json({ ipaddress, language, software });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});