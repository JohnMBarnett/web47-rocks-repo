require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>web 47 rocks!</h1');
});

app.get('/port', (req, res) => {
    res.send(`<h1>${PORT}</h1>`);
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})









function cohortRocks() {
    console.log(`web ${process.argv[2]} rocks!`);
}

function cohortRocksEnv() {
    console.log(`home folder is ${process.env.HOME}`);
    console.log(`my shell is ${process.env.SHELL}`);
    console.log(`my environment is ${process.env.FOO}`);
    console.log('my super secret comes from',  process.env.SUPER_SECRET);
}

cohortRocksEnv()