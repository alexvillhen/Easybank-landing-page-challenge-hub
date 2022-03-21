const ham = document.querySelector('.hamburguer');
const menu = document.getElementById('mobile-menu');
const main = document.querySelector('main');
let menuIsOn = false;

const toggleMenu = () =>{
    if(menuIsOn){
        menu.style.top = "-1000%";
        menuIsOn = false;
    } else{
        menu.style.top = "40px ";
        menuIsOn = true;
    }
}

ham.addEventListener('click', toggleMenu);
