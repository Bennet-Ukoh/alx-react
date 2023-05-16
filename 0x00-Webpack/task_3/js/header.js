import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
  const countParagraph = $('<p>').attr('id', 'count');
  const button = $('<button>').text('Click here to get started');
  const dashboardDataParagraph = $('<p>').text('Dashboard data for the students');
  const holbertonDashboardParagraph = $('<p>').text('Holberton Dashboard');
  const copyrightParagraph = $('<p>').text('Copyright - Holberton School');
  let count = 0;

  function updateCounter() {
    count++;
    countParagraph.text(`${count} clicks on the button`);
  }

  button.click(debounce(updateCounter, 300));

  $('body').append(holbertonDashboardParagraph);
  $('body').append(dashboardDataParagraph);
  $('body').append(button);
  $('body').append(countParagraph);
  $('body').append(copyrightParagraph);
});
