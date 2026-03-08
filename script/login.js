const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function (){
    const userName = document.getElementById("userName");
    const userNameValue =userName.value;
    // console.log(userNameValue);
    const  userPassword = document.getElementById("userPassWord");
    const userPassWordValue = userPassword.value;
    console.log(userPassWordValue)

    if(userNameValue == "admin" && userPassWordValue == "admin123"){
        alert("login successfully");
        window.location.assign("./main.html");
    }else{
        alert("login failde");
        return;
    }
})