                                            
document.getElementById('submit-btn').addEventListener('click', function name() {
    

const emailField = document.getElementById('email');
const email=emailField.value;

const passwordField = document.getElementById('password');

const pass=passwordField.value;

console.log(email,pass);
if (email=='zihadalam2012@gmail.com' && pass== 'Fahad2020') {
    window.location.href='bank.html'
    console.log('login sucessfull');
    
} else {
    console.log('User name or password is incorrent');
    
}



})