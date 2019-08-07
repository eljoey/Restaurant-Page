function createContent() {
    
//Header Section
    const mainBody = document.querySelector('.topsection');
    const header = document.createElement('header');
    
    //title
    const headTitle = document.createElement('div');
    headTitle.classList.add('headTitle');
    headTitle.innerHTML = 'Pizza Pizza';
    
    //tabs
    const headTabs = document.createElement('div');
    headTabs.classList.add('headTabs');
    
    const menuTab = document.createElement('span');
    menuTab.classList.add('menu', 'tabs');
    menuTab.innerHTML = 'Menu';

    const aboutTab = document.createElement('span');
    aboutTab.classList.add('about', 'tabs');
    aboutTab.innerHTML = 'About Us';

    const contactTab = document.createElement('span');
    contactTab.classList.add('contact', 'tabs');
    contactTab.innerHTML = 'Contact Us';

    //Icons
    const icons = document.createElement('div');
    icons.classList.add('icons');

    const facebookHeader = document.createElement('i');
    facebookHeader.classList.add('fab', 'fa-facebook', 'fa-2x');

    const twitterheader = document.createElement('i');
    twitterheader.classList.add('fab', 'fa-twitter', 'fa-2x');

//Main Content
    const contentDiv = document.getElementById('content');

    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.setAttribute('id', 'center');

    const title = document.createElement('h1');
    title.innerHTML = 'Pizza Pizza';

    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.innerHTML = 'Pizza pizza pizza pizza pizza';

    header.appendChild(headTitle);
    headTabs.appendChild(menuTab)
    headTabs.appendChild(aboutTab)
    headTabs.appendChild(contactTab);
    header.appendChild(headTabs);
    icons.appendChild(facebookHeader);
    icons.appendChild(twitterheader);
    header.appendChild(icons)

    mainTitle.appendChild(title)
    mainTitle.appendChild(slogan);
    mainBody.appendChild(header)
    mainBody.appendChild(mainTitle);    
}

export { createContent }