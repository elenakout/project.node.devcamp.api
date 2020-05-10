const { Router } = require('express');
const { getCourses, getCourse, addCourse } = require('../controllers/courses');

const router = Router({ mergeParams: true });

router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse);

module.exports = router;
