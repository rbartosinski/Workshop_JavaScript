$(function () {
    $.ajax({
        url: 'http://date.jsontest.com',
        type: 'GET',
        dataType: 'json'
    })
        .done(function (dane) {
            console.log(dane);
            $('#test').text(dane.date);
        })
        .fail(function (xhr,status,err) {
            console.log(xhr);
        })
});
$(function () {
    $.ajax({
        url: 'https://swapi.co/api/people/4/',
        type: 'GET',
        dataType: 'json'
    })
        .done(function (ludzik) {
            console.log(ludzik);
            $('#test2').text(ludzik.name);
        })
        .fail(function (xhr,status,err) {
            console.log(xhr);
        })
});