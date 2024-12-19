require('dotenv').config();
const express = require("express");
const app = express();
const _port = process.env.PORT;

app.listen(_port, () => {
    console.log(`Server is running in port: ${_port} ...`);
})