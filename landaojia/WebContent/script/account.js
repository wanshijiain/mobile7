$(document).on('click', '.backIndex', function(){
	currentView.router.loadPage('/account/account.html');
	app.showToolbar('.toolbar');
}).on('click', '.menu', function(){
	if($(this).hasClass('order')){
		window.location.href='/order/order.html';
	}
	if($(this).hasClass('address')){
		toPage('/account/addressMgr.html', null, null);
	}
});