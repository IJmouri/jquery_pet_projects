$('#username').keyup(function(){
    var username = $(this).val();
    $('#username_status').text('Searching...');
    if(username != ''){
        $.post('php/username_check.php', {username: username}, function(data){
            $('#username_status').text(data);
        })
    }else{
        $('#username_status').text('');
    }
});