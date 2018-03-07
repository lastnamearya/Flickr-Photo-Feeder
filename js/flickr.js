$(document).ready(function() {
  $('button').click(function() {
    // $(this) indicated the element that we clicked, only that button which is clicked
    $('button').removeClass('selected');
    $(this).addClass('selected');
  }) // button click
}); // end ready  