const express = require('express');
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
} = require('../controllers/usercontroller');

const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET a single user
router.get('/:id', getUser);

// POST a user
router.post('/', createUser);

// DELETE a user
router.delete('/:id', deleteUser);

// PATCH (Update) a user
router.patch('/:id', updateUser);

module.exports = router;
