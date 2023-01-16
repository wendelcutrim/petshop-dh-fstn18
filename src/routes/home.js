const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

router.get('/', HomeController.showHome);
router.get('/about', HomeController.showAbout);
router.get('/login', HomeController.showLogin);
router.get('/contact', HomeController.showContact);
router.get('/services', HomeController.showServices);

module.exports = router;