$(document).ready(function() {
    $('#tick_descrip').summernote({
        height: 200
    });
    $.post("../../controller/categoria.php?op=combo",function(data, status){
        $('#cat_id').html(data);
    });
});