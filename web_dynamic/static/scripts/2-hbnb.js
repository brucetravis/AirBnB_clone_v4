$(document).ready(function () {
    // Initialize your variables here

    // Request the status of the API
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        type: 'GET',
        success: function (data) {
            // If the status is "OK", add the class available to the div#api_status
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                // Otherwise, remove the class available
                $('#api_status').removeClass('available');
            }
        },
        error: function (error) {
            console.error('Error fetching API status:', error);
        }
    });
});
