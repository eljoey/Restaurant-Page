import { createContent } from './content.js'
import { spawn } from 'child_process';


//Makes Webpage
createContent();


let menu = document.querySelector('.menu');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let contentDiv = document.getElementById('content');

menu.addEventListener('click', menuTab);
about.addEventListener('click', aboutTab);
contact.addEventListener('click', contactTab);

function deleteContent() {
    let child = contentDiv.lastElementChild;
    while (child) {       
        contentDiv.removeChild(child);
        child = contentDiv.lastElementChild;
    }
    let mainTitle = document.querySelector('.main-title');
    mainTitle.setAttribute('id', 'top');

    menu.setAttribute('style', '')
    about.setAttribute('style', '')
    contact.setAttribute('style', '')

}

function menuTab () {
    deleteContent();
    menu.setAttribute('style', 'color: white; -webkit-text-stroke: 1px black;');

    let header = document.createElement('h1');
    header.innerHTML = 'MENU';

    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menuContainer.setAttribute('id', 'tab-info');
    menuContainer.appendChild(header)
    
    let i = 1;
    while (i < 7) {
        let newDiv = document.createElement('div');
        newDiv.classList.add(`menu-${i}`);
        let newSpan = document.createElement('span');
        newSpan.classList.add('icon-footer');
        newSpan.innerHTML = 'Pizza Pizza';

        newDiv.appendChild(newSpan)
        menuContainer.appendChild(newDiv)
        i++;
    }

    contentDiv.appendChild(menuContainer);

 }

function aboutTab() {
    deleteContent();
    about.setAttribute('style', 'color: white; -webkit-text-stroke: 1px black;');

    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    aboutContainer.setAttribute('id', 'tab-info');    

    let header = document.createElement('h1');
    header.innerHTML = 'About Us';
    aboutContainer.appendChild(header);

    let imageOfStore = document.createElement('img');
    imageOfStore.setAttribute('src', '../src/pizzapizza.jpeg');
    imageOfStore.setAttribute('id', 'pizza');
    aboutContainer.appendChild(imageOfStore);

    let aboutParagraph = document.createElement('p');
    let longParagraph = 
    'Pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza ' + 
    'pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza'
    aboutParagraph.innerHTML = longParagraph;
    aboutContainer.appendChild(aboutParagraph);

    contentDiv.appendChild(aboutContainer);
}

function contactTab() {
    deleteContent();
    contact.setAttribute('style', 'color: white; -webkit-text-stroke: 1px black;');

    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.setAttribute('id', 'tab-info');

    let header = document.createElement('h1');
    header.innerHTML = 'Contact Us';
    contactContainer.appendChild(header);
    
    let facebookContactUs = document.createElement('i');
    facebookContactUs.classList.add('fab', 'fa-facebook', 'fa-2x');
    facebookContactUs.setAttribute('id', 'tab-facebook');
    facebookContactUs.innerHTML = 'Pizza Pizza';  
    contactContainer.appendChild(facebookContactUs);

    let twitterContactUs = document.createElement('i');
    twitterContactUs.classList.add('fab', 'fa-twitter', 'fa-2x');
    twitterContactUs.setAttribute('id', 'tab-twitter');
    twitterContactUs.innerHTML = '@PizzaPizza';  
    contactContainer.appendChild(twitterContactUs);

    let phoneNumberSpan = document.createElement('span');
    phoneNumberSpan.innerHTML = 'Pizza: P-IZZ-ZA';
    contactContainer.appendChild(phoneNumberSpan);

    let addressSpan1 = document.createElement('span');
    addressSpan1.innerHTML = 'Pizza: 123 Pizza pi';
    let addressSpan2 = document.createElement('span');
    addressSpan2.innerHTML = 'Pizza, PZ 01234';
    contactContainer.appendChild(addressSpan1);
    contactContainer.appendChild(addressSpan2);

    contentDiv.appendChild(contactContainer);
}