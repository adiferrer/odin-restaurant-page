// import _ from 'lodash';
import './style.css';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

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
    btn.classList.add('tabs');
  }
  if (i == 2) {
    btn.innerHTML = 'Menu';
    btn.setAttribute('id', 'menu-tab');
    btn.classList.add('tabs');
  }
  if (i == 3) {
    btn.innerHTML = 'Contact';
    btn.setAttribute('id', 'contact-tab');
    btn.classList.add('tabs');
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
const content = document.querySelector('#content');
content.appendChild(homePage());
document.querySelector('#home-tab').classList.add('active');

// for tab switching
const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const activeTab = document.querySelector('.active');
    activeTab.classList.remove('active');
    tab.classList.add('active');

    if (tab.classList.contains('active')) {
      if (tab.id == 'home-tab') {
        content.removeChild(content.lastChild);
        content.appendChild(homePage());
      } else if (tab.id == 'menu-tab') {
        content.removeChild(content.lastChild);
        content.appendChild(menuPage());
      } else if (tab.id == 'contact-tab') {
        content.removeChild(content.lastChild);
        content.appendChild(contactPage());
      }
    }
  });
});
