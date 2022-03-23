$(document).ready(function(){
    var user_name = prompt('enter your name');
    
    $.post('php/user.php',{user_name: user_name, action: 'joined'});

    setInterval(function(){
        $.post('php/user.php', {action: 'list'}, function(data){
            $('#user_online').html(data);
        })
    }, 500);

    
});
$(window).on('beforeunload',function(){
    $.post('php/user.php', {username: username, action: 'left'}, function(data){
    });        
});