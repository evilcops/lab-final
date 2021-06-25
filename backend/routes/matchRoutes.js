import express from 'express'
const router = express.Router()
import {
  getMatches,
  // getProductById,
  // deleteProduct,
  createMatch,
  // updateProduct,
  // createProductReview,
  // getTopProducts,
} from '../controllers/matchController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getMatches).post(protect, admin, createMatch)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router
