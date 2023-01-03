(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(81),o=t.n(i),a=t(645),r=t.n(a),c=t(667),d=t.n(c),s=new URL(t(864),t.b),l=new URL(t(352),t.b),p=new URL(t(171),t.b),u=new URL(t(174),t.b),m=new URL(t(750),t.b),h=r()(o()),f=d()(s),v=d()(l),g=d()(p),b=d()(u),y=d()(m);h.push([e.id,"/* Path: src/style.css */\n@font-face {\n    font-family: 'Open Sauce';\n    src: url("+f+") format('woff2'),\n      url("+v+") format('woff');\n}\n\n@font-face {\n    font-family: 'Garet';\n    src: url("+g+") format('woff2'),\n      url("+b+") format('woff');\n}\n\n:root {\n    --dark-brown: rgb(87,39,19);\n    --dirty-white: rgb(255,250,239);\n    --tan: rgb(194,169,152);\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    width: 100vw;\n    position: absolute;\n    font-family: 'Open Sauce', sans-serif;\n    font-size: 1.2rem;\n}\n\nheader,\nheader > div,\nnav > ul {\n    display: flex;\n}\n\nheader {\n    background-color: var(--dark-brown);\n    color: var(--dirty-white);\n    padding: 0.65rem 1rem;\n\n    justify-content: center;\n}\n\nheader > div,\nnav > ul {\n    align-items: center;\n}\n\nnav > ul {\n    list-style: none;\n    gap: 3rem;\n}\n\nnav > ul > li > button {\n    font-size: 1.2rem;\n    cursor: pointer;\n    letter-spacing: 1px;\n    font-family: 'Open Sauce', sans-serif;\n\n    appearance: none;\n    border: none;\n    color: white;\n    background-color: rgba(255, 250, 239, 0);\n}\n\n.active {\n    color: var(--dark-brown);\n    background-color: var(--dirty-white);\n    padding: 0.4rem 1.5rem;\n    border: none;\n    border-radius: 20px;\n}\n\n#content > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nh1,\nh2,\nh3 {\n    font-family: 'Garet', sans-serif;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\n/* home page content */\n#image-header,\n#about,\n#qualities,\n#address {\n    height: 80vh;\n}\n\n#image-header {\n    background-image: url("+y+");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    box-shadow: inset 0 0 0 1000px rgba(87,39,19,.2);\n}\n\n#image-header > div {\n    width: max-content;\n    color: var(--dirty-white);\n    position: absolute;\n    top: calc(100vh - 50vh);\n    left: calc(100vw - 40vw);\n    line-height: 1.5;\n}\n\n#about,\n#address {\n    display: flex;\n    align-items: center;\n    padding: 3em;\n}\n\n#about > div > p,\n#address > div > p {\n    font-size: 1.2rem;\n    line-height: 1.5;\n}\n\n#qualities {\n    padding: 3em 5em;\n    background-color: var(--tan);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n}\n\n#qualities > h2 {\n    font-size: 2.3rem;\n}\n\n#qualities > div {\n    margin-top: 30px;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n}\n\n.quality {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n  \n.quality > p {\n    margin-top: 1rem;\n    text-align: left;\n    font-size: 1.3rem;\n    width: 90%;\n}\n\n.quality > img,\n#menu-content > section > ul > li > img {\n    width: calc(100vw - 88vw);\n    height: calc(100vw - 88vw);\n    object-fit: cover;\n    object-position: 50% 50%;\n}\n\n/* menu content */\n#menu-content {\n    gap: 1rem;\n}\n\nhr {\n    width: 100%;\n    margin-top: 1.2em;\n    border: 0;\n    border-bottom: 2px dashed black;\n}\n\n#menu-content > div {\n    padding: 3em 5em 0;\n}\n\n#menu-content > section {\n    padding: 3em 5em;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#menu-content > section:nth-of-type(2n) {\n    background-color: var(--tan);\n}\n\n#menu-content > section > ul {\n    width: 100%;\n    list-style: none;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 1rem;\n}\n\n#menu-content > section > ul > li {\n    width: 25%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n#menu-content > section > ul > li:hover {\n    cursor: pointer;\n    transform: scale(1.05);\n    transition: transform 0.2s ease-in-out;\n}\n\n#menu-content h3 {\n    text-decoration: underline;\n}\n\n/* footer */\nfooter {\n    color: var(--dirty-white);\n    background-color: var(--dark-brown);\n    padding: 1.2rem;\n    text-align: center;\n}\n\nfooter > a {\n    color: var(--dirty-white);\n    text-decoration: none;\n}\n\nfooter > a:hover {\n    text-decoration: underline;\n}\n\n/* media queries */\n@media screen and (max-width: 1000px) {\n    body {\n        font-size: 1.4rem;\n    }\n\n    #home-content > div,\n    #content > div > section {\n        padding: 2em;\n        height: max-content;\n    }\n\n    #image-header > div {\n        position: static;\n        width: 100%;\n        text-align: center;\n    }\n\n    #about,\n    #address {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    #about > img,\n    #address > img {\n        width: calc(100vw - 50vw);\n        height: calc(100vw - 50vw);\n        object-fit: cover;\n    }\n\n    #about > div > h2,\n    #address > div > h2,\n    #qualities > h2 {\n        font-size: 1.7em;\n        text-align: center;\n    }\n\n    #qualities > div {\n        display: flex;\n        flex-direction: column;\n        gap: 3em;\n    }\n\n    .quality > img,\n    #menu-content > section > ul > li > img {\n        width: calc(100vw - 80vw);\n        height: calc(100vw - 80vw);\n        object-fit: cover;\n    }\n\n    .quality > p {\n        margin-top: 10px;\n        text-align: center;\n    }\n\n    #menu-content > div {\n        padding: 2em 2em 0;\n    }\n\n    #menu-content > section > ul {\n        flex-direction: column;\n        align-items: center;\n        gap: 3rem;\n    }    \n\n    #menu-content > section > ul > li {\n        width: 80%;\n        flex-direction: row;\n    }\n\n    #menu-content > section > ul > li:hover {\n        transform: scale(1.1);\n    }\n}\n\n@media screen and (max-width: 700px) {\n    body {\n        font-size: 1rem;\n    }\n\n    nav > ul > li > button  {\n        font-size: 1rem;\n    }\n\n    #image-header h1 {\n        font-size: 3.5rem;\n    }\n\n    .quality > img {\n        width: calc(100vw - 70vw);\n        height: calc(100vw - 70vw);\n    }\n\n    #menu-content > section > ul > li {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n}",""]);const w=h},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},r=[],c=0;c<e.length;c++){var d=e[c],s=i.base?d[0]+i.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,i);i.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var c=t(a[r]);n[c].references--}for(var d=i(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},174:(e,n,t)=>{e.exports=t.p+"c69733e9aa6a9fc22bcb.woff"},171:(e,n,t)=>{e.exports=t.p+"5ea6c56500bb26dee122.woff2"},352:(e,n,t)=>{e.exports=t.p+"244c77e1919eaca1fda1.woff"},864:(e,n,t)=>{e.exports=t.p+"13087b999a4003c3cca4.woff2"},750:(e,n,t)=>{e.exports=t.p+"ab900f4b88377e07a25c.jpeg"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),a=t(569),r=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"c77b72e96e7644307a3d.svg",v=t.p+"a9810d0cf339534e431d.svg",g=t.p+"1a9f1c60f2d3ad511206.svg",b=function(){const e=document.createElement("div");e.setAttribute("id","home-content");const n=document.createElement("div");n.setAttribute("id","image-header");const t=document.createElement("div"),i=document.createElement("h1");i.textContent="Kainan Co.";const o=document.createElement("p");o.textContent="(noun) Filipino translation of eating place",t.appendChild(i),t.appendChild(o),n.appendChild(t),e.appendChild(n);const a=document.createElement("section");a.setAttribute("id","about");const r=document.createElement("div"),c=document.createElement("h2");c.textContent="Quality Filipino cuisine since 2022";const d=document.createElement("p");d.textContent="Our ingredients are imported fresh from the Philippines. We offer a wide variety of Filipino dishes, from breakfast to dinner. \n\n",r.appendChild(c),r.appendChild(d),a.appendChild(r),e.appendChild(a);const s=document.createElement("section");s.setAttribute("id","qualities");const l=document.createElement("h2");l.textContent="We're not your average Filipino restaurant.",l.appendChild(document.createElement("br")),l.appendChild(document.createTextNode("See what makes us different.")),s.appendChild(l);const p=document.createElement("div");for(let e=1;e<=3;e+=1){const n=document.createElement("div");n.setAttribute("class","quality");const t=new Image,i=document.createElement("p");1==e&&(t.src=f,i.textContent="Food & Beverage Catering Services"),2==e&&(t.src=v,i.textContent="Chefs trained in Filipino cuisine"),3==e&&(t.src=g,i.textContent="Live band sessions every Thursday & Saturday"),n.appendChild(t),n.appendChild(i),p.appendChild(n)}s.appendChild(p),e.appendChild(s);const u=document.createElement("section");u.setAttribute("id","address");const m=document.createElement("div"),h=document.createElement("h2");h.textContent="Visit us today!";const b=document.createElement("p");return b.textContent="We're located at 1234 Main St. in the heart of downtown. We're open from 8am to 8pm every day. We look forward to seeing you!",m.appendChild(h),m.appendChild(b),u.appendChild(m),e.appendChild(u),e},y=t.p+"91bed008d4c5307cb77f.jpeg",w=t.p+"544fb706a35d783bc717.jpeg",C=t.p+"baa65e1b0f2288762c1c.jpeg",x=t.p+"d09cf5f4ed6683292659.jpeg",E=t.p+"769ae5b5942865992958.jpeg",A=t.p+"c67afcde1e14e8f26d5f.jpeg",k=t.p+"143f285248006437d262.jpeg",j=t.p+"d0224390eb486ebbba0f.jpeg",S=t.p+"95a5c53f8fa7c1a513a7.jpeg",F=t.p+"f1c5e6ed1d43e646e2c2.jpeg",L=t.p+"9017da1c70a8b081f65f.jpeg",T=t.p+"3ca4f63b734b6cd79e3f.jpeg";function q(e,n){const t=document.createElement("ul");e.forEach((e=>{const n=document.createElement("li"),i=document.createElement("img");i.src=e[0],i.alt=e[1];const o=document.createElement("div"),a=document.createElement("h3");a.textContent=e[1];const r=document.createElement("p");r.textContent=e[2];const c=document.createElement("p");c.textContent=`Price: ${e[3]}`,o.appendChild(a),o.appendChild(r),o.appendChild(c),n.appendChild(i),n.appendChild(o),t.appendChild(n)})),n.appendChild(t)}const M=document.createElement("header"),D=document.createElement("nav"),z=document.createElement("ul");for(let e=1;e<=3;e+=1){const n=document.createElement("li"),t=document.createElement("button");1==e&&(t.innerHTML="Home",t.setAttribute("id","home-tab"),t.classList.add("tabs")),2==e&&(t.innerHTML="Menu",t.setAttribute("id","menu-tab"),t.classList.add("tabs")),3==e&&(t.innerHTML="Contact",t.setAttribute("id","contact-tab"),t.classList.add("tabs")),n.appendChild(t),z.appendChild(n)}D.appendChild(z),M.appendChild(D),document.body.insertBefore(M,document.getElementById("content"));const P=document.createElement("footer");P.textContent+="Made by ";const I=document.createElement("a");I.setAttribute("href","https://github.com/adiferrer"),I.setAttribute("target","_blank"),I.innerHTML="Jeanne Ferrer",P.appendChild(I),P.appendChild(document.createTextNode(" for "));const O=document.createElement("a");O.setAttribute("href","https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page"),O.setAttribute("target","_blank"),O.textContent="The Odin Project",P.appendChild(O),document.body.appendChild(P);const N=document.querySelector("#content");N.appendChild(b()),document.querySelector("#home-tab").classList.add("active"),document.querySelectorAll(".tabs").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".active").classList.remove("active"),e.classList.add("active"),e.classList.contains("active")&&("home-tab"==e.id?(N.removeChild(N.lastChild),N.appendChild(b())):"menu-tab"==e.id?(N.removeChild(N.lastChild),N.appendChild(function(){const e=[[y,"Lumpiang Shanghai","Filipino-style spring rolls with a dip of your choice","4pcs for 5CAD"],[w,"Assorted Street Food Platter","Kwek-kwek, fishballs, kikyam and more served with sweet sauce or vinegar","10CAD"],[C,"Pandesal","Filipino-style bread with butter and a spread of your choice","7CAD"]],n=[[x,"Pancit Palabok","Filipino-style noodles with shrimp and chicken/pork","12CAD"],[E,"Adobo","Filipino-style chicken/pork/beef stew with soy sauce and vinegar","12CAD"],[A,"All Day Breakfast","Filipino-style breakfast with rice, egg, and a choice of longanisa or tocino","13CAD"]],t=[[k,"Taho","Filipino-style tofu drink with sweet sauce and crushed ice","5CAD"],[j,"Fruit Shake","A blend of your choice of fruit with milk and ice","5CAD"],[S,"Buko Juice","Filipino-style coconut juice with sweet sauce and crushed ice","5CAD"]],i=[[F,"Puto","Assorted Filipino-style rice cakes topped with cheese","6pcs for 10CAD"],[L,"Leche Flan","Filipino-style custard topped with caramel sauce","5CAD"],[T,"Napoleones","Filipino-style pastries with custard filling","2pcs for 7CAD"]],o=document.createElement("div");o.setAttribute("id","menu-content");const a=document.createElement("div"),r=document.createElement("h1");r.textContent="Kainan Co. Menu";const c=document.createElement("p");c.textContent="Our dishes consist of traditional Filipino cuisine, with a modern twist.";const d=document.createElement("hr");a.appendChild(r),a.appendChild(c),a.appendChild(d),o.appendChild(a);for(let a=1;a<=5;a+=1){const r=document.createElement("section"),c=document.createElement("h2");1===a?(c.textContent="Side Dishes/Appetizers",r.appendChild(c),q(e,r)):2===a?(c.textContent="Main Courses",r.appendChild(c),q(n,r)):3===a?(c.textContent="Beverages",r.appendChild(c),q(t,r)):4===a?(c.textContent="Desserts",r.appendChild(c),q(i,r)):5===a&&(c.textContent="Special Edition Items",r.appendChild(c)),o.appendChild(r)}return o}())):"contact-tab"==e.id&&(N.removeChild(N.lastChild),N.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","contact-content"),e}())))}))}))})()})();