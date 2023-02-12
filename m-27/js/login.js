
// login form validation


document.getElementById("submit-btn").addEventListener('click', function(){
    // email input 
    const email = document.getElementById('email-box');
    const emailValue =  email.value;
    // password input
    const password = document.getElementById('password-box');
    const passwordBox = password.value;
    // validation
    if (emailValue === "nieemhossen@gmail.com" && passwordBox === 'Nieemhossen1') {
        window.location.href = 'bank.html'
    }else{
        alert('your username and password not valid')
    }
})


