document.getElementById('submit-btn').addEventListener('click', function(){
    // get email filed value
    const emailBox =  document.getElementById('email-box');
    const emailValue= emailBox.value;

    // get password field value
    const passwordBox = document.getElementById('password-box');
    const paswordValue = passwordBox.value;

    // validition
    if(emailValue === 'nieem@gmail.com' && paswordValue === '1234'){
            window.location.href = 'bank.html'
    }else{
        alert('put correct user')
    }

})