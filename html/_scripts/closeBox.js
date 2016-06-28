var close = {
	init: function($el){
		this.$el = $el;
		this.closeBox();
	},

	closeBox: function(){
		console.log($('.big'));
		$('.cart').on('click', '.checkout-close', function(e){
			$(e.delegateTarget).removeClass('big');
		});
	}
};


	// var hero = {
	// 	init: function($el){
	// 		this.$el = $el;
	// 		this.startOwl();
	// 	},

	// 	startOwl: function(){
	// 		this.$el.owlCarousel({
	// 			navigation : true,
	// 			singleItem : true,
	// 			navigationText : false,
	// 			mouseDrag :  false,
	// 			autoPlay :   3000,
	// 			stopOnHover : true,
	// 			transitionStyle : "goDown"
	// 		});
	// 	}
	// };



	// $('.tabs').on('click', 'li', function(e){
	// 	$(e.delegateTarget).find('.active').removeClass('active');
	// 	$(this).addClass('active');

	// 	var indexLi = $(this).index();
	// 	$('.conteudo').eq(indexLi).addClass('active');

	// });