$(document).ready(function(){
    $('.emo').click(function(){
        var text = jQuery.trim($('#comment').val());
        var emo = $(this).attr('value');

        if(text == ''){
            var sp = '';
        }else{
            var sp = ' ';
        }
        $('#comment').focus().val(jQuery.trim(text + sp + emo + sp));

    });
});