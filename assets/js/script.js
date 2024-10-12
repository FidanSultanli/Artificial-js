const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenu = document.querySelector(".mobile-menu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function() {
    mobileMenu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function() {
    mobileMenu.classList.remove("aktiv")
})



//Swipper kodlari
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  }); 






//   function saytaDaxilOlaniSalamla() {
//     alert("Welcome, dear")
//   }

//   function salamla(ad) {
//      alert("Xos geldin " + ad)
//   }


//   salamla("Fidan")


window.addEventListener("load",getMehsullariGetir)

async function getMehsullariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const internetdenGelenCavab = await fetch(unvan)
        // console.log(internetdenGelenCavab)
        const gelenMehsullar = await internetdenGelenCavab.json()
        console.log(gelenMehsullar)
    }

    catch(xeta) {
        console.log(xeta)
    }
}



