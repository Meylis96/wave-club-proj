import animation from './animation';

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    setTimeout(() => {
        let preloader = document.querySelector('.preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);

    animation();
});