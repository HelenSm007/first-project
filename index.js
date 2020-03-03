// Скрытие / показ блока с текстом
let button = document.querySelector('.hider');
let hidden = false;

button.addEventListener('click', function(){
    let elem = document.querySelector('.main-articles__list');
   if (! hidden) {
    // elem.hidden = ! elem.hidden;
    elem.setAttribute('style', 'visibility: hidden'); 
    button.value = 'Show';
    hidden = true;
   }else {
    // elem.hidden = ! elem.hidden;
    elem.setAttribute('style', 'visibility: visible'); 
    button.value = 'Hide';
    hidden = false;
   }
});


//Каарусель
let path = 'assets/',
			ext = '.jpg',
			curentImg = 1,
			itemImg = document.querySelector('.section__img');
let slider = document.querySelector('.slidershow-container');

slider.addEventListener('click', function(event){
    if (event.target == document.querySelector('.next')) {
        // alert('Presing NEXT');
        if (curentImg < 5) curentImg++;
		else curentImg = 1;
    }
    if (event.target == document.querySelector('.prev')) {
        // alert('Presing Prev');
        if (curentImg > 1) curentImg--;
		else curentImg = 5;
    }
    itemImg.src = path + 'pic' + curentImg + ext;
});        
       

// Button up
let anchor = document.querySelector('.go-top');

anchor.addEventListener('click', function(event){
    event.preventDefault(); //отмена стандартного обработчика
    let blockId = anchor.getAttribute('href');
    document.querySelector(''+blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});

// Делаем непрозначную / прозрачную кнопку
window.addEventListener('scroll', function(){
    anchor.hidden = (this.pageYOffset < document.documentElement.clientHeight)
});


// alert('Ok!');
//Плавное появление контента после полной загрузки страницы
document.addEventListener('DOMContentLoaded', function(){
   let sections = document.querySelectorAll('.section');
    sections.forEach(function(section){
        setTimeout(function(){
            section.classList.add('appear');

        }, 2000)
    });
            /*setTimeout(function(){
                document.querySelector('.main-articles__title').classList.add('appear');
    
            }, 0)*/  
});