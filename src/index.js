import initializePage from "./initialize"
import displayHome from "./home"
import emptyContent from "./emptyDiv"


initializePage();
displayHome();


document.getElementById('menuButton').addEventListener('click', function(){
    emptyContent();
})