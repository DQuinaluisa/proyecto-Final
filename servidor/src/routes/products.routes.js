import { Router } from 'express'
import { authJwt} from '../middlewares'
import * as productController from '../controllers/product.controller'
const router = Router()

router.get('/',  productController.getProduct)
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], productController.createProduct)
router.get('/:productId', productController.getProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin],  productController.deleteProduct)
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productController.updateProduct)

export default router;