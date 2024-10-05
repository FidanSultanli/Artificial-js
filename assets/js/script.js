const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenu = document.querySelector(".mobile-menu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function() {
    mobileMenu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function() {
    mobileMenu.classList.remove("aktiv")
})