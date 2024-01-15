$(document).ready(function () {
    // Initialize your variables here
    var selectedStates = [];
    var selectedCities = [];

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

    // Request states and cities data from the API
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/states/',
        type: 'GET',
        success: function (states) {
            // Loop through the states result and create checkboxes for each state
            for (var i = 0; i < states.length; i++) {
                var state = states[i];

                // Create a checkbox for the state
                var checkbox = $('<input>').attr({
                    type: 'checkbox',
                    id: 'state_' + state.id,
                    name: 'states',
                    value: state.id
                }).appendTo('.locations .states');

                // Create a label for the checkbox
                $('<label>').attr('for', 'state_' + state.id).text(state.name).appendTo('.locations .states');
            }
        },
        error: function (error) {
            console.error('Error fetching states:', error);
        }
    });

    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/cities/',
        type: 'GET',
        success: function (cities) {
            // Loop through the cities result and create checkboxes for each city
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];

                // Create a checkbox for the city
                var checkbox = $('<input>').attr({
                    type: 'checkbox',
                    id: 'city_' + city.id,
                    name: 'cities',
                    value: city.id
                }).appendTo('.locations .cities');

                // Create a label for the checkbox
                $('<label>').attr('for', 'city_' + city.id).text(city.name).appendTo('.locations .cities');
            }
        },
        error: function (error) {
            console.error('Error fetching cities:', error);
        }
    });

    // Listen to changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        var elementId = $(this).attr('id');
        var elementType = $(this).attr('name');
        var elementName = $(this).data('name');
        var elementIdAttr = 'data-id';
        
        // Determine if the element is a state or city based on its name attribute
        if (elementType === 'states') {
            elementIdAttr = 'data-id';
            var index = selectedStates.indexOf(elementId);
            if ($(this).prop('checked')) {
                if (index === -1) {
                    selectedStates.push(elementId);
                }
            } else {
                if (index !== -1) {
                    selectedStates.splice(index, 1);
                }
            }
        } else if (elementType === 'cities') {
            elementIdAttr = 'data-id';
            var index = selectedCities.indexOf(elementId);
            if ($(this).prop('checked')) {
                if (index === -1) {
                    selectedCities.push(elementId);
                }
            } else {
                if (index !== -1) {
                    selectedCities.splice(index, 1);
                }
            }
        }

        // Update the h4 tag inside the div Locations with the list of States or Cities checked
        var locationsList = selectedStates.concat(selectedCities).map(function (id
