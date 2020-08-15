import WOW from 'wow.js';

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    setTimeout(() => {
        let preloader = document.querySelector('.preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
    new WOW().init();
});