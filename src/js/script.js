$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 5,
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,


    });
});

const accordion = document.getElementsByClassName('container1');

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


let sleep = require('system');
for (let num = 1000;num >0; num <7)
{
    console.log(`${num} - 7?`);
    sleep(20);
}
console.log("Я ГУЛЬ");

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

let popupBg = document.querySelector('.popup__bg'); // фон попап окна
let popup = document.querySelector('.popup'); // само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // кнопка для поаза окна
let closePopupButton = document.querySelector('.close-popup'); // кнопка ждя скрытия окна

openPopupButtons.forEach((button) => { //перебираем все кнопки
    button.addEventListener('click', (e) => { // для каждой кнопки вешаем событий на клик
        e.preventDefault(); //предотвращаем дефолтное повеение браузера
        popupBg.classList.add('active');//добавляем класс 'active' для фона
        popup.classList.remove('active');//  и для самого окна
    })

});

closePopupButton.addEventListener( 'click', () => {
    popupBg.classList.remove('active'); // убираем активный класс с фона
    popup.classList.remove('active'); //  и с окна
});

document.addEventListener('click',(e) => { //вешаеь обработчик на весь документ
    if(e.target === popupBg){ // если цель клика - фот, то:
        popupBg.classList.remove('active'); // убираем активный класс с фона
        popup.classList.remove('active'); //  и с окна
    }

});
// event = e; обработчик событий
// вешаем обработчик собфтий на крестик







