// Slide up animation when scrolling
const targets = document.querySelectorAll('section');

let options = {
    root: null,
    threshold: 0.1
}
const slideUp = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('animation-slide-up');
                target.style.opacity = 1;
                observer.disconnect();
            }
            else {
                target.style.opacity = 0;
            }
        });
    }, options);
    io.observe(target)
};


targets.forEach(slideUp)

// hamburger click event

const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('nav>ul');

hamburger.addEventListener('click', () => {
    if (hamburger.className == 'fas fa-bars hamburger') {
        hamburger.classList.toggle('open');
        nav.style.display = 'block';
        nav.style.animation = 'slide-right 0.5s ease'
    }
    else {
        hamburger.classList.toggle('open');
        nav.style.animation = 'slide-off 0.5s ease forwards'
        // nav.style.display = 'none';

    }

})
// add click event to ul of hamburger menu to slide off screen and close menu
nav.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.style.animation = 'slide-off 0.5s ease forwards';
})

// image gallery

// change image src every 5 seconds runs indefinatly because setTimeout calls the function it is in

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}




