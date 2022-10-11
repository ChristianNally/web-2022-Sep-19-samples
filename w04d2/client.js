// "document ready" will wait for the document to fully load before running our callback
$(document).ready(() => {

  // console.log('hello world');
  console.log(`hello ${username}`);

  //
  // Using Vanilla JS
  //

  // create a new li
  // const myLi = document.createElement('li');

  // // create a text node for the li
  // const textNode = document.createTextNode('Four');

  // // put the text node and the li together
  // myLi.append(textNode); // <li>Four</li>

  // find something in the DOM that already exists
  // const mainList = document.getElementById('main-list');

  // add the newly created li to the main-list
  // mainList.append(myLi);

  //
  // Using jQuery
  //

  // $('li'); // finds an element in the DOM
  // $('<li>'); // creates an element

  // create a new li
  // const $myLi = $('<li>').text('Four with jQuery'); // <li>Four</li>
  const $myLi = $('<li>Four</li>');

  // find something in the DOM that already exists
  const $mainList = $('#main-list');

  // add the newly created li to the main-list
  $mainList.append($myLi);
  // $myLi.appendTo($mainList);

  //
  // On button click, retrieve the value from the input and create a new li
  //

  // grab the button from the DOM
  const $button = $('#add-button');

  // add a click listener to the button
  $button.on('click', () => {
    console.log('button got clicked');

    // get the input field
    const $input = $('#new-number');

    // get the value from the input field
    const inputContents = $input.val();
    
    // create a new li with the input contents
    const newLi = $(`<li>${inputContents}</li>`);

    // add the new li to the main-list
    $mainList.prepend(newLi);

    // clear the input field and set focus
    $input.val('').focus();
    // $input.focus();
  });

});
