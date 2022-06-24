const express = require('express')
const router = express.Router();
const tag = require('../lib/tag');





router.get('/:tagID', (req, res, next) => {
    tag.tag(req, res, next);
})

module.exports = router;