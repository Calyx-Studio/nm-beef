import _ from 'lodash';
import img from './assets/img/sometimes_800.jpg';
import img from './assets/img/usrsb_stackphotography.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am a JS ', 'insertion'], ' ');

  return element;
}

document.getElementsByTagName('footer').appendChild(component());

