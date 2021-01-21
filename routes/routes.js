const { Router } = require('express');
const router = Router();

const dbController = require('../controllers/control');

router.get('/vehiculos', dbController.listVe);
router.post('/addVe', dbController.saveVe);
router.get('/deleteVe/:id', dbController.deleteVe);
router.get('/updateVe/:id', dbController.editVe);
router.post('/updateVe/:id', dbController.updateVe);

router.get('/tipoLinea', dbController.listLi);
router.post('/addLi', dbController.saveLi);
router.get('/deleteLi/:id', dbController.deleteLi);
router.get('/updateLi/:id', dbController.editLi);
router.post('/updateLi/:id', dbController.updateLi);

router.get('/tipoMarca', dbController.listMa);
router.post('/addMa', dbController.saveMa);
router.get('/deleteMa/:id', dbController.deleteMa);
router.get('/updateMa/:id', dbController.editMa);
router.post('/updateMa/:id', dbController.updateMa);

router.get('/login', dbController.login);
router.post('/dashboard', dbController.dashboard);
router.get('/', dbController.index);
router.get('/dashboard', dbController.home);

module.exports = router;