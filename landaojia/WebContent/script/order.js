$(document).on('pageInit', function(e){
	//自然触发
	if(e.detail){
		var page = e.detail.page;
		if(page.name == 'order-index'){
			
		}
	//人工触发
	} else {
		//服务中
		$('#inService').html(Template7.templates.inServiceTemplate({
			inservices:[{
				getDate:'2015-01-01 09:00:00',
				orderId:12313131,
				orderAmount:123131.2
			},{
				getDate:'2015-01-02 09:00:00',
				orderId:12134855,
				orderAmount:123131.2				
			}]
		}));
		//已完成
		$('#outService').html(Template7.templates.outServiceTemplate({
			outservices:[{
				getDate:'2015-01-01 09:00:00',
				orderId:12313131,
				orderAmount:123131.2
			},{
				getDate:'2015-01-02 09:00:00',
				orderId:12134855,
				orderAmount:123131.2				
			}]			
		}))
	}
}).on('click', '.button-pay', function(){
	var orderId = $(this).attr('orderId');
	toPage('/common/order/pay.html', null, {
		orderId:orderId,
		orderAmount:12120,
		accountBalance:12313.213,
		couponId:'23232',
		couponAmount:123.21,
		needAmount:1231
	});
}).on('click', '.backIndex', function(){
	turnBackIndex();
}).trigger('pageInit');