const express = require('express');
const sever   = express();
const PORT    = 3000;

sever.get('/hello', (req, res) => {
    res.send('<h1> HELLO WORD </h1>')
})

sever.listen(PORT, (req, res) => {
    console.log(`sever at port ${PORT}`);
});
