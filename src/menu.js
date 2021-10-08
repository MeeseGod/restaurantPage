function displayMenu(){
    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    document.getElementById('display').appendChild(menuContainer);

    let menuHeader = document.createElement('h2');
    menuHeader.setAttribute('id', 'menuHeader');
    menuHeader.textContent = 'Menu';
    document.getElementById('menuContainer').appendChild(menuHeader);

    let grid = document.createElement('div');
    grid.setAttribute('id', 'menuGrid');
    document.getElementById('menuContainer').appendChild(grid);

    generateDivs();
    populateMenu();
}

function generateDivs(){
    for(let i = 0; i < 6; i++){
        let createMenuDiv = document.createElement('div');
        createMenuDiv.setAttribute('id', `menuDiv${i}`);
        document.getElementById('menuGrid').appendChild(createMenuDiv);
    }
}

function populateMenu(){
    let item1header = document.createElement('h3');
    item1header.setAttribute('id', 'item1');
    item1header.setAttribute('class', 'menuItem');
    item1header.textContent = "Soylent Shake";

    document.getElementById('menuDiv0').appendChild(item1header);
}

export default displayMenu;