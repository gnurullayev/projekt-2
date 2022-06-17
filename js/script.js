let menuOppen = document.querySelector(".span_menu"),
    menuClous = document.querySelector(".span_x"),
    navbor = document.querySelector(".nav"),
    navItem = document.querySelectorAll('.nav-item');
    
console.log(menuOppen)
console.log(navbor)




menuOppen.addEventListener("click", () => {
    navbor.style.left = "0"
    menuOppen.style.display = "none"
    menuClous.style.display = "block"
})

menuClous.addEventListener("click", () => {
    navbor.style.left = "-100%"
    menuClous.style.display = "none"
    menuOppen.style.display = "block"

})

navItem.forEach(active => {
    active.addEventListener("click", () => {
        navbor.style.left = "-100%"
        menuClous.style.display = "none"
        menuOppen.style.display = "block"
    })
})