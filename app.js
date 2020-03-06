const express = require('express');
const bodyParser = require('body-parser');
const model = require('./models');
const routes = require('./routes');
const app = express();
const cors = require('cors');

const PORT = 3005;

app.use(bodyParser.json());
model.sequelize.sync();

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});