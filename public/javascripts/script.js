$(document).ready(function () {
    // switch question with input on click
    $('#btn1, #btn2, #btn3').click(function() {
      $('#chat, #mood').toggle();
    });
    $('#buddy').hover(function () {
        $(this).attr('src', 'images/1f604.png');
    },
    function () {
        $(this).attr('src', 'images/1f600.png');
    }
    );
});
