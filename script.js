let lastScrollTop = 0; 
const navbar = document.getElementById('navbar'); 
 
window.addEventListener('scroll', function() { 
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
 
    if (currentScroll > lastScrollTop) { 
        // Scrolling down 
        navbar.style.top = '-200px'; // Hide navbar (adjust based on your navbar height) 
    } else { 
        // Scrolling up 
        navbar.style.top = '0'; // Show navbar 
    } 
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling 
}); 


window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });


  var acc = document.getElementsByClassName("accordion");
  var i;

  for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if(pannel.style.display === "block"){
            pannel.style.display = "none";
        }
        else{
            pannel.style.display = "block";
        }
    });
  }

const menuOpenButton = document.querySelector("#button-menu-open");
const menuCloseButton = document.querySelector("#button-menu-close");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());