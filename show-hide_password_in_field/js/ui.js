$(document).ready(function(){
    $('input[type="password"]').after('<input type="checkbox" id="show"/>Show');
    $('#show').change(function(){
        var prev = $(this).prev();
        var value = $(this).prev().val();

        var type = prev.attr('type');
        var id = prev.attr('id');

        var classs = prev.attr('class');

        var new_type = (type == 'password') ? 'text' : 'password';

        prev.remove();
        $(this).before('<input type="'+ new_type +'" value="'+ value+'" id="'+ id +'" name="'+ name +'" class="'+classs+'"/>');

    });
});