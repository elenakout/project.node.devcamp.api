const { Router } = require('express');
const {
  getReviews,
} = require('../controllers/reviews');

const Review = require('../models/Review');

const router = Router({ mergeParams: true });

// Advanced Results
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )

router
  .route('/:id')

module.exports = router;
