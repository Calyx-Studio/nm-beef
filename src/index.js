import _ from 'lodash';
import img from './assets/img/sometimes_800.jpg';
import logoImage from './assets/img/NewMexicoBeefheaderimage091619Final.png';
import rangeImage from './assets/img/usrsb_stackphotography.png';


var rangeImg = document.getElementById('range');
rangeImg.src = rangeImage;

var logoImg = document.getElementById('logo');
logoImg.src = logoImage;

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am a JS ', 'insertion'], ' ');

  return element;
}

document.getElementsByTagName('footer').appendChild(component());

