const Router = require('express')
const router = new Router();
const unitController = require('../controllers/unit.controller.js');

router.post('/unit', unitController.createUnit);
router.get('/unit', unitController.getUnits);
router.get('/unit/:id', unitController.getOneUnit);
router.put('/unit/:id', unitController.updateUnit);
router.delete('/unit/:id', unitController.deleteUnit);

module.exports = router;