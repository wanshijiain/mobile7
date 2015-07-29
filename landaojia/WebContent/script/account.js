$(document).on('click', '.menu', function(){
	if($(this).hasClass('order')){
		window.location.href='/order/order.html';
	}
	if($(this).hasClass('address')){
		currentView.router.load({
			url:'/account/addressMgr.html'
		})
	}
	app.hideToolbar('.toolbar');
});