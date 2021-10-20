

//import { getMessage, setMessage } from './utils.js';

setTimeout(() => {


import('./utils.js').then( ({ getMessage, setMessage }) => {

  console.log(getMessage());

  setMessage("here is my message");

  console.log(getMessage());

  setMessage("a");

  console.log(getMessage());


});

}, 2000);
