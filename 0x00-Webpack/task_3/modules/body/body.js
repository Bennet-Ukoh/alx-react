import $ from 'jquery';
import _ from 'lodash';

let count = 0;
const counter = $('#counter');
const button = $('<button>').text('Click here to get started');

button.click(_.debounce(updateCounter, 500));

$('body').append(button);
$('body').append(counter);

function updateCounter() {
  count++;
  counter.text(`${count} clicks on the button`);
}
