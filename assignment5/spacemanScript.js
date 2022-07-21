
$.getJSON('https://asiemering.github.io/csci202/assignment5/astros.json', function(data) {
    var number = data['number'];

    $('#heading').append('  ' + number + '!');

    data['people'].forEach(function (d) {

        $('body').append('<button type="button">' +
                            '<img src="spaceman.png" alt="floating astronaut with transparent background">' +
                            '<br>Name : ' + d['name'] + '<br>' +
                            'Spacecraft : ' + d['craft'] +
                          '</button>');
    });
});
