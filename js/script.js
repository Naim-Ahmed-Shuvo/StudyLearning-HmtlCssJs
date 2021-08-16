

// sticky
window.addEventListener("scroll",function(){
   
    const nav = document.querySelector("#nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
})

$(document).ready(function(){
    console.log("ready")
    $(".mobile-menu").on('click',function(){
       $(this).toggleClass("open")
       $(".mobile-navv").slideToggle("slow")
    })
    $(".scrool-top-button").on("click",function(){
        console.log("clicked")
        $('html,body').animate({
            scrollTop:0
        },2000)
    })
})

const scrollUpBtn = document.querySelector(".scrool-top-button");

window.addEventListener("scroll",()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset>100){
        scrollUpBtn.classList.add("active")
    } else{
        scrollUpBtn.classList.remove("active")
    }
})

