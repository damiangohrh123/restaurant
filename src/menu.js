//Import header section
import headerScroll from './headerScroll';

//Import all image src
import Food1 from './assets/images/food1.jpg';
import Food2 from './assets/images/food2.jpg';
import Food3 from './assets/images/food3.jpg';
import Food4 from './assets/images/food4.jpg';
import Drink1 from './assets/images/drink1.jpg';
import Drink2 from './assets/images/drink2.jpg';
import Drink3 from './assets/images/drink3.jpg';
import Drink4 from './assets/images/drink4.jpg';
import Drink5 from './assets/images/drink5.jpg';
import Drink6 from './assets/images/drink6.jpg';
import Drink7 from './assets/images/drink7.jpg';
import Drink8 from './assets/images/drink8.jpg';
import Drink9 from './assets/images/drink9.jpg';
import Drink10 from './assets/images/drink10.jpg';
import Drink11 from './assets/images/drink11.jpg';
import Drink12 from './assets/images/drink12.jpg';
import Drink13 from './assets/images/drink13.jpg';
import Dessert1 from './assets/images/dessert1.jpg';
import Dessert2 from './assets/images/dessert2.jpg';
import Dessert3 from './assets/images/dessert3.jpg';
import FoodSpecial1 from './assets/images/foodSpecial1.jpg';
import FoodSpecial2 from './assets/images/foodSpecial2.jpg';
import FoodSpecial3 from './assets/images/foodSpecial3.jpg';
import FoodSpecial4 from './assets/images/foodSpecial4.jpg';
import FoodSpecial5 from './assets/images/foodSpecial5.jpg';

const menuPage = () => {
  const content = document.querySelector('.content');
  //Create header content
  headerScroll();

  //Create card factory function
  const createCard = (text, imageSrc) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('cardElement');

    const image = document.createElement('img');
    image.src = imageSrc;
    cardElement.appendChild(image);

    const foodText = document.createElement('p');
    foodText.textContent = text;
    cardElement.appendChild(foodText);

    return cardElement;
  };

  //Create section and title factory function
  const createSection = (contentClass, title, titleClass, titleSize) => {
    const content = document.createElement('div');
    content.classList.add(contentClass)
    const titleContainer = document.createElement('div');
    titleContainer.classList.add(titleClass);
    content.appendChild(titleContainer);
    const titleText = document.createElement(titleSize);
    titleText.textContent = title;
    titleContainer.appendChild(titleText);

    return content;
  };


  //Create specialMenu section
  const specialMenuContent = createSection('menuContent', 'Special Menu', 'menuTitle', 'h2');
  content.appendChild(specialMenuContent);

  //Create specialMenu container
  const specialMenuContainer = document.createElement('div');
  specialMenuContainer.classList.add('menuItems');
  specialMenuContent.appendChild(specialMenuContainer);

  const specialMenuItems = [
    { text: `Jirachi's Stars and Sweets Set`, imageSrc: FoodSpecial1},
    { text: `Choose Your Pokémon Latte`, imageSrc: FoodSpecial2},
    { text: `Pikachu Chinese Restaurant's Set Menu`, imageSrc: FoodSpecial3},
    { text: `Pikachu Chinese Restaurant's Set Menu`, imageSrc: FoodSpecial4},
    { text: 'Choose Your Pokémon Latte', imageSrc: FoodSpecial5}
  ]

  for (let i = 0; i < specialMenuItems.length; i++) {
    const { text, imageSrc } = specialMenuItems[i];
    const card = createCard(text, imageSrc);
    specialMenuContainer.appendChild(card);
  }

  //Create normalMenu section
  const normalMenuContent = createSection('menuContent', 'Normal Menu', 'menuTitle', 'h2');
  content.appendChild(normalMenuContent);

  //Create normalMenu container
  const normalMenuContainer = document.createElement('div');
  normalMenuContainer.classList.add('menuItems');
  normalMenuContent.appendChild(normalMenuContainer);

  const normalMenuItems = [
    { text: `Everybody's Favorite Pikachu Plate!`, imageSrc: Food1},
    { text: `Everyone's Attracted to Eevee Plate`, imageSrc: Food2},
    { text: `Snorlax's Tummy Filling Nap Lunch Plate`, imageSrc: Food3},
    { text: `Pokémon Cafe Kids Plate`, imageSrc: Food4}
  ]

  for (let i = 0; i < normalMenuItems.length; i++) {
    const { text, imageSrc } = normalMenuItems[i];
    const card = createCard(text, imageSrc);
    normalMenuContainer.appendChild(card);
  }

  //Create dessert section
  const dessertContent = createSection('menuContent', 'Desserts', 'menuTitle', 'h2');
  content.appendChild(dessertContent);

  //Create dessert container
  const dessertContainer = document.createElement('div');
  dessertContainer.classList.add('menuItems');
  dessertContent.appendChild(dessertContainer);

  const dessertItems = [
    { text: `Pokémon Cafe's Pikachu Souffle Pancake`, imageSrc: Dessert1},
    { text: `Pokémon Cafe's Very Chocolate Parfait`, imageSrc: Dessert2},
    { text: `I choose you!! Poké Ball Dessert Bowl`, imageSrc: Dessert3}
  ]

  for (let i = 0; i < dessertItems.length; i++) {
    const { text, imageSrc } = dessertItems[i];
    const card = createCard(text, imageSrc);
    dessertContainer.appendChild(card);
  }

  //Create drinks section
  const drinkContent = createSection('menuContent', 'Drinks', 'menuTitle', 'h2');
  content.appendChild(drinkContent);

  //Create drinks container
  const drinkContainer = document.createElement('div');
  drinkContainer.classList.add('menuItems');
  drinkContent.appendChild(drinkContainer);

  const drinkItems = [
    { text: `Say Hello to Eevee's Royal Milk Tea`, imageSrc: Drink1},
    { text: `Polteageist and Sinistea's Tea Party! Fruit tea set -Apple flavor-`, imageSrc: Drink2},
    { text: `Polteageist and Sinistea's Tea Party! Fruit tea set -Strawberry flavor-`, imageSrc: Drink3},
    { text: `Sprigatito's Melon Soda Float`, imageSrc: Drink4},
    { text: `Fuecoco's Apple Soda Float`, imageSrc: Drink5},
    { text: `Quaxly's Ramune Soda Float`, imageSrc: Drink6},
    { text: `Gengar's Confuse Ray Smoothie`, imageSrc: Drink7},
    { text: `Ditto's Transform Fruit Tea`, imageSrc: Drink8},
    { text: `Mix Au Lait Berry`, imageSrc: Drink9},
    { text: `Mix Au Lait Chocolate`, imageSrc: Drink10},
    { text: `Cocoa (hot or iced)`, imageSrc: Drink11},
    { text: `Original Cup Drink Pikachu`, imageSrc: Drink12},
    { text: `Coffee (hot or iced) with a Pikachu Tail Cookie`, imageSrc: Drink13},
  ]

  for (let i = 0; i < drinkItems.length; i++) {
    const { text, imageSrc } = drinkItems[i];
    const card = createCard(text, imageSrc);
    drinkContainer.appendChild(card);
  }
}

export default menuPage;