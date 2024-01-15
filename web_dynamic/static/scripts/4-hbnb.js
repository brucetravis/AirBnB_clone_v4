$(document).ready(function () {
    // Initialize your variables here

    // Request amenities data from the API
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/amenities/',
        type: 'GET',
        success: function (data) {
            // Loop through the result and create checkboxes for each amenity
            for (var i = 0; i < data.length; i++) {
                var amenity = data[i];

                // Create a checkbox for the amenity
                var checkbox = $('<input>').attr({
                    type: 'checkbox',
                    id: amenity.id,
                    name: 'amenities',
                    value: amenity.id
                }).appendTo('.amenities');

                // Create a label for the checkbox
                $('<label>').attr('for', amenity.id).text(amenity.name).appendTo('.amenities');
            }
        },
        error: function (error) {
            console.error('Error fetching amenities:', error);
        }
    });

    // Handle button click event
    $('#filter-btn').click(function () {
        // Get the list of checked amenities
        var amenities = $('input[name="amenities"]:checked').map(function () {
            return this.value;
        }).get();

        // Make a POST request to places_search with the list of checked amenities
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenities }),
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
});
