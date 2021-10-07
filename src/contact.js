function displayContactInfo(){
    let contact = document.createElement('div');
    contact.setAttribute('id', 'contactContainer');
    document.getElementById('display').appendChild(contact);

    let contactHeader = document.createElement('h1');
    contactHeader.setAttribute('id', 'contactHeader');
    contactHeader.textContent = "Contact Us"
    document.getElementById('contactContainer').appendChild(contactHeader);
}

export default displayContactInfo;