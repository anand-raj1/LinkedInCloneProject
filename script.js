let profileMenu = document.getElementById("profile-menu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}
const imgdiv = document.querySelector("user-image");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadbtn = document.querySelector("#uploadbutton");

file.addEventListener('change',function(){
    const chosedFile = this.files[0];
    if(chosedFile){
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(chosedFile);
    }
});


let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("show-more-link");

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");
    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show Less <b>-</b>"
    }
    else{
        moreLink.innerHTML = "Show More <b>+</b>"  
    }
}

function togglePopup(){
    document.getElementById("popup").classList.toggle("active");
}
function togglePopup2(){
    document.getElementById("popup2").classList.toggle("active");
   
   
}
function togglePopup3(){
    document.getElementById("popup3").classList.toggle("active");
   
   
}
function togglePopup4(){
    document.getElementById("popup4").classList.toggle("active");
   
   
}



















