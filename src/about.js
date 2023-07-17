//Import header section
import headerScroll from './headerScroll';

//Import images
import BackgroundImage2 from './assets/images/backgroundImage.jpg';
import BackgroundImage3 from './assets/images/backgroundImage3.jpg';
import BackgroundImage4 from './assets/images/backgroundImage4.jpg';

const aboutPage = () => {
  const content = document.querySelector('.content');
  //Create header content
  headerScroll();

  const aboutContent = document.createElement('div');
  aboutContent.classList.add('aboutContent');
  content.appendChild(aboutContent);
  const aboutTitle = document.createElement('h1');
  aboutTitle.textContent = 'About Us';
  aboutContent.appendChild(aboutTitle);

  //Create aboutRow factory function
  const createAboutRow = (text, image, isTextFirst) => {
    const aboutRow = document.createElement('div');
    aboutRow.classList.add('aboutRow');
    //Create image
    const aboutImage = document.createElement('img');
    aboutImage.src = image;
    //Create text
    const aboutText = document.createElement('span');
    aboutText.textContent = text;

    if (isTextFirst) {
      aboutRow.appendChild(aboutText);
      aboutRow.appendChild(aboutImage);
    }
    else {
      aboutRow.appendChild(aboutImage);
      aboutRow.appendChild(aboutText);
    }

    return aboutRow;
  }

  //Create about section
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('aboutContainer');
  aboutContent.appendChild(aboutContainer);

  //Row 1
  const aboutRow1 = createAboutRow(`Welcome to the first-ever official Pokémon Cafe.
                                    Enjoy original cute sweets, meals and drinks in a stylish wooden room.
                                    Share an unforgettable time surrounded by your favorite Pokémon!`,
                                    BackgroundImage2, false);
  aboutContainer.appendChild(aboutRow1);

  //Row 2
  const aboutRow2 = createAboutRow(`Step into our restaurant, and you'll be instantly transported to a Pokémon paradise. 
                                    The walls are adorned with vibrant murals showcasing iconic Pokémon, 
                                    and our décor is inspired by different regions from the Pokémon world. 
                                    You might even spot life-sized Pokémon statues scattered throughout the dining area!`,
                                    BackgroundImage3, true);    
  aboutContainer.appendChild(aboutRow2);

  //Row 2
  const aboutRow3 = createAboutRow(`We take great pride in crafting a menu that pays homage to both Pokémon and gastronomic delights. 
                                    Our talented chefs have curated a range of dishes that blend international flavors with Pokémon-themed twists. 
                                    We offer a variety of options that cater to every palate, including vegetarian and vegan choices.`,
                                    BackgroundImage4, false);
  aboutContainer.appendChild(aboutRow3);
}

export default aboutPage;