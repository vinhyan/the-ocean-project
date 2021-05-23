
const body = document.querySelector('body');
const navBar = document.querySelector('nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('nav li');
const actionBtn = document.querySelector('.action-btn');

const app = () => {

    burger.addEventListener('click', () => {
        navBar.classList.toggle('nav-active');

        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navFades 0.5s ease ${index/ 7 + 0.3}s forwards`

            }

        });

        if (actionBtn.style.animation) {
            actionBtn.style.animation = '';
        } else {
            actionBtn.style.animation = `navFades 0.5s ease ${navLinks.length/7 + 0.3}s forwards`

        }

        const navActive = document.querySelector('.nav-active');
        if (navActive) {
            body.style.overflowY = 'hidden'
        } else {
            body.style.overflowY = 'visible'
        }

    })

    
    
}

app();

console.log(2 * '#');