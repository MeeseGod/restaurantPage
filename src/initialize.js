function createNav(){
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    document.getElementById('content').appendChild(nav);
    createNavButtons();
    // document.body.appendChild(nav);
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
    home.textContent = 'Home';
    document.getElementById('nav').appendChild(home);
}

function createMenuButton(){
    let menu = document.createElement('button');
    menu.setAttribute('id', 'menuButton');
    menu.textContent = 'Menu';
    document.getElementById('nav').appendChild(menu);
}

function createContactButton(){
    let contact = document.createElement('button');
    contact.setAttribute('id', 'contactButton');
    contact.textContent = 'Contact';
    document.getElementById('nav').appendChild(contact);
}

function initializePage(){
    createNav();
    createDisplay();
}

export default initializePage;