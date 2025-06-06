const express = require('express');
const { handleGetLogin, handleGetSignUp, handlePostLogin, handlePostSignUp, getUserDetails, logoutUser} = require('../user_authentication/userregister.controller');
const router = express.Router()


router.get('/', handleGetLogin);
   
router.get('/', handleGetLogin);

router.post('/', handlePostLogin)

router.get('/signup', handleGetSignUp)

router.post('/signup', handlePostSignUp)

router.get('/userprofile', getUserDetails)

router.get('/logout', logoutUser)

router.use((req, res, next) => {
    res.status(404).json({
        status: false,
        message: "page not found 404"
     })
})

module.exports = router
