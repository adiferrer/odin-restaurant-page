// import _ from 'lodash';
import About from './assets/images/about.jpeg';
import Address from './assets/images/address.jpeg';
import Quality1 from './assets/images/quality1.jpeg';
import Quality2 from './assets/images/quality2.jpeg';
import Quality3 from './assets/images/quality3.jpeg';

function homePage() {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'home-content');

  // for #image-header
  const imageHeader = document.createElement('section');
  imageHeader.setAttribute('id', 'image-header');
  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Kainan Co.';
  const p1 = document.createElement('p');
  p1.textContent = '(noun) Filipino; eating place';
  div1.appendChild(h1);
  div1.appendChild(p1);
  imageHeader.appendChild(div1);
  homeContent.appendChild(imageHeader);

  // for #about
  const about = document.createElement('section');
  about.setAttribute('id', 'about');
  const div2 = document.createElement('div');
  const aboutHeader = document.createElement('h2');
  aboutHeader.textContent = 'Quality Filipino cuisine since 2022';
  const p2 = document.createElement('p');
  p2.textContent = 'Our ingredients are imported fresh from the Philippines.';
  div2.appendChild(aboutHeader);
  div2.appendChild(p2);
  about.appendChild(div2);
  const aboutImage = new Image();
  aboutImage.src = About;
  aboutImage.alt = 'Filipino breakfast';
  about.appendChild(aboutImage);
  homeContent.appendChild(about);

  // for #qualities
  const qualities = document.createElement('section');
  qualities.setAttribute('id', 'qualities');
  const qualitiesHeader = document.createElement('h2');
  qualitiesHeader.textContent = 'We\'re not your average Filipino restaurant.';
  qualitiesHeader.appendChild(document.createElement('br'));
  qualitiesHeader.appendChild(document.createTextNode('See what makes us different.'));
  qualities.appendChild(qualitiesHeader);
  const div3 = document.createElement('div');

  for (let i = 1; i <= 3; i += 1) {
    const quality = document.createElement('div');
    quality.setAttribute('class', 'quality');
    const qualityImage = new Image();
    const qualityDescription = document.createElement('p');

    if (i == 1) {
      qualityImage.src = Quality1;
      qualityDescription.textContent = 'Food & Beverage Catering Services';
    }
    if (i == 2) {
      qualityImage.src = Quality2;
      qualityDescription.textContent = 'Chefs trained in Filipino cuisine';
    }
    if (i == 3) {
      qualityImage.src = Quality3;
      qualityDescription.textContent = 'Live band sessions every Thursday & Saturday';
    }

    quality.appendChild(qualityImage);
    quality.appendChild(qualityDescription);
    div3.appendChild(quality);
  }

  qualities.appendChild(div3);
  homeContent.appendChild(qualities);

  // for #address
  const address = document.createElement('section');
  address.setAttribute('id', 'address');
  const addressImage = new Image();
  addressImage.src = Address;
  addressImage.alt = 'Stone house';
  address.appendChild(addressImage);
  const div4 = document.createElement('div');
  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'Visit us today!';
  const p3 = document.createElement('p');
  p3.textContent = 'We\'re located at 1234 Main St. in the heart of downtown. We\'re open from 8am to 8pm every day. We look forward to seeing you!';
  div4.appendChild(addressHeader);
  div4.appendChild(p3);
  address.appendChild(div4);
  homeContent.appendChild(address);

  return homeContent;
}

export default homePage;
