
let menu=document.getElementById("navs")
let btn=document.getElementById("menu")
let closes=document.getElementById("closed")

btn.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})

closes.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})
