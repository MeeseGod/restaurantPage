function appendImage(){
    let img = document.createElement('img');
    img.setAttribute('id', 'advertImage');
    img.src = "images/soylent.png";
    document.getElementById("display").appendChild(img);
}

function createDescription(){
    let descHeader = document.createElement('h2');
    descHeader.setAttribute('id', 'descHeader');
    descHeader.textContent = "Our Mission";
    document.getElementById("display").appendChild(descHeader);
}

function displayHome(){
    appendImage();
    createDescription();
}

export default displayHome;