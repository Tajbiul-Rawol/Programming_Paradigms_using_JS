//class for the user 
class User{
   constructor(userName, password){
       this.userName = userName;
       this.password = password;
   }

   greet(){
       console.log("Hi I am " + this.userName);    
   }
}


//class for the form
class UserInputForm{
    
    constructor(){
        this.form = document.getElementById("user-input");
        this.userName = document.getElementById("uname");
        this.password = document.getElementById("pass");

        //add an event listener when the form is created and the submit is clicked
        // the event will fire the signuphandler method
        // the bind this is used to let the method know that the userName and password
        // are this userName and password of the class.
        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }


    //handle the signup event when submit is clicked
    signupHandler(event) {
        event.preventDefault();
        const enteredUserName = this.userName.value;
        const enteredPassword = this.password.value;

        //use the validator properties since they are static
        if (!Validator.validate(enteredUserName,Validator.REQUIRED) || 
            !Validator.validate(enteredPassword,Validator.MIN_LENGTH,5)) {
            alert("Invalid Credentials- invalid user name of password (password should be min 6 characters)");
            return; 
        }

        //if validation successful create user 
        const newUser = new User(enteredUserName,enteredPassword);
        console.log(newUser);
        newUser.greet();
    }


}

//a separate class to validate the form 
// this validator class can now be used to validate any other forms or values
class Validator{

    static REQUIRED = "REQUIRED";
    static MIN_LENGTH = "MIN_LENGTH";

     static validate(value, flag, validatorValue){
         if (flag === this.REQUIRED) {
             return value.trim().length > 0;
         }
         if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
     }
}


new UserInputForm();