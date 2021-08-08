const scrollbarPosition = 1200;
const scrollbarPositionTablet = 900;
const services = document.querySelector('.services');



window.addEventListener('scroll', () => {
    if (window.scrollY >= scrollbarPositionTablet && window.innerWidth > 359 && window.innerWidth < 1500) {
        console.log('Tablet');
        services.classList.add('animation');
    }
    else if (window.scrollY >= scrollbarPosition) {
        console.log('Desktop and mobile')
        services.classList.add('animation');

    }
})

