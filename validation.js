
let loginbtn = document.getElementById("loginbtn");
loginbtn.onclick = function (){
    
    var LoginEmail = document.getElementById('LoginEmail').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
    if(LoginEmail == "pandeyanandraj12@gmail.com" && LoginPassword == "12345"){
        
        
        window.location.assign("index.html");
    }
    
    else{
        alert("wrong password");
    }
    
}








