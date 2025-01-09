const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        res.send("/")
    })
    .get('/getTeste', (req, res) => {
        res.send('getTeste');
    })

module.exports = router;