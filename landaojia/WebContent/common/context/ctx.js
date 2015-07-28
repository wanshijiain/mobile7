var app = new Framework7({
	//缓存
//	cache					:	true,
//	cacheDuration			:	1*60*1000,
//	cacheIgnore				:	[],
//	cacheIgnoreGetParameters:	false,
	//快速点击
	activeState				:	true,
	activeStateElemets		:	'a, button, label, span',
	//导航与路由
	router					:	true,
	ajaxLinks				:   undefined,
	uniqueHistory			:	false,
	uniqueHistoryIgnoreGetParameters:false,
	externalLinks			:	'.external',
	animateNavBackIcon		:	true,
	//滑动返回上一页
	swipeBackPage			:	true,
	swipeBackPageThreshold	:	'10px',
	//可排序列表
	sortable				:	false,
	//滑动删除
	swipeoutNoFollow		:	true,
	//弹层
	modalTitle				:	'提示',
	modalButtonOk			:	'确定',
	modalButtonCancel		:	'取消',
	modalPreloaderTitle		:	'加载中...',
	popupCloseByOutside		:	true,
	modalTemplate			:	undefined,
	modalUsernamePlaceholder:	'输入用户名',
	modalPasswordPlaceholder:	'输入密码',
	//smart select
	smartSelectInPopup		:	true,
	smartSelectBackTemplate	:	'<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>',
	smartSelectPopupCloseTemplate	:		'<div class="left"><a href="#" class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>',
	smartSelectBackText		:	'返回',
	smartSelectPopupCloseText:	'关闭',
	smartSelectBackOnSelect	:	true,
	//导航栏和工具栏
	hideNavbarOnPageScroll	:	false,
	hideToolbarOnPageScroll	:	false,
	hideTabbarOnPageScroll	:	false,
	showBarsOnPageScrollEnd	:	true,
	//template7
	template7Pages: true,
	//图片懒加载
	imagesLazyLoadThreshold	:	0
});
var $ = Framework7.$;
//时间工具拓展
//对Date的扩展，将 Date 转化为指定格式的String 
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) 
{ //author: meizz 
var o = { 
 "M+" : this.getMonth()+1,                 //月份 
 "d+" : this.getDate(),                    //日 
 "h+" : this.getHours(),                   //小时 
 "m+" : this.getMinutes(),                 //分 
 "s+" : this.getSeconds(),                 //秒 
 "q+" : Math.floor((this.getMonth()+3)/3), //季度 
 "S"  : this.getMilliseconds()             //毫秒 
}; 
if(/(y+)/.test(fmt)) 
 fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
for(var k in o) 
 if(new RegExp("("+ k +")").test(fmt)) 
fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
return fmt; 
};
//当前日期增加天数
Date.prototype.addDay = function(dayNum){
	var a = new Date(this);
	a = a.valueOf();
	a = a + dayNum * 24 * 60 * 60 * 1000;
	a = new Date(a);
	return a;
};
Date.prototype.weekDay = function(){
	var day = new Date(this).getDay();
	switch (day) {
	case 0:return '周日';
	case 1:return '周一';
	case 2:return '周二';
	case 3:return '周三';
	case 4:return '周四';
	case 5:return '周五';
	case 6:return '周六';
	}
}
var mainView = app.addView('.view-main', {
	  url			:	'index',
	  dynamicNavbar	:	true,
	  reloadPages	:	true
});
var orderView = app.addView('.view-order', {
	  url			:	'order',
	  dynamicNavbar	:	true,
	  reloadPages	:	true
});
//全局跳转
$(document).on('click', '.view-change', function(){
	if($(this).hasClass('view-order')){
		mainView.router.load({
			url:'/order/order.html',
			view:'.view-order',
			context:{
				inservices:[{getDate:'2012-12-12', orderId:'sdada', orderAmount:123.5}]
			}
		});
	}
});