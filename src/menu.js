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
    generateButtons();
}

function generateDivs(){
    for(let i = 0; i < 6; i++){
        let createMenuDiv = document.createElement('div');
        createMenuDiv.setAttribute('id', `menuDiv${i}`);
        createMenuDiv.setAttribute('class', 'menuDivs');
        document.getElementById('menuGrid').appendChild(createMenuDiv);
    }
}

function generateButtons(){
    for(let i = 0; i < 6; i++){
        let btn = document.createElement('button');
        btn.setAttribute('id', `menuButton${i}`);
        btn.setAttribute('class', 'menuButtons');
        btn.textContent = "Order"
        document.getElementById(`menuDiv${i}`).appendChild(btn);
    }
}

function populateMenu(){
    let item1header = document.createElement('h3');
    item1header.setAttribute('id', 'item1header');
    item1header.setAttribute('class', 'menuItem');
    item1header.textContent = "Soylent Shake";

    let item1description = document.createElement('p');
    item1description.setAttribute('id', 'item1description');
    item1description.setAttribute('class', 'menuDescription');
    item1description.textContent = "The classic Soylent Green shake for your meal on-the-go.";

    document.getElementById('menuDiv0').appendChild(item1header);
    document.getElementById('menuDiv0').appendChild(item1description);

    let item2header = document.createElement('h3');
    item2header.setAttribute('id', 'item2');
    item2header.setAttribute('class', 'menuItem');
    item2header.textContent = "Soylent Steak";

    let item2description = document.createElement('p');
    item2description.setAttribute('id', 'item2description');
    item2description.setAttribute('class', 'menuDescription');
    item2description.textContent = "The Soylent Steak is the healthy alternative to the classic natural steak.";

    document.getElementById('menuDiv1').appendChild(item2header);
    document.getElementById('menuDiv1').appendChild(item2description);

    let item3header = document.createElement('h3');
    item3header.setAttribute('id', 'item3');
    item3header.setAttribute('class', 'menuItem');
    item3header.textContent = "Soylent Stew";

    let item3description = document.createElement('p');
    item3description.setAttribute('id', 'item3description');
    item3description.setAttribute('class', 'menuDescription');
    item3description.textContent = "What's in it? Soylent Green! What else is in it? We don't know and neither does the FDA.";

    document.getElementById('menuDiv2').appendChild(item3header);
    document.getElementById('menuDiv2').appendChild(item3description);

    let item4header = document.createElement('h3');
    item4header.setAttribute('id', 'item4');
    item4header.setAttribute('class', 'menuItem');
    item4header.textContent = "Soylent Jello";

    let item4description = document.createElement('p');
    item4description.setAttribute('id', 'item4description');
    item4description.setAttribute('class', 'menuDescription');
    item4description.textContent = "The jiggly treat that can't be beat (Nor properly digested)";

    document.getElementById('menuDiv3').appendChild(item4header);
    document.getElementById('menuDiv3').appendChild(item4description);

    let item5header = document.createElement('h3');
    item5header.setAttribute('id', 'item5');
    item5header.setAttribute('class', 'menuItem');
    item5header.textContent = "Canned Soylent Green";

    let item5description = document.createElement('p');
    item5description.setAttribute('id', 'item5description');
    item5description.setAttribute('class', 'menuDescription');
    item5description.textContent = "Classic Soylent Green from a can - What more could you ask for?";

    document.getElementById('menuDiv4').appendChild(item5header);
    document.getElementById('menuDiv4').appendChild(item5description);

    let item6header = document.createElement('h3');
    item6header.setAttribute('id', 'item6');
    item6header.setAttribute('class', 'menuItem');
    item6header.textContent = "Soylent Pasta";

    let item6description = document.createElement('p');
    item6description.setAttribute('id', 'item6description');
    item6description.setAttribute('class', 'menuDescription');
    item6description.textContent = "Green noodley goodness on your plate! (Any movement is a byproduct of heat release and nothing more)";

    document.getElementById('menuDiv5').appendChild(item6header);
    document.getElementById('menuDiv5').appendChild(item6description);
}
export default displayMenu;