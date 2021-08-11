

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
})

