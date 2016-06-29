var closeCart = {
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
