console.log('Js is working');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery up and running');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  // make it blue
  h2.css('background-color', 'blue');
  // This does the same thing below.
  $(h2).css('background-color', 'green');
}
