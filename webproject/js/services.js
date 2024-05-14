$(document).ready(function() {
    $('.box').click(function() {
        var text = $(this).data('text');
        $('.content').text(text);
    });
});