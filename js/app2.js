function showBooks() {
    $.ajax({
        url: 'http://127.0.0.1:8000/book/',
        type: 'GET',
        dataType: 'json'
    })
        .done(function (dta) {
            for (var i = 0; i < dta.length; i++) {
                var dataIndex = dta[i].id;
                var div = document.querySelector('#test3');
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                td1.dataset.id = dataIndex;
                td1.dataset.num = i;
                td1.innerText = dta[i].title;
                var td2 = document.createElement('td');
                td2.dataset.id = dataIndex;
                td2.innerText = "Usuń";
                div.appendChild(tr);
                div.appendChild(td1);
                div.appendChild(td2);
                var nowyDiv = document.createElement('div');
                td1.appendChild(nowyDiv);
                td1.addEventListener('click', function () {
                    bookDetails(this.dataset.id, this.dataset.num);

                });
                td2.addEventListener('click', function () {
                    bookDelete(this.dataset.id);
                })
            }
        })
        .fail(function (xhr, status, err) {
            console.log(xhr);
        });
}

function bookDetails(dataIndex, tdIndex) {
        $.ajax({
            url: 'http://127.0.0.1:8000/book/' + dataIndex,
            type: 'GET',
            dataType: 'json'
        })
            .done(function (details) {
                $('td').find('div').eq(tdIndex).text("Autor: " + details.author + " ISBN: " + details.isbn + " Wydawca: " + details.publisher);
            })
            .fail(function (xhr, status, err) {
            })
}


function bookDelete(dataIndex) {
    $.ajax({
        url: 'http://127.0.0.1:8000/book/' + dataIndex,
        type: 'DELETE',
        dataType: 'json'
    })
        .done(function () {
            $('#test3').children().remove();
            showBooks();
        })
        .fail(function (xhr, status, err) {})
}


    $("#bookadd").submit(function(event) {
          event.preventDefault();
        });


function bookAdd() {
        $.ajax({
            url: 'http://127.0.0.1:8000/book/',
            data: {"title": $('#title').val(), "author": $('#author').val(), "publisher": $('#publisher').val(), "isbn": "4", "genre": "5"},
            type: 'POST',
            dataType: 'json'
        })
            .done(function () {
                $('#test3').children().remove();
                showBooks();
                alert("Dodano książkę " + $('#title').val())
            })
            .fail(function (xhr,status,err) {
                console.log(xhr);
                console.log(status);
                console.log(err);
                alert("Nieprawidłowy wpis. Popraw dane")
        })
}


$(showBooks);
var przycisk = $('#submit');
przycisk.on('click', function() {
    bookAdd();
});




