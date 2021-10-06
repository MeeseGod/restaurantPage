function displayMenu(){
    let grid = document.createElement('div');
    grid.setAttribute('id', 'menuGrid');
    document.getElementById('display').appendChild(grid);
}

export default displayMenu;