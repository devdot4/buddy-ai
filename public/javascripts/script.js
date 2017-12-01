$(document).ready(function() {
  // switch question with input on click
  $('#btn1, #btn2, #btn3').click(function() {
    $('#chat, #mood').toggle();
  });
  // change emoji on hover
  $('#buddy').hover(function() {
    $(this).attr('src', 'images/1f604.png');
  }, function() {
    $(this).attr('src', 'images/1f600.png');
  });
  // user post
  $('#add').on('click', function() {
    var user = 'you'
    var text = $('#idea').val();
    var li = '<br/>' + '<li>' + user + '<br/>' + text + '</li>';
    $('#list').append(li);
  });
});
