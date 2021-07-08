const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";



function getUserInput(elementID) {
    return document.getElementById(elementID).value;
}


function createUser(userName, password) {
    if (!validator(userName,REQUIRED) || !validator(password,MIN_LENGTH,5)) {
        throw new Error('Invalid Credentials- invalid user name of password (password should be min 6 characters)');
    }

    
    return {
        userName: userName,
        password: password
    }
}


function greetUser(newUser) {
    console.log(newUser);
}


function signupHandler(event) {
    event.preventDefault();
    
    const enteredUserName = getUserInput('uname')
    const enteredPassword = getUserInput('pass');

    try {
        const newUser = createUser(enteredUserName, enteredPassword);

        greetUser(newUser);
    } catch (error) {
        alert(error.message);
    }


}


function connectForm(formID, formSubmitHandler) {
    const form = document.getElementById(formID);
    form.addEventListener('submit',formSubmitHandler)
}



function validator(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
       return value.trim().length > validatorValue;
   }
}

connectForm('user-input',signupHandler);