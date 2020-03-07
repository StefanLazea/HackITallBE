const express = require('express');
const bodyParser = require('body-parser');
const model = require('./models');
const routes = require('./routes');
const app = express();
const cors = require('cors');

const PORT = 3005;

app.use(bodyParser.json());
app.use(cors());

// model.sequelize.sync({ force: true });
model.sequelize.sync();
console.log(__dirname)
app.use("/", express.static('../HackITallFE/dist/HackITallFE'));

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});