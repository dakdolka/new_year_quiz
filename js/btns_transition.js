const backs = [
    '../files/img/0.png',
    '../files/img/1.png',
    '../files/img/2.png',
];

const f_btns = document.querySelectorAll('.main-btn');
const inf_btns = document.querySelectorAll('.ibp');
console.log(inf_btns.length);
const btns = [...f_btns, ...inf_btns];


function setRandomBack() {
    this.style.backgroundImage = `url(${backs[Math.floor(Math.random() * backs.length)]})`;
}

for (let btn of btns) {
    btn.style.transition = 'all 0.3s ease-in-out';
    btn.addEventListener('mouseenter', setRandomBack);
    btn.addEventListener('mouseleave', function () {
        this.style.backgroundImage = ''; 
    });
}
