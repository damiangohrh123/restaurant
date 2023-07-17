//Import header section
import headerScroll from './headerScroll';

//Import imges
import Pikachu from './assets/images/pikachu.png';
import Bulbasaur from './assets/images/bulbasaur.png';
import Squirtle from './assets/images/squirtle.png';

const contactPage = () => {
  const content = document.querySelector('.content');
  //Create header content
  headerScroll();

  const contactContent = document.createElement('div');
  contactContent.classList.add('contactContent');
  content.appendChild(contactContent);
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us';
  contactContent.appendChild(contactTitle);

  /**
   * Create contactRow factory function 
   * First two arguments are neccassary
   * Any additional arguments added are appended to the contactRow
   **/ 
    const createContactRow = (imageSrc, header, ...args) => {
      const contactRow = document.createElement('div');
      contactRow.classList.add('contactRow');
      //Create image
      const contactImage = document.createElement('img');
      contactImage.src = imageSrc;
      contactRow.appendChild(contactImage);
      //Create text
      const contactTextContainer = document.createElement('div');
      contactTextContainer.classList.add('contactTextContainer');
      contactRow.appendChild(contactTextContainer);
      const contactHeader = document.createElement('p');
      contactHeader.classList.add('contactHeader');
      contactHeader.textContent = header;
      contactTextContainer.appendChild(contactHeader);

      //Create any additional information added from the arguments
      for (let i = 0; i < args.length; i ++) {
        const contactInfo = document.createElement('p');
        contactInfo.classList.add('contactInfo');
        contactInfo.textContent = args[i];
        contactTextContainer.appendChild(contactInfo);
      }

      return contactRow;
    }

  //Create contact section
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactContainer');
  contactContent.appendChild(contactContainer);

  //Row 1
  const contactRow1 = createContactRow(Pikachu, 
                                      `Contact Information`, 
                                      `Phone: 1-800-POKÉCAFE`,
                                      `Email: info@pokecafe.com`);
  contactContainer.appendChild(contactRow1);

  //Row 2
  const contactRow2 = createContactRow(Bulbasaur, 
                                      `Cafe Hours`, 
                                      `Monday to Friday: 10:00 AM to 8:00 PM`,
                                      `Saturday and Sunday: 9:00 AM to 10:00 PM`);
  contactContainer.appendChild(contactRow2);

  //Row 2
  const contactRow3 = createContactRow(Squirtle, 
                                      `Social Media`, 
                                      `Facebook`,
                                      `Twitter`,
                                      `Instagram`);
  contactContainer.appendChild(contactRow3);

}

export default contactPage;