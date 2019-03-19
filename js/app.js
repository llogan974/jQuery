

// Add a drop down flash message
$('#flashMessage').hide();

// Select and ID and create an event listener
$('#previewButton').click(function(){

    // Change the value of the text in the ID to
    // what is entered in the form. 
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

    
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

// Flash message only shows on save
    $('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();

});