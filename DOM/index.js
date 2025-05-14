

const second = document.getElementById('second');

second.setAttribute('class','orange black');


const param = document.getElementById('params');
const newtag =document.createElement('h3');
const newtext= document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

newtag.appendChild(newtext);

newtag.setAttribute('class','white');

param.appendChild(newtag);