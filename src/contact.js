function displayContactInfo(){
    let contact = document.createElement('div');
    contact.setAttribute('id', 'contactContainer');
    document.getElementById('display').appendChild(contact);

    let contactHeader = document.createElement('h2');
    contactHeader.setAttribute('id', 'contactHeader');
    contactHeader.textContent = "Contact Us"
    document.getElementById('contactContainer').appendChild(contactHeader);

    let contactInformationContainer = document.createElement('div');
    contactInformationContainer.setAttribute('id', 'contactInformation');
    document.getElementById('contactContainer').appendChild(contactInformationContainer)

    let textElements = document.createElement('div');
    textElements.setAttribute('id', 'textElements');
    document.getElementById('contactInformation').appendChild(textElements);

    populateContactContainer();
}

function populateContactContainer(){
    let phoneHeader = document.createElement('h3');
    phoneHeader.setAttribute('id', 'phoneHeader');
    phoneHeader.setAttribute('class', 'contactHeaders')
    phoneHeader.textContent = "Phone Number: ";
    document.getElementById('textElements').appendChild(phoneHeader);

    let phoneNumber = document.createElement('p');
    phoneNumber.setAttribute('id', 'phoneNumber');
    phoneNumber.setAttribute('class', 'contactParas')
    phoneNumber.textContent = '555-555-5555';
    document.getElementById('textElements').appendChild(phoneNumber);

    let emailHeader = document.createElement('h3');
    emailHeader.setAttribute('id', 'emailHeader');
    emailHeader.setAttribute('class', 'contactHeaders')
    emailHeader.textContent = "Email Address: ";
    document.getElementById('textElements').appendChild(emailHeader);

    let email = document.createElement('p');
    email.setAttribute('id', 'email');
    email.setAttribute('class', 'contactParas')
    email.textContent = 'obrien@soylent-green.le';
    document.getElementById('textElements').appendChild(email);

    let map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28928.027636145816!2d-71.01750961661052!3d24.99999857523423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2sca!4v1633979452930!5m2!1sen!2sca";
    map.width="600" 
    map.height="450" 
    map.style="border:0;" 
    map.allowfullscreen=""
    map.loading="lazy"
    document.getElementById('contactInformation').appendChild(map)
}

document.createElement('iframe')

export default displayContactInfo;