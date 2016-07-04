var hero = {
	init: function($el){
		this.$el = $el;
		this.startOwl();
	},

	startOwl: function(){
		this.$el.owlCarousel({
			navigation : true,
			singleItem : true,
			navigationText : false,
			mouseDrag :  false,
			autoPlay :   300000,
			stopOnHover : true,
			transitionStyle : "goDown"
		});
	}
};