
// Within the parent selector, if the button tag is clicked, 
// run this function
$('.spoiler').on('click', 'button', function(){
    $('.spoiler span').show();
    $('.spoiler button').hide();
});

// Create a button
const $button = $('<button>Reveal Spoiler</button>');
// Append adds an element as the last child element.
$('.spoiler').append($button);
// We want to append it to the last element of the .spoiler

$('.spoiler span').hide();


    // Show the spoiler text

    // Hide the "reveal spoler" button

