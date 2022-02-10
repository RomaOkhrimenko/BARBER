const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const ProductController = require('../controllers/productController')

const router = new Router()

router.route('/products').get(ProductController.getAllProducts)
router.route('/admin7531/product/new').post(authMiddleware, ProductController.createProduct)
router.route('/products/:id').get(ProductController.getSingleProduct)

module.exports = router