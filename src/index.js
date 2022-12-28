/* eslint-disable eqeqeq */
// import _ from 'lodash';
import './style.css';
import homePage from './home';

// for header
const header = document.createElement('header');
const logoDiv = document.createElement('div');
header.appendChild(logoDiv);

const nav = document.createElement('nav');
const ul = document.createElement('ul');
for (let i = 1; i <= 3; i += 1) {
  const li = document.createElement('li');
  if (i == 1) {
    li.innerHTML = 'Home';
    li.setAttribute('id', 'home-tab');
  }
  if (i == 2) {
    li.innerHTML = 'Menu';
    li.setAttribute('id', 'menu-tab');
  }
  if (i == 3) {
    li.innerHTML = 'Contact';
    li.setAttribute('id', 'contact-tab');
  }

  ul.appendChild(li);
}
nav.appendChild(ul);
header.appendChild(nav);

document.body.insertBefore(header, document.getElementById('content'));

// for footer
const footer = document.createElement('footer');

footer.textContent += 'Made by ';

const profileLink = document.createElement('a');
profileLink.setAttribute('href', 'https://github.com/adiferrer');
profileLink.setAttribute('target', '_blank');
profileLink.innerHTML = 'Jeanne Ferrer';
footer.appendChild(profileLink);

footer.appendChild(document.createTextNode(' for '));

const odinLink = document.createElement('a');
odinLink.setAttribute('href', 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page');
odinLink.setAttribute('target', '_blank');
odinLink.textContent = 'The Odin Project';
footer.appendChild(odinLink);

document.body.appendChild(footer);

// for content
document.querySelector('#content').appendChild(homePage());
document.querySelector('#home-tab').classList.add('active');
