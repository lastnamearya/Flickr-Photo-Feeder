$(document).ready(function() {
  $('button').click(function() {
    // $(this) indicated the element that we clicked, only that button which is clicked
    $('button').removeClass('selected');
    $(this).addClass('selected');
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }) // button click
}); // end ready  