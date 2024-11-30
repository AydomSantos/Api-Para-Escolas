const {Router} =  require('express');
const AlunoController = require('../controllers');

const router = Router();

router.get('/', AlunoController.index);

module.exports = router;