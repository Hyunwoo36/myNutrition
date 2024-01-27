const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ message: 'Testing if backend works' });
});

module.exports = router;