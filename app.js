
let arrData = [];
if (sessionStorage.arrData != null) {
    arrData = JSON.parse(sessionStorage.arrData);
}


let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let Name = event.target.exampleInputName.value;
    let password = event.target.exampleInputPassword.value;
    let email = event.target.exampleInputEmail.value;
    let number = event.target.exampleInputNumber.value;

    

    let student = new Students(Name, password, email,number);

    arrData.push(student);
    sessionStorage.setItem('arrData', JSON.stringify(arrData));
    console.log(sessionStorage.getItem('arrData'));


    // Define the regular expressions for each field
    let usernameRegex = /^\S+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^07\d{8}$/;
    
    // Validate the username field
    if (!usernameRegex.test(Name)) {
        alert("Username must not contain spaces!");
        return false;
    }
    
    // Validate the password field
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, and contain at least 1 number, 1 uppercase letter, and 1 special character!");
        return false;
    }
    
    // Validate the email field
    if (!emailRegex.test(email)) {
        alert("Email address must be in the format 'example@domain.com'!");
        return false;
    }
    
    // Validate the phone field
    if (!phoneRegex.test(number)) {
        alert("Phone number must be 10 digits long, and start with 07!");
        return false;
    }
    
    // If all fields are valid, submit the form
    alert("Form submitted successfully!");
    return true;



});

function Students(Name, password, email,number) {
    this.Name = Name;
    this.password = password;
    this.email = email;
    this.number = number;
}
