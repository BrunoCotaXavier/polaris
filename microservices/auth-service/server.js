require('dotenv').config();
const express = require("express");
const router = require('./src/routes/auth-route');
const app = express();
const _port = process.env.PORT;

app.use(router)

app.listen(_port, () => {
    console.log(`Server is running in port: ${_port} ...`);
})