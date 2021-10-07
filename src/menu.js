function displayMenu(){
    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    document.getElementById('display').appendChild(menuContainer);

    let menuHeader = document.createElement('h1');
    menuHeader.setAttribute('id', 'menuHeader');
    menuHeader.textContent = 'Menu';
    document.getElementById('menuContainer').appendChild(menuHeader);

    let grid = document.createElement('div');
    grid.setAttribute('id', 'menuGrid');
    document.getElementById('menuContainer').appendChild(grid);
}

export default displayMenu;