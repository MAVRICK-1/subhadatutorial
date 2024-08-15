let button = document.querySelector('.bars');
let menu = document.querySelector('ul');
let btn = document.querySelector('#close');

button.addEventListener('click' , () =>{
    menu.classList.add('active');
});
btn.addEventListener('click' , () =>{
    menu.classList.remove('active');
});

// Used bootstrap v4.5,jquery v3.5.1, owl carousel v2, font awesome v4.7.0

