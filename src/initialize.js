function createHeader(){
    let header = document.createElement('h1');
    header.setAttribute('id', 'header');
    header.textContent = "O'Brien's Greenery";
    document.getElementById('content').appendChild(header);
}

function createSlogan(){
    let slogan = document.createElement('p');
    slogan.setAttribute('id', 'slogan');
    slogan.textContent = "O'Brien's Soylent - The Food of the People!"
    document.getElementById('content').appendChild(slogan);
}

function createNav(){
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    document.getElementById('content').appendChild(nav);
    createNavButtons();
}

function createDisplay(){
    let display = document.createElement('div');
    display.setAttribute('id', 'display');
    document.getElementById('content').appendChild(display);
}

function createNavButtons(){
    createHomeButton();
    createMenuButton();
    createContactButton();
}

function createHomeButton(){
    let home = document.createElement('button');
    home.setAttribute('id', 'homeButton');
    home.setAttribute('class', 'navButton');
    home.textContent = 'Home';
    document.getElementById('nav').appendChild(home);
}

function createMenuButton(){
    let menu = document.createElement('button');
    menu.setAttribute('id', 'menuButton');
    menu.setAttribute('class', 'navButton');
    menu.textContent = 'Menu';
    document.getElementById('nav').appendChild(menu);
}

function createContactButton(){
    let contact = document.createElement('button');
    contact.setAttribute('id', 'contactButton');
    contact.setAttribute('class', 'navButton');
    contact.textContent = 'Contact';
    document.getElementById('nav').appendChild(contact);
}

function initializePage(){
    createHeader();
    createSlogan();
    createNav();
    createDisplay();
}

export default initializePage;