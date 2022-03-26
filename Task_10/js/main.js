let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPass = document.getElementById("userPass");
let loginBtn = document.querySelector("#loginBtn");
let signUpBtn = document.querySelector("#signUp");
let logOut = document.querySelector("#logOut");
let sucsses = document.getElementById("sucsses");
let welcome = document.getElementById("welcome")
var x;
let userArr = [];

function signUP() {
//get the value from user

    var nameF = userName.value;
    var emailF = userEmail.value;
    var passF = userPass.value;
    
    userData = {
        name: nameF,
        pass: passF,
        email: emailF
    };

    // pushing the value into the array


    // put the data in the localStorage

    if (userName.value != "") {
        
        userArr.push(userData);
        localStorage.setItem("allUsersData", JSON.stringify(userArr));

        userName.value = "";
        userEmail.value = "";
        userPass.value = "";

        sucsses.innerHTML = "sucsses";
    } else if (userEmail.value != "") {
        userArr.push(userData);
        localStorage.setItem("allUsersData", JSON.stringify(userArr));

        userName.value = "";
        userEmail.value = "";
        userPass.value = "";

        sucsses.innerHTML = "sucsses";
    } else if(userPass.value != ""){
        userArr.push(userData);
        localStorage.setItem("allUsersData", JSON.stringify(userArr));

        userName.value = "";
        userEmail.value = "";
        userPass.value = "";

        sucsses.innerHTML = "sucsses";
        
    } else {
        sucsses.innerHTML = "please enter a valid  value";
        sucsses.setAttribute("class", "text-danger fs-2")
    }

    // regex
    
    
    var regNam = / ^[a-zA-Z]{3,15}$ /
    
}


var storedValue = JSON.parse(localStorage.getItem("allUsersData"))
if (storedValue != null) {
    JSON.parse(localStorage.getItem("allUsersData"))
    userArr = storedValue;    
    
// loginBtn.addEventListener("click", signIn)

} else {
    userArr = []
}

function signIn() {
    let userEmail = document.getElementById("userEmail");
    let userPass = document.getElementById("userPass");

    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].email == userEmail.value && userArr[i].pass == userPass.value) {
            location.href = "userPage.html";
        } else {
            document.getElementById("wrong").innerHTML = "please check if the Email or Password are right";
        }
    }
}
loadingName(0)
        
function loadingName(i) {
    var test = userArr[i].name;
    return welcome.innerHTML = `welcome  ${test}`   
}