let form = document.querySelector("#signupForm");

let username = document.querySelector("#username");
let usernameRegex = /^[A-Z]\w{2,}$/; 

let email = document.querySelector("#email");
let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;  

let phone = document.querySelector("#phone");
let phoneRegex = /^(01)[0-9]{9}$/; 

form.addEventListener("submit", (e) => {
    e.preventDefault();  
 
    let validusername = usernameRegex.test(username.value);
    let validemail = emailRegex.test(email.value);
    let validphone = phoneRegex.test(phone.value);

    if (validusername && validemail && validphone) {
        alert("Submitted");
    } else {
        alert("Unsubmitted: Please check your input.");
    }
    
});



