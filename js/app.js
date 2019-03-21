// Create a button
const $button = $('<button>Reveal Spoiler</button>');
// Append adds an element as the last child element.
$('.spoiler').append($button);
// We want to append it to the last element of the .spoiler



// Hide the spoiler text
$('.spoiler span').hide();
// When button is pressed
$('.spoiler button').click(function(){
    $('.spoiler span').show();
    $('.spoiler button').hide();

});

    // Show the spoiler text

    // Hide the "reveal spoler" button

