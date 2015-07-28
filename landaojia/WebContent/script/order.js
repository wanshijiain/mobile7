var date = new Date();
var dateArr = [];
var dateDisplayArr = [];
var maxDayNum = 10;
for(var i = 0 ; i < maxDayNum ; i++ ){
	var newDate = date.addDay(i);
	dateArr.push(newDate.Format('MM-dd'));
	dateDisplayArr.push(newDate.Format('MM-dd') + ' ' + (i == 0 ? '今天':i == 1 ? '明天':i == 2 ? '后天':newDate.weekDay()));
};
var datePicker = app.picker({
    input: 'input[name=getDate]',
    inputReadOnly:true,
    rotateEffect: true,
    scrollToInput:true,
    cols: [
       {
         values: dateArr,
         displayValues:dateDisplayArr
       },
       {
    	   values: '08:00~08:30 08:30~09:00 09:00~09:30 09:30~10:00 10:00~10:30 10:30~11:00 11:00~11:30 11:30~12:00'.split(' ')
       }
     ],
     toolbarCloseText:'完成',
     toolbarTemplate:'<div class="toolbar">'+
			    	  '<div class="toolbar-inner">'+
					     '<div class="left"></div>'+
					     '<div class="right">'+
					       '<a href="#" class="link close-picker">{{closeText}}</a>'+
					     '</div>'+
					   '</div>'+
					 '</div> ',
     onClose:function(p){
    	 $('input[name=getDate]').val(p.value[0]+' '+p.value[1]);
     }
});
var orderView = app.addView('.view-order', {
	  url			:	'order',
	  reloadPages	:	true
});
//事件
$(document).on('click', 'input[name=getDate]', function(){
	datePicker.open();
}).on('click','.receivePeople', function(){
	mainView.router.loadPage('/common/order/receivePeople.html');
}).on('click','.addReceiver', function(){
	mainView.router.loadPage('/common/order/addReceiver.html');
}).on('pageBeforeAnimation', function(e){
	var page = e.detail.page;
	if(page.name == 'order-index'){
	}
});