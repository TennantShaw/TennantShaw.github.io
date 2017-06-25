(function($) {
	
	"use strict";

	$(function() {
		// Contact form validation
		$('.contact-us').submit(function(e) {
			e.preventDefault();

			$.ajax({
				url: 'include/form/contact.php',
				data: 'name='+ escape($('#contactName').val()) +'&email=' + escape($('#contactEmail').val()) + '&phone=' + escape($('#contactPhone').val()) + '&message='+escape($('#contactMessage').val()),
				dataType: 'json',
				success:function(resp) {
					$('#contactName, #contactEmail, #contactMessage').removeClass('error');

					if(resp.success == 1){
						if ($('#alert:first').is (':hidden')) {
							$('#alert').slideDown('slow');							
						}
						else {
							$('#alert').hide();
						}

						$('#contactName, #contactEmail, #contactMessage, #contactPhone').val('');
					}
					else {
						if(resp.errorCode == 1){
							$('#contactName').addClass('error').focus();
						}
						else if(resp.errorCode == 2){
							$('#contactEmail').addClass('error').focus();
						}
						else if(resp.errorCode == 3){
							$('#contactMessage').addClass('error').focus();
						}	
					}					
				}
			});
		
			return false;
		});
	});

})(jQuery);