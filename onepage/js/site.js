//JavaScript file for SecurITy Newsletter

$.noConflict();
(
  function($) {
    $(document).ready(function() {
    //$('#useradd').addClass('blinking');  Getting blinking text would involve pulling code I didn't make.
      alert("ready");
      

/* Don't want people turning off JS to get around validation, so I'll add a class that has to exist for the page to
   be accepted. I don't think I'm at the level where I can prevent people from modifying their JS locally. */

      $('#signup').on('submit', function(e) {
        e.preventDefault(); //don't reload the page
        var val = $('#useradd').val());
        var regex = '^A-Z0-9amou
        var isValid = return regex.test(val);
        if(isValid === true) {
          
        }
        else {
          
        }
      })

    })
  }
)(jQuery);
