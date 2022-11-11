console.log('hello');

$(document).ready(() => {

  // grab the bubbletea-container from the DOM
  const $bubbleteaContainer = $('#bubbletea-container');

  // make an AJAX request for all the bubble teas
  $.ajax({
    url: '/bubbleteas',
    method: 'GET'
  })
  .then((bubbleteas) => {
    console.log(bubbleteas);

    // once the request resolves successfully, we want to render the teas to the page
    for (const bubbletea of bubbleteas) {
      // create a new article element based off the `bubbletea` object
      const $article = $(`
        <article class="bubbletea">
          <h3>Name: ${bubbletea.name}</h3>
          <p>Flavour: ${bubbletea.flavour}</p>
        </article>
      `);

      // append the new article to the bubbletea container
      $bubbleteaContainer.append($article);
    }
  })
  .catch((err) => {
    console.log(err);
  });

  // grab the form
  const $form = $('#new-bubbletea-form');

  // listen for the form to submit
  $form.on('submit', (event) => {
    event.preventDefault(); // hey browser, we've got this! don't do what you would normally do
    
    // console.log('the form has submitted');

    // get the data from the form
    const dataToSendToServer = $form.serialize();
    console.log(dataToSendToServer);

    // send the information to the server via a POST request
    $.ajax({
      method: 'POST',
      url: '/bubbleteas',
      data: dataToSendToServer
    })
    .then((bubbletea) => {
      console.log('bubbleTea', bubbletea);

      // render the bubble tea to the screen / prepend it to the section
      // create a new article element based off the `bubbletea` object
      const $article = $(`
        <article class="bubbletea">
          <h3>Name: ${bubbletea.name}</h3>
          <p>Flavour: ${bubbletea.flavour}</p>
        </article>
      `);

      // append the new article to the bubbletea container
      $bubbleteaContainer.prepend($article);
    })
    .catch((error) => {
      console.log('error', error);
    });
  });


});