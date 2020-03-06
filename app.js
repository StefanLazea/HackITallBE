const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3005;

app.use(bodyParser.json());

app.use("/hello", (req, res) => {
    return res.status(200).send({ message: "hello" })
})

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});