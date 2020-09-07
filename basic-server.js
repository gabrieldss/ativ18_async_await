//comand for test --> node .\basic-server.js
const fs = require('fs');
const express = require('express'); 
const axios = require('axios').default;
const app = express();

(async () => {
    const res = await Promise.all([
        app.get('/', (req, res) => {
            fs.readFile('./html/basic.html', 'utf-8', (err, data) => {
                if (err) {
                    res.send(err);
                    return;
                }    
                res.send(data);
            })
        })
    ]);
})()

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script');

