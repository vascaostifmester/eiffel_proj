var openCart = {
	init: function($el){
		this.$el = $el;
		this.openBox();
	},

	openBox: function(){
		$('.cart').on('click', '.ini', function(e){
			$(e.delegateTarget).toggleClass('big');
		});
	}
};