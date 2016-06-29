var opencloseProj = {
	init: function($el){
		this.$el = $el;
		this.opencloseVer();
	},

	opencloseVer: function(e){
		$('.proj').on('click', '.verproj', function(e){
			console.log(e);
			e.preventDefault();
			// $(e.delegateTarget).toggleClass('projdetail');

			// $(e.delegateTarget).siblings().removeClass('projdetail');

		});
	}
};