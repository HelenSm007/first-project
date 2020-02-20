// import "./css/app.css";

var doc = document;

let addTag = function(parentTag, nameTag, classNameTag, text = false){
    let newTag = doc.createElement(nameTag);
    newTag.className = classNameTag;
    if (text){
        newTag.innerHTML = text;
    }
    parentTag.append(newTag);
    return newTag;
}

let main = addTag(document.body,'main', 'profile');
// document.body.prepend(main);

// let coment = document.createTextNode(<!-- Section main -->);
// main.append(coment);

// -- Section main -
let section = addTag(main,'section', 'section main_section section_black');
// main.append(section);

let article = addTag(section,'article', 'main-articles main-articles_white');
// section.append(article);

let h1 = addTag(article, 'h1', 'main-articles__title', 'Helen Smyrnova');
// article.append(h1);

let ul = addTag(article,'ul', 'main-articles__list');
// article.append(ul);

for(let i=0; i < 4; i++){
    let li = addTag(ul, 'li', 'main-articles__item');
}

let elementslist = document.querySelectorAll('li.main-articles__item');
elementslist[0].innerHTML = 'I study HTML5, CSS3, JS';
elementslist[1].innerHTML = 'Experience creating a site HTML page based on design layouts';
elementslist[2].innerHTML = 'Basic knowledge of English';
elementslist[3].innerHTML = 'Basic knowledge of some programming languages';

let img = addTag(section, 'img', 'section__img');
img.setAttribute('src', 'assets/pic.jpg');

//------ Section About ------
section = addTag(main,'section', 'section section-about');
article = addTag(section,'article', 'about-article');

let h2 = addTag(article, 'h2', 'title', 'About your product');
let p = addTag(article, 'p', 'about-article__text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at. Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.');

p = addTag(article, 'p', 'about-article__text', 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.');
img = addTag(section, 'img', 'about__img');
img.setAttribute('src', 'assets/video.png');

//-- Section Dignity --
section = addTag(main,'section', 'section section-dignity');
h2 = addTag(section, 'h2', 'title title_center', 'Personal qualities and skills');
article = addTag(section,'article', 'dignity-article');

let div = addTag(article, 'div', 'dignity-article__column');

ul = addTag(div,'ul', 'dignity-article__list');

for(let i=0; i < 3; i++){
    let li = addTag(ul, 'li', 'dignity-article__item');
}

let divClon = div.cloneNode(true);
article.append(divClon);

elementslist = document.querySelectorAll('li.dignity-article__item');
elementslist[0].innerHTML = 'Analytical mind.';
elementslist[1].innerHTML = 'Responsibility.';
elementslist[2].innerHTML = 'Attention to detail.';
elementslist[3].innerHTML = 'Creativity.';
elementslist[4].innerHTML = 'Orientation on the result.';
elementslist[5].innerHTML = 'I want to learn new technologies and tools.';

// -- Section  Scrinshots --
section = addTag(main,'section', 'section');
    h2 = addTag(section, 'h2', 'title title_center', 'Scrinshots');
    article = addTag(section,'article', 'scrinshots-article');
        let divColumn = addTag(article, 'div', 'scrinshots-article__column');
            let divRow = addTag(divColumn, 'div', 'scrinshots-article__row');
                img = addTag(divRow, 'img', 'scrinshots-article__img');
                img.setAttribute('src', 'assets/scrinshot_image.png');
                
                let divChild = addTag(divRow, 'div', 'scrinshots-article__description');
                    let h3 = addTag(divChild, 'h3', 'scrinshots-article__title', 'The description for the image');
                    p = addTag(divChild, 'p', 'scrinshots-article__text', 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.');
            let divRowClon = divRow.cloneNode(true);
            divColumn.append(divRowClon);
        let divColumnClon = divColumn.cloneNode(true);
        article.append(divColumnClon);

