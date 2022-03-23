$('#search').keyup(function(){
    var search = $(this).val();
    $.post('php/search.php', {search: search}, function(data){
        $('#result').html(data);
    })
})