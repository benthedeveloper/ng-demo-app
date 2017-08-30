const express = require('express');
const path = require('path');

const root = './public';
const public = process.env.PUBLIC || `${root}`;
const app = express();

app.use(express.static(public));
console.log(`serving ${public}`);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: root });
});

const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));
