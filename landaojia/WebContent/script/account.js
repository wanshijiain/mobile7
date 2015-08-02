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
	if($(this).hasClass('wallet')){
		toPage('/account/wallet.html', null, {
			amountBalance:11.00,
			couponsNum:5
		});
	}
}).on('click','.couponsDetail',function(){
	toPage('/common/order/coupons.html', null, {
		couponses:[{
			amount:12121.1,
			endTime:'2015-01-01 22:30:12',
			type:'优惠券',
			source:'注册赠送优惠券',
			rule:'满20元可用'
		},{
			amount:2312.1,
			endTime:'2015-01-01 22:30:12',
			type:'优惠券',
			source:'首单赠送优惠券',
			rule:'满20元可用'
		},{
			amount:11.1,
			endTime:'2015-01-01 22:30:12',
			type:'优惠券',
			source:'首单赠送优惠券',
			rule:'满100元可用'
		}]
	})
});