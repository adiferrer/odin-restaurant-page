/* eslint-disable eqeqeq */
// import _ from 'lodash';
import './style.css';
import homePage from './home';

// for header
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
for (let i = 1; i <= 3; i += 1) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  if (i == 1) {
    btn.innerHTML = 'Home';
    btn.setAttribute('id', 'home-tab');
  }
  if (i == 2) {
    btn.innerHTML = 'Menu';
    btn.setAttribute('id', 'menu-tab');
  }
  if (i == 3) {
    btn.innerHTML = 'Contact';
    btn.setAttribute('id', 'contact-tab');
  }
  li.appendChild(btn);
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
