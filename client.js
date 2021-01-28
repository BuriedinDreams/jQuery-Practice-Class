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

  // change child3
  $('.bestC').addClass('purpleRain');
  $('.bestC').append('<h2> Purple-Rain </h2>');

  // change the text
  const h1Text = $(h1).text();
  console.log('h1Text is ', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);

  // Event delegation
  // descendent selectors
  $('#harmonicas').on('click', DeleteButton);
  console.log('DeleteButton is', $(DeleteButton));

  $('#submitBtn').on('click', addAHarmonica);

  function addAHarmonica(event) {
    //stuff to do when button is clicked.
    console.log('button is clicked!');
    event.preventDefault(); // this will stop the default.

    // grab that data
    let brand = $('#brand').val();
    console.log('brand is', brand);

    $('#harmonicas').append(
      `<li class="harmonica-item"> 
      Brand is: ${brand} 
      <button class='deleteBtn'>Delete Me</button> 
      </li> `
    );
  }

  function DeleteButton() {
    console.log('button clicked');
    // $('.harmonica-item').remove();
    // $('.deleteBtn').remove();
    let thisThing = $(this);
    console.log(thisThing);
    $(this).parent().remove();
  }
}
