module.exports.validateUserInput = ( 
    username, 
    email, 
    password, 
    confirmPassword
) => {
    const errors = {}; 
    if (!username || username.trim() === ''){
        errors.username = "Username required to sign up"
    }; 

    if (!email || email.trim() === ''){
        errors.email = "Email required to sign up"
    }; 

    if (!password || password === ''){
        errors.password = "Password required to create an account"
    } else if (password != confirmPassword) {
        errors.confirmPassword = "Passwords do not match"
    }
    return {
        errors, 
        valid: Object.keys(errors).length <1
    }
};