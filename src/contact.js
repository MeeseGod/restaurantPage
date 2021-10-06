function displayContactInfo(){
    let contact = document.createElement('div');
    contact.setAttribute('id', 'contactInfo');
    document.getElementById('display').appendChild(contact);
}

export default displayContactInfo;