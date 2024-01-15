$(document).ready(function () {
    // Initialize your variables here

    // Request places data from the API
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function (data) {
            // Loop through the result and create article tags representing Places
            for (var i = 0; i < data.length; i++) {
                var place = data[i];

                // Create an article tag representing a Place
                var article = $('<article>').appendTo('.places');

                // Add content to the article tag (customize as needed)
                article.append($('<h2>').text(place.name));
                article.append($('<div>').text(place.description));
                // Add more content as needed
            }
        },
        error: function (error) {
            console.error('Error fetching places:', error);
        }
    });
});
