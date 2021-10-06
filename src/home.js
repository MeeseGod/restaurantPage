function appendImage(){
    let img = document.createElement('img');
    img.setAttribute('id', 'advertImage');
    img.src = "images/soylent.png";
    document.getElementById("display").appendChild(img);
}

function displayHome(){
    appendImage();
}

export default displayHome;