import MenuImage from './assets/images/food4.jpg';
import AboutImage from './assets/images/backgroundImage.jpg';
import ContactImage from './assets/images/contact.jpg';

import headerScroll from './headerScroll.js';
import menuPage from './menu.js';
import aboutPage from './about.js'
import contactPage from './contact.js';

const homePage = () => {
  const content = document.querySelector('.content');
  //Create header content
  headerScroll();
  
  //Create bodyContent container
  const bodyContent = document.createElement('div');
  bodyContent.classList.add('bodyContent');
  content.appendChild(bodyContent);

  //Create card factory function
  const createCard = (text, imageSrc) => {
    const card = document.createElement('div');
    card.classList.add('card');
    //Create card image
    const cardImage = document.createElement('img');
    cardImage.classList.add('cardImage');
    cardImage.src = imageSrc;
    card.appendChild(cardImage);
    //Create card text
    const cardText = document.createElement('p');
    cardText.textContent = text;
    card.appendChild(cardText);

    return card;
  };

  //Create menuCard
  const menuCard = createCard('Menu', MenuImage);
  bodyContent.appendChild(menuCard);
  menuCard.addEventListener('click', () => {
    content.textContent = '';
    menuPage();
  });

  //Create aboutCard
  const aboutCard = createCard('About Us', AboutImage);
  bodyContent.appendChild(aboutCard);
  aboutCard.addEventListener('click', () => {
    content.textContent = '';
    aboutPage();
  });

  //Create contactCard
  const contactCard = createCard('Contact Us', ContactImage);
  bodyContent.appendChild(contactCard);
  contactCard.addEventListener('click', () => {
    content.textContent = '';
    contactPage();
  });
}

export default homePage;