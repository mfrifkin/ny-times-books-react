const express = require('express')
const { reset } = require('nodemon')
const passport = require('passport')
const router = express.Router()



//@desc login with google
//@route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc google auth callbacl
//@route GET /google/auth/callback
router.get('/google/callback', passport.authenticate('google',
    { failureRedirect: '/' }), (req, res) => {
        res.redirect('http://localhost:3000')
    })

//@desc logout
//@route GET /google/auth/callback
router.get('/logout', (req,res,next)=>{
    //passport sets a logout method in the request
    req.logout((error)=>{return next(error)})
    res.redirect('/')
})



module.exports = router