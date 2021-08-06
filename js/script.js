const mobile_menu_button = document.getElementById("hambar-menu");
const mobile_nav = document.getElementById("mobile-nav");


mobile_menu_button.addEventListener("click",function(){
   
    if(mobile_nav.style.display === "block"){
        console.log("block")
        mobile_nav.style.display = "none"
    } else{
        mobile_nav.style.display = "block"
    }
})