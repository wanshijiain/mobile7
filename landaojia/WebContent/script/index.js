//首页 幻灯片
var indexSwiper = app.swiper('.swiper-index', {
    speed: 400,
    spaceBetween: 1,
    autoplay:5000,
    autoplayDisableOnInteraction:false,
    pagination:'.swiper-index .swiper-pagination',
	paginationHide:false
});
var functionsSwiper = app.swiper('.swiper-functions', {
	speed: 400,
	spaceBetween: 1,
	pagination:'.swiper-functions .swiper-pagination',
	paginationHide:false
});
//事件
$(document).on('pageInit', function(e){
	var page = e.detail.page;
	if(page.name=='index'){
		indexSwiper = app.swiper('.swiper-functions', {
			speed: 400,
			spaceBetween: 1,
			pagination:'.swiper-functions .swiper-pagination',
			paginationHide:false
		});
		functionsSwiper = app.swiper('.swiper-index', {
		    speed: 400,
		    spaceBetween: 1,
		    autoplay:5000,
		    autoplayDisableOnInteraction:false,
		    pagination:'.swiper-index .swiper-pagination',
			paginationHide:false
		});
	}
}).on('click', '.deals', function(){
	app.hideToolbar('.toolbar');
}).on('click', '.backIndex', function(){
	turnBackIndex();
}).on('click', '.order-create', function(){
	toPage('/common/order/create.html',null, {
		receivePeoples:[{
			name:'李大爷',
			phone:'31312121',
			address:'上海市浦东新区'
		},{
			name:'李二爷',
			phone:'1231312121',
			address:'上海市浦东新区'
		}]
	});
}).on('click', '.order-cancel', function(){
	toPage('/common/order/cancel.html', null, null);
});
app.loginScreen();
setTimeout(function(){app.closeModal('.login-screen')},3000)
