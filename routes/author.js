const express = require('express')
const router = express.Router();
const author = require('../lib/author');




router.get('/', (req, res) => {
    author.home(req, res);
})

router.post('/create_process', (req, res) => {
    author.create_process(req, res);
})

router.get('/update/:authorID', (req, res) => {
    author.update(req, res);
})

router.post('/update_process', (req, res) => {
    author.update_process(req, res);
})

router.post('/delete_process', (req, res) => {
    author.delete_process(req, res);
})

module.exports = router;