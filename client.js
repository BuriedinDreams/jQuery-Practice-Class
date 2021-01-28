console.log('Js is working');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery up and running');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  // make it blue
  // h2.css('background-color', 'blue');
  // This does the same thing below.
  // $(h2).css('background-color', 'green');
  $('h2').addClass('froggy');

  // change the text
  const h1Text = $(h1).text();
  console.log('h1Text is ', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);
}
