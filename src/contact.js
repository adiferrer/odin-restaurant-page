// import icons
import Phone from './assets/icons/phone.svg';
import Email from './assets/icons/email.svg';
import Instagram from './assets/icons/instagram.svg';
import Facebook from './assets/icons/facebook.svg';
import Twitter from './assets/icons/twitter.svg';
// import image
import Map from './assets/images/map.jpeg';

function contactPage() {
  const contactContent = document.createElement('div');
  contactContent.setAttribute('id', 'contact-content');

  const headerSection = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'Contact Us!';
  headerSection.appendChild(header);
  headerSection.appendChild(document.createElement('hr'));
  contactContent.appendChild(headerSection);

  const mapSection = document.createElement('section');
  const mapHeader = document.createElement('h2');
  mapHeader.textContent = 'Location';
  const mapDescription = document.createElement('p');
  mapDescription.textContent = 'Address: 1234 5th St. SW, Calgary, AB T2P 2K3';
  const mapImage = new Image();
  mapImage.src = Map;
  mapSection.appendChild(mapHeader);
  mapSection.appendChild(mapDescription);
  mapSection.appendChild(mapImage);
  contactContent.appendChild(mapSection);

  const contactInfoListItems = [
    [Phone, '+1 234 567 8900'],
    [Email, 'kainancalgaryco@outlook.com'],
    [Instagram, '@kainancalgaryco'],
    [Facebook, '@kainancalgaryco'],
    [Twitter, '@kainancalgaryco'],
  ];
  const contactInfo = document.createElement('section');
  const contactInfoHeader = document.createElement('h2');
  contactInfoHeader.textContent = 'Contact Information';
  const contactInfoList = document.createElement('ul');
  contactInfoListItems.forEach((item) => {
    const listItem = document.createElement('li');
    const icon = new Image();
    icon.src = item[0];
    const text = document.createElement('p');
    text.textContent = item[1];
    listItem.appendChild(icon);
    listItem.appendChild(text);
    contactInfoList.appendChild(listItem);
  });

  contactInfo.appendChild(contactInfoHeader);
  contactInfo.appendChild(contactInfoList);
  contactContent.appendChild(contactInfo);

  return contactContent;
}

export default contactPage;
