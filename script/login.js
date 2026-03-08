// console.log("login home")

document.getElementById("login-btn").addEventListener("click", function(){
   
    // 1-get the user name input
    const numberInput = document.getElementById("input-number");
    const userName = numberInput.value;
    console.log( userName);
    // 2-get the pin input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
     console.log(pin);
    // 3-match pin & user name
    if( userName==='admin' && pin ==='admin123'){
    // 3-1 true:: alert> homepage
    alert('login success');
    // window.location.replace("/home.html")
    window.location.assign("./home.html")
}
else{
    // 3-2 true::> alert::> return
    alert('login failed');
    return;
}
});