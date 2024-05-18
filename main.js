document.getElementById('parser-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var selectedParser = document.getElementById('parser-select').value;
    if (selectedParser !== '') {
        // Open the selected HTML file in a new page
        window.open( selectedParser + '.html', '_blank');
    } else {
        alert('Please choose a parser option');
    }
});