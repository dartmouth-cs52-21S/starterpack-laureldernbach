/* eslint-disable linebreak-style */
// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// const $ = require('jquery');
// $('#main').html('Here we go!');

let num = 0;
window.setInterval(() => {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}, 1000);
