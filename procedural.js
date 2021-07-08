const form = document.getElementById("user-input");

function signupHandler(event) {

    //prevent submit to backend to prevent page refresh
    event.preventDefault();

    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");

    const enteredUserName = uname.value;
    const enteredPassword = pass.value;

    if (enteredUserName.trim().length === 0 ) {
        alert("username cannot be empty");
        return;
    }
    if (enteredPassword.trim().length === 0 || enteredPassword.trim().length <= 5  ) {
        alert("invalid password- must me 6 character or longer");
        return;
    }

    const user = {
        userName : enteredUserName,
        password : enteredPassword
    };

    console.log("Hi I am  " + user.userName);
    console.log(user);

}



form.addEventListener('submit',signupHandler);
