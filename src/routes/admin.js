const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController')

router.get('/services', AdminController.getServices);
router.get('/services/create', AdminController.getCreateService);
router.post('/services/create', AdminController.storeService);
router.delete('/services/:id', AdminController.deleteService)
router.get('/services/:id/edit', AdminController.showEditService);
router.put('/services/:id/edit', AdminController.editService);

module.exports = router;