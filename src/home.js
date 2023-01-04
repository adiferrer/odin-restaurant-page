// import _ from 'lodash';
import Quality1 from './assets/icons/quality-1.svg';
import Quality2 from './assets/icons/quality-2.svg';
import Quality3 from './assets/icons/quality-3.svg';

function homePage() {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'home-content');

  // for #image-header
  const imageHeader = document.createElement('div');
  imageHeader.setAttribute('id', 'image-header');
  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Kainan Co.';
  const p1 = document.createElement('p');
  p1.textContent = '(noun) Filipino translation of eating place';
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
  p2.appendChild(document.createTextNode('Kainan Co. is a Filipino restaurant located in Calgary, Alberta. Founded and run by university students, we serve traditional Filipino dishes with a modern twist.'));
  p2.appendChild(document.createElement('br'));
  p2.appendChild(document.createTextNode('With ingredients imported fresh from the Philippines, we offer a wide variety of Filipino dishes. Our menu is inspired by the food we grew up eating, and we\'re excited to share it with you.'));
  div2.appendChild(aboutHeader);
  div2.appendChild(p2);
  about.appendChild(div2);
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

  // for #faq
  const faq = document.createElement('section');
  faq.setAttribute('id', 'faq');
  const div4 = document.createElement('div');
  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'Frequently Asked Questions';
  div4.appendChild(addressHeader);
  faq.appendChild(div4);
  homeContent.appendChild(faq);

  return homeContent;
}

export default homePage;