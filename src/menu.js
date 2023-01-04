// import images
import SideDish1 from './assets/images/lumpia.jpeg';
import SideDish2 from './assets/images/assorted-bbq.jpeg';
import SideDish3 from './assets/images/pandesal.jpeg';
import MainCourse1 from './assets/images/palabok.jpeg';
import MainCourse2 from './assets/images/adobo.jpeg';
import MainCourse3 from './assets/images/breakfast.jpeg';
import Beverage1 from './assets/images/taho.jpeg';
import Beverage2 from './assets/images/tropical-shakes.jpeg';
import Beverage3 from './assets/images/buko.jpeg';
import Dessert1 from './assets/images/puto.jpeg';
import Dessert2 from './assets/images/leche-flan.jpeg';
import Dessert3 from './assets/images/napoleones.jpeg';
// import SpecialOffer1 from './assets/images/leche-flan.jpeg';
// import SpecialOffer2 from './assets/images/leche-flan.jpeg';
// import SpecialOffer3 from './assets/images/leche-flan.jpeg';

function iterateItems(itemArray, parentElement) {
  const items = document.createElement('ul');
  itemArray.forEach((item) => {
    const itemElement = document.createElement('li');
    const itemPicture = document.createElement('img');
    itemPicture.src = item[0];
    itemPicture.alt = item[1];
    const itemText = document.createElement('div');
    const itemName = document.createElement('h3');
    itemName.textContent = item[1];
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item[2];
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ${item[3]}`;
    itemText.appendChild(itemName);
    itemText.appendChild(itemDescription);
    itemText.appendChild(itemPrice);
    itemElement.appendChild(itemPicture);
    itemElement.appendChild(itemText);
    items.appendChild(itemElement);
  });
  parentElement.appendChild(items);
}

function menuPage() {
  // menu items arrays
  // [picture src, name, description, price]
  const sideDishes = [
    [SideDish1, 'Lumpiang Shanghai', 'Filipino-style spring rolls with a dip of your choice', '4pcs for 5CAD'],
    [SideDish2, 'Assorted Street Food Platter', 'Kwek-kwek, fishballs, kikyam and more served with sweet sauce or vinegar', '10CAD'],
    [SideDish3, 'Pandesal', 'Filipino-style bread with butter and a spread of your choice', '7CAD'],
  ];
  const mainCourses = [
    [MainCourse1, 'Pancit Palabok', 'Filipino-style noodles with shrimp and chicken/pork', '12CAD'],
    [MainCourse2, 'Adobo', 'Filipino-style chicken/pork/beef stew with soy sauce and vinegar', '12CAD'],
    [MainCourse3, 'All Day Breakfast', 'Filipino-style breakfast with rice, egg, and a choice of longanisa or tocino', '13CAD'],
  ];
  const beverages = [
    [Beverage1, 'Taho', 'Filipino-style tofu drink with sweet sauce and crushed ice', '5CAD'],
    [Beverage2, 'Fruit Shake', 'A blend of your choice of fruit with milk and ice', '5CAD'],
    [Beverage3, 'Buko Juice', 'Filipino-style coconut juice with sweet sauce and crushed ice', '5CAD'],
  ];
  const desserts = [
    [Dessert1, 'Puto', 'Assorted Filipino-style rice cakes topped with cheese', '6pcs for 10CAD'],
    [Dessert2, 'Leche Flan', 'Filipino-style custard topped with caramel sauce', '5CAD'],
    [Dessert3, 'Napoleones', 'Filipino-style pastries with custard filling', '2pcs for 7CAD'],
  ];
  // const specialOffers = [

  // ];

  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');

  const headerSection = document.createElement('div');
  const menuHeader = document.createElement('h1');
  menuHeader.textContent = 'Kainan Co. Menu';
  const menuCaption = document.createElement('p');
  menuCaption.textContent = 'Our dishes consist of traditional Filipino cuisine, with a modern twist.';
  const horizontalLine = document.createElement('hr');
  headerSection.appendChild(menuHeader);
  headerSection.appendChild(menuCaption);
  headerSection.appendChild(horizontalLine);
  menuContent.appendChild(headerSection);

  for (let i = 1; i <= 5; i += 1) {
    const menuSectionContent = document.createElement('section');
    const menuSectionHeader = document.createElement('h2');
    if (i === 1) {
      menuSectionHeader.textContent = 'Side Dishes/Appetizers';
      menuSectionContent.appendChild(menuSectionHeader);
      iterateItems(sideDishes, menuSectionContent);
    } else if (i === 2) {
      menuSectionHeader.textContent = 'Main Courses';
      menuSectionContent.appendChild(menuSectionHeader);
      iterateItems(mainCourses, menuSectionContent);
    } else if (i === 3) {
      menuSectionHeader.textContent = 'Beverages';
      menuSectionContent.appendChild(menuSectionHeader);
      iterateItems(beverages, menuSectionContent);
    } else if (i === 4) {
      menuSectionHeader.textContent = 'Desserts';
      menuSectionContent.appendChild(menuSectionHeader);
      iterateItems(desserts, menuSectionContent);
    }
    // else if (i === 5) {
    //   menuSectionHeader.textContent = 'Special Edition Items';
    //   menuSectionContent.appendChild(menuSectionHeader);
    //   iterateItems(specialOffers, menuSectionContent);
    // }
    menuContent.appendChild(menuSectionContent);
  }

  return menuContent;
}

export default menuPage;
