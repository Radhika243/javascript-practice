function validateCredentials(userName,password){
    let validUserName = "admin";
    let validPassword = "admin@123";

    if(userName === validUserName && password === validPassword){
        return "Login successful"
    }else{
        return "Unauthorized access"
    }
}

function onSubmit1(userName,password){
    let result = validateCredentials(userName,password);
    alert(result);
}
//export default login;

function handleLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    onSubmit1(username,password)
}