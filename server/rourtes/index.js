const Router = require ('express')
const router = new Router()
const tourRouter = require ('./tourRouter')
const userRouter = require ('./userRouter')
const typeRouter = require ('./typeRouter')
const countryRouter = require ('./countryRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/country', countryRouter)
router.use('/tour', tourRouter)

module.exports = router
