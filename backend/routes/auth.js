const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')


//@desc login with google
//@route GET /auth/google
router.get('/google',ensureGuest, passport.authenticate('google', { scope: ['profile'] }))

//@desc google auth callback
//@route GET /google/auth/callback
router.get('/google/callback', passport.authenticate('google',
    { failureRedirect: '/' }), (req, res) => {
        res.redirect('/')
    })

//@desc logout
//@route GET /google/auth/callback
router.get('/logout',ensureAuth, (req,res,next)=>{
    //passport sets a logout method in the request
    req.logout((error)=>{return next(error)})
    res.redirect('/')
})

//@desc returns logged in status and id
//@route GET /auth/isloggedin
router.get('/isloggedin', (req,res)=>{
    let status = false
    let id = 0
    if(req.isAuthenticated()){
        status = true;
        id = req.user.id
    }
    
    res.status(200).json({status,id})
})


module.exports = router