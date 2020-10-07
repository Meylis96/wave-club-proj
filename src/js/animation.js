function animation(){

    //FOR THE HEADER 
    let animateCSS = (element, animation, prefix, duration, delay) =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);
        node.classList.add(`${prefix}delay-${delay}`);
        node.style.setProperty('--animate-duration', duration);

        function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
  

  animateCSS('.header__logo', 'fadeInDown', 'animate__' ,'1s', '1s');
  animateCSS('.header__title', 'fadeInUp', 'animate__' ,'1s', '3s');
  animateCSS('.header__subtitle', 'fadeInDown', 'animate__' ,'1s', '3s');


    // FOR ELEMENTS IN VIEWPORT
    window.addEventListener("scroll", onScroll);

    function onScroll() {
        //ADD ELEMENTS TO ANIMATE AND ANIMATION CLASSNAME
    for (let item of document.querySelectorAll(".about__lesson")) {
        elementVisible(item, "animate__fadeInLeft", "animate__delay-1s");
    }
    //ADD ELEMENTS TO ANIMATE AND ANIMATION CLASSNAME
    for (let item of document.querySelectorAll(".about__membership")) {
        elementVisible(item, "animate__fadeInRight", "animate__delay-1s");
    }
    }

    function elementVisible(el, classToAdd, delay) {
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let bottom = top + height;

    let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
    let IsBeforeTop = bottom < window.pageYOffset;

    if (!IsOverBottom && !IsBeforeTop) {
        el.classList.add(classToAdd, delay);
    }
    }

}

export default animation;