let header = document.querySelector('header')
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const headerBoxesDiv = document.createElement('div');
headerBoxesDiv.classList.add('header_boxes');

const leftDiv = document.createElement('div');
leftDiv.classList.add('left');

const krugDiv = document.createElement('div');
krugDiv.classList.add('krug');

const krugButton = document.createElement('button');
const linesImg = document.createElement('img');
linesImg.id = 'lines';
linesImg.src = '/white_lines.png';
linesImg.alt = '3 lines';
krugButton.appendChild(linesImg);
krugDiv.appendChild(krugButton);

const menuHeaderDiv = document.createElement('div');
menuHeaderDiv.classList.add('menu_header');

const buttonIds = ['glavnaya', 'katalog', 'kontakts', 'partner'];
const buttonTexts = ['Главная', 'Каталог', 'Контакты', 'Стать партнёром'];
buttonIds.forEach((buttonId, index) => {
    const button = document.createElement('button');
    button.id = buttonId;
    button.textContent = buttonTexts[index];
    menuHeaderDiv.appendChild(button);
});

let main = menuHeaderDiv.firstChild
main.onclick = () => {
    location.assign('/')
}

let catalog = menuHeaderDiv.querySelector('#katalog')

catalog.onclick = () => {
    location.assign('/pages/catalog_page/')
}

leftDiv.appendChild(krugDiv);
leftDiv.appendChild(menuHeaderDiv);


const centerHeaderDiv = document.createElement('div');
centerHeaderDiv.classList.add('center_header');

const centerHeaderImg = document.createElement('img');
centerHeaderImg.src = '/Group 423.png';
centerHeaderImg.alt = '';
centerHeaderDiv.appendChild(centerHeaderImg);

centerHeaderDiv.onclick = () => {
    location.assign('/')
}

const forBDiv = document.createElement('div');
forBDiv.classList.add('for_b');
const bElement = document.createElement('b');
forBDiv.appendChild(bElement);
centerHeaderDiv.appendChild(forBDiv);

const rightHeaderDiv = document.createElement('div');
rightHeaderDiv.classList.add('right_header');

const rightHeaderImg = document.createElement('img');
rightHeaderImg.src = '/Vector.svg';
rightHeaderImg.alt = '';
rightHeaderDiv.appendChild(rightHeaderImg);

const rightHeaderSpan = document.createElement('span');
rightHeaderSpan.textContent = '+1 347 828 7777';
rightHeaderDiv.appendChild(rightHeaderSpan);

const languageDiv = document.createElement('div');
languageDiv.classList.add('language');

const languageButtonIds = ['english', 'black'];
const languageButtonTexts = ['EN', 'RU'];
languageButtonIds.forEach((buttonId, index) => {
    const button = document.createElement('button');
    button.id = buttonId;
    button.textContent = languageButtonTexts[index];
    languageDiv.appendChild(button);
});

const headerBtnDiv = document.createElement('div');
headerBtnDiv.classList.add('header_btn');

const registrationButton = document.createElement('button');
registrationButton.id = 'registration';
registrationButton.textContent = 'Регистрация';
headerBtnDiv.appendChild(registrationButton);

headerBoxesDiv.appendChild(leftDiv);
headerBoxesDiv.appendChild(centerHeaderDiv);
headerBoxesDiv.appendChild(rightHeaderDiv);
headerBoxesDiv.appendChild(languageDiv);
headerBoxesDiv.appendChild(headerBtnDiv);
containerDiv.appendChild(headerBoxesDiv);

header.appendChild(containerDiv)