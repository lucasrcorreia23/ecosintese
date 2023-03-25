

function isValidEmailAddress(emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};

function validacaoEmail(field) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
	
	if ((usuario.length >=1) &&
		(dominio.length >=3) &&
		(usuario.search("@")==-1) &&
		(dominio.search("@")==-1) &&
		(usuario.search(" ")==-1) &&
		(dominio.search(" ")==-1) &&
		(dominio.search(".")!=-1) &&
		(dominio.indexOf(".") >=1)&&
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
	document.getElementById("msgemail").innerHTML="E-mail válido";
	alert("E-mail valido");
	}
	else{
	document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
	alert("E-mail invalido");
	}
	}

function handlePhone(event) {
	let input = event.target;
	input.value = phoneMask(input.value);
}
  
  const phoneMask = (value) => {
	if (!value) return ""
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d)/,"($1) $2")
	value = value.replace(/(\d)(\d{4})$/,"$1-$2")
	return value
  }


(function($){ 
	"use strict";
	
	// Setup venobox / photo popup gallery
	$('.venobox').venobox({
		framewidth: '700px',
		frameheight: '400px',
		border: '10px',
		bgcolor: '#fff',
		titleattr: 'data-title',
		numeratio: true,
		infinigall: true
	});

	// Setup mobile menu
	$('.navbarmenumobile').on('click', function(){
		$(this).toggleClass('baropen');
		$('.navigation ul').toggleClass('open');
		return false;
	});

	const $ul = document.querySelector('ul');
	

	const $menu1 = document.querySelector('.menu1')
	const $menu2 = document.querySelector('.menu2')
	const $menu3 = document.querySelector('.menu3')
	const $menu4 = document.querySelector('.menu4')
	const $navbarmenumobile = document.querySelector('.navbarmenumobile')


	$menu1 .addEventListener('click', function()
	{
        $ul.classList.remove('open');
		$navbarmenumobile.classList.remove('baropen');

	}	)

	$menu2 .addEventListener('click', function()
	{
        $ul.classList.remove('open');
		$navbarmenumobile.classList.remove('baropen');
	}	)

	$menu3 .addEventListener('click', function()
	{
        $ul.classList.remove('open');
		$navbarmenumobile.classList.remove('baropen');
	}	)

	$menu4 .addEventListener('click', function()
	{
        $ul.classList.remove('open');
		$navbarmenumobile.classList.remove('baropen');
	}	)



	



	
	

	
	// Setup masonry
	var $gridmain = $('.gridmain');
	$gridmain.masonry({
	    columnWidth: '.grid-sizer',
	    itemSelector: '.grid-item',
	    percentPosition: true
	});

	$gridmain.imagesLoaded().on('progress', function(){
	    $gridmain.masonry('layout');
	});


	// Setup banner slider
	var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    autoplay: {
		    delay: 4000,
		},
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	});


       // Email Validation
	function isValidEmailAddress(emailAddress) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
};

// Form Contact Validation
$('form#ajax_form').on('submit', function(){
	var check = false;
	var name = $('#nome').val();
	var email = $('#email').val();
	var phone = $('#phone').val();

	//check name field
	if (name == ""){
		$('p.notif').text("Campo do nome deve ser preenchido corretamente.").fadeIn();
		check = false;
		return false;
	}else{
		check = true;
	}

	//check email field
	if (email == ""){
		$('p.notif').text("Campo de e-mail deve ser preenchido corretamente.").fadeIn();
		check = false;
		return true;
	}else{
		if( !isValidEmailAddress( email ) ) {
			$('p.notif').text("Campo de e-mail deve ser preenchido corretamente.").fadeIn();
			check = false;
			return false;
		}else{
			check = true;
		}
	}

	//check phone field
	if (phone == ""){
		$('p.notif').text("Campo de telefone deve ser preenchido").fadeIn();
		check = false;
		return false;
	}else{
		check = true;
	}

	if (check == true){
		$("#btnsignup").prop('disabled', true);
		$("#btnsignup").prop('value', 'Mensagem sendo enviada...'); 
		$.ajax({
			type: "POST",
			url: "postcontact.php",
			data: $('#ajax_form').serialize(),
			success: function(data){
				$('p.notif').html('<label>'+ data +'</label>').fadeIn();
				$("#btnsignup").prop('disabled', false);
				check = false;
				$('#nome').val("");
				$('#email').val("");
				$('#phone').val("");
				$("#btnsignup").prop('value', 'Enviar'); 
			}
		});
		return false;
	}
	return false;

});



	// Smooth scroll
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) {
	            return false;
	          } else {
	            $target.attr('tabindex','-1');
	            $target.focus();
	          };
	        });
	      }
	    }
	  });

})(jQuery);
