'use strict';
let menuButton = document.getElementById('menu');
let menu = document.getElementsByClassName('main-nav')[0];
menuButton.addEventListener('click', function(){
    menu.style.display = menu.style.display == 'none'? 'block' : 'none';
})

