const express = require('express')
const {
    CreateUser,
    getuser,
    getusers,
    deleteuser,
    updatuser
} = require('../controllers/userconroller')


const router = express.Router()

//get all users 
router.get('/', getusers )

//get a single user
router.get('/:id',getuser)

//post a user which gives fully functional json as an output
router.post('/', CreateUser)

//delete a user
router.delete('/:id', deleteuser)

//update a user detail
router.patch('/:id', updatuser)

module.exports = router