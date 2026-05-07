let btn = document.querySelector('h1')
btn.addEventListener('click', function() {
  alert("как тебе мой сайт?")
})
let burger = document.querySelector('.burger');
burger.addEventListener('click', run)
let menu = document.querySelector('.menu')
function run(){
    burger.classList.toggle('active')
}