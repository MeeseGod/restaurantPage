import initializePage from "./initialize"
import displayHome from "./home"
import displayMenu from "./menu"
import emptyContent from "./emptyDiv"
import displayContactInfo from "./contact"

initializePage();
displayHome();

document.getElementById('homeButton').addEventListener('click', function(){
    emptyContent();
    displayHome();
})

document.getElementById('menuButton').addEventListener('click', function(){
    emptyContent();
    displayMenu();
})

document.getElementById('contactButton').addEventListener('click', function(){
    emptyContent();
    displayContactInfo();
});