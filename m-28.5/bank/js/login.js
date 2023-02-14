
document.getElementById('submit-btn').addEventListener('click', function(){
        const emailBox = document.getElementById('email-box').value;
        const passwordBox = document.getElementById('password-box').value;
        if (emailBox === "nieem@gmail.com" && passwordBox === "1234") {
            window.location.href = "bank.html"
        }else{
            alert('please provied correct username')
        }
    
})