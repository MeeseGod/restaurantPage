function createDescription(){
    let descContainer = document.createElement('div');
    descContainer.setAttribute('id', 'descContainer');
    document.getElementById('display').appendChild(descContainer);

    let descHeader = document.createElement('h2');
    descHeader.setAttribute('id', 'descHeader');
    descHeader.textContent = "Our Mission";
    document.getElementById("descContainer").appendChild(descHeader);

    let lineBreak = document.createElement('br');

    let descParagraph1 = document.createElement('p');
    descParagraph1.setAttribute('id', 'descParagraph1');
    descParagraph1.setAttribute('class', 'descParagraphs');
    descParagraph1.textContent = "Founded in 1984, O'Brien's Greenery is dedicated to providing sustainable alternative food products in the form of Soylent Green.";
    document.getElementById("descContainer").appendChild(descParagraph1);

    document.getElementById("descContainer").appendChild(lineBreak);

    let descParagraph2 = document.createElement('p');
    descParagraph2.setAttribute('id', 'descParagraph2');
    descParagraph2.setAttribute('class', 'descParagraphs');
    descParagraph2.textContent = "Soylent Green is a reliable food alternative created by Andrew O'Brien, founder of O'Brien's Greenery. O'Brien saw mankind's rapid growth and development and worried about future sustainability. Would mankind be able to sustain this level of growth? Who would feed the poor and hungry? These questions pushed O'Brien into developing the formula for Soylent Green and opening a chain of small restaurants that served it as a speciality item.";
    document.getElementById("descContainer").appendChild(descParagraph2);

    document.getElementById("descContainer").appendChild(lineBreak);

    let descParagraph3 = document.createElement('p');
    descParagraph3.setAttribute('id', 'descParagraph3');
    descParagraph3.setAttribute('class', 'descParagraphs');
    descParagraph3.textContent = "Now you too may enjoy the fine taste of Soylent Green at an affordable price! Visit your local Greenery and ask for any number of our Soylent Green products.";
    document.getElementById("descContainer").appendChild(descParagraph3);
};

function displayHome(){
    createDescription();
};

export default displayHome;