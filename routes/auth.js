
const express = require('express');
const router = express.Router();
const { signup, signin, signout, requireSignin, forgotPassword, resetPassword ,  preSignup ,
    googleLogin,    facebookLogin
} = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const {
    userSignupValidator,
    userSigninValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');


router.post('/pre-signup', userSignupValidator, runValidation, preSignup);
router.post('/signupforadmin', signup);
router.post('/signinforadmin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);
// google login
router.post('/google-login', googleLogin);

router.post('/facebook-login', facebookLogin);

module.exports = router;
