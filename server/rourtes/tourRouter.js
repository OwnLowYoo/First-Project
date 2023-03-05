const Router = require ('express')
const router = new Router()
const tourController = require ('../controllers/tourController')

router.post('/', tourController.create)
router.get('/', tourController.getAll)
router.get('/:id', tourController.getOne)


module.exports = router
