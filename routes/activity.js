const router = require('express').Router();

router.post('/list', (req, res) => {
    res.send('Activity List');
});


module.exports = router;