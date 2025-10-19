const express = require('express');
const app = express();
const PORT = 4001;
app.get('/', (req, res) => {
  res.send('Hello, Express!\n');
});

app.get('/about', (req, res) => {
  res.send('My name is Maryam. Nice to meet you!\n');
});

app.get('/contact', (req, res) => {
  res.send(' My contact information is [maryam@example.com]\n');
});

app.get('/repository', (req, res) => {
  res.send('My GitHub repository is [https://github.com/maryauma]\n');
});

app.listen(PORT, () => {
  console.log(`Server is running on port  http://localhost:${PORT}`);
  console.log(`To get infomation about me ,  http://localhost:${PORT}/about`);
  console.log(`To get my contact information ,  http://localhost:${PORT}/contact`);
  console.log(`To get my repository information ,  http://localhost:${PORT}/repository`);
});
