let session = sessionStorage.getItem('session');
let name = sessionStorage.getItem('name');

if (session) {
    $('#btn_login').hide();
    $('#name_user').show();
    $('#btn_logout').show();

    $('#name_user').text(`Xin chào, ${name}`);
}
else {
    $('#btn_login').show();
    $('#name_user').hide();
    $('#btn_logout').hide();
}