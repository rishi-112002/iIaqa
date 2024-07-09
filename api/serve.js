const express = require('express');
const app = express();
const port = 3000;
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};
app.get('/otp', (req, res) => {
  const text = generateOTP();
  res.json({ text });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
