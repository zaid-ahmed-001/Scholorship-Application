const express = require('express');
const {
   createScholar,
   getScholars,
   getScholar,
   deleteScholar,
   updateScholar

} = require('../controllers/scholarcontroller');

const router = express.Router();

// GET all scholar
router.get('/', getScholars);

// GET a single scholar
router.get('/:id', getScholar);

// POST a scholar
router.post('/', createScholar);

// DELETE a scholar
router.delete('/:id', deleteScholar);

// PATCH (Update) a scholar
router.patch('/:id', updateScholar);

module.exports = router;
   