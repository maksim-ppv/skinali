const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.menu-button__line')
btn.addEventListener('click', function(){
   menu.classList.toggle('menu_active')
   btn.classList.toggle('line_active')
});
