$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });

  ///// Contact Form Validation //////////

  function  validateName(fullname) {
    if(fullname.length > 2) {
      $("#fullname").removeClass('error');
      $('#fullname-error').hide();
      return true;

    }
    else {
      $("#fullname").addClass('error');
      $('#fullname-error').show();
      return false;

    }
  }

function  validateEmail(email) {
    var re = //
    if(re.test(email)) {
      $("#email").removeClass('error');
      $('#email-error').hide();
      return true;
    }
    else {
      $("#email").addClass('error');
      $('#email-error').show();
      return false;

    }
  }

  function  validateMessage(message) {
    if(message.lenght > 0) {
      $("#mesage").removeClass('error');
      $('#message-error').hide();
      return true;
    }
    else {
      $("#message").addClass('error');
      $('#message-error').show();
      return false;

    }
  }

  $('form').submit(function(event){

    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim($('#message').val());

    if (validateName(fullname) & validateEmail(email) & validateMessage(message)) {

    }
    else {

    }

    event.preventDefault(); // prevent form from submitting

  });

});