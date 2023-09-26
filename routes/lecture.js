const express = require('express');
const alphabet = require('../controllers/alphabet.js')
const vowel = require('../controllers/vowel.js')
const consonant = require('../controllers/consonant.js')
const number = require('../controllers/number.js')
const body = require('../controllers/body.js')

const router = express.Router();

router.get('/alphabet', alphabet);
router.get('/vowel', vowel);
router.get('/consonant', consonant);
router.get('/number', number);
router.get('/body', body);

module.exports = router;
