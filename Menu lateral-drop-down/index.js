const menu = document.querySelector(".hamburger")
const menuLateral = document.querySelector(".menu-lateral")
const producto = document.querySelector(".producto")
const sub_menu = document.querySelector(".sub-menu")

menu.addEventListener("click",()=>{
    menu.classList.toggle("active")
    menuLateral.classList.toggle("little")
})
producto.addEventListener("click",()=>{
    sub_menu.classList.toggle("activado")
})