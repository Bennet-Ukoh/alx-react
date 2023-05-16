import $ from 'jquery';

console.log('Init header');

const header = $('header');

const logo = $('<img>')
  .attr('src', 'https://www.holbertonschool.com/holberton-logo.png')
  .appendTo(header);

const h1 = $('<h1>')
  .text('Holberton Dashboard')
  .appendTo(header);
