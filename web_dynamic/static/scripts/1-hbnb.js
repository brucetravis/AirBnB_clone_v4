$(document).ready(function () {
    // Initialize your variables here
    var amenityIDs = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        var amenityID = $(this).data('id');
        var amenityName = $(this).data('name');

        // If the checkbox is checked, store the Amenity ID in the variable
        if ($(this).prop('checked')) {
            amenityIDs.push(amenityID);
        } else {
            // If the checkbox is unchecked, remove the Amenity ID from the variable
            var index = amenityIDs.indexOf(amenityID);
            if (index !== -1) {
                amenityIDs.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var amenitiesList = amenityIDs.map(function (id) {
            return amenityName + ' (ID: ' + id + ')';
        }).join(', ');

        $('div#Amenities h4').text(amenitiesList);
    });
});
