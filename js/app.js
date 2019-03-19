
// Select and ID and create an event listener
$('#previewButton').click(function(){

    // Change the value of the text in the ID to
    // what is entered in the form. 
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

    
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

});