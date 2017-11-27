var tmpl = require('./index.html');
var style = require('./index.scss');
document.body.innerHTML += tmpl;
$('.btn').on('click', function () {
    var target = $(this).text();
    $.ajax({
        url: '/api/'+target,
        type: 'post',
        data: {
            name: 'array',
            age: '23'
        },
        success: function (data) {
            console.log(data);
        }
    });
});