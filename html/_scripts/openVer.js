var openVer = {
	init: function($el){
		this.$el = $el;
		this.openVer();
	},

	openVer: function(){
		$('.projectos').on('click', '.verproj', function(e){
			// console.log(e);
			e.preventDefault();
			$('.md-modal').addClass('md-show');
			// $(e.delegateTarget).toggleClass('projdetail');

			// $(e.delegateTarget).siblings().removeClass('projdetail');

		});
	}
};