const express = require('express');
// 创建 Express 应用实例
const app = express(); 
// 设置服务监听端口，优先使用环境变量 PORT，默认 3000
const PORT = process.env.PORT || 3000; 

// 定义 /api/whoami 路由，处理请求头解析
app.get('/api/whoami', (req, res) => {
  // 获取客户端IP地址，优先从 x-forwarded-for 头获取，其次用 req.ip
  const ipaddress = req.headers['x-forwarded-for'] || req.ip; 
  // 获取客户端语言偏好（Accept-Language 头）
  const language = req.headers['accept-language']; 
  // 获取客户端用户代理信息（User-Agent 头）
  const software = req.headers['user-agent']; 

  // 按测试要求的键名返回 JSON 数据
  res.json({
    ipaddress,
    // 对应测试中的“语言”键
    语言: language, 
    // 对应测试中的“软件”键
    软件: software 
  });
});

// 启动服务器，监听指定端口并在启动后打印日志
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});