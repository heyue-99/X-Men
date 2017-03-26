
  (function($){
	$(document).ready(function(){
	
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			$('#backTop').on('click',move);
	$(window).on('scroll',function(){   //因为要传递一个参数 所以用匿名函数的方式
		checkPosition($(window).height());
	});
    checkPosition($(window).height());

	function move(){
		$('body,html').animate({     //滚动条对于大部分浏览器是在html上，而chrome是在body上
			scrollTop:0
		}, 800);
	}

	function go(){                     //快速到达顶部
		$('body,html').scrollTop(0);
	}

	function checkPosition(pos){
		if ($(window).scrollTop()>pos) {
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}

	
			if (($(".header").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 170
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-165
						}, 1000);
						return false;
					}
				}
			});
		}


		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);// JavaScript Document


