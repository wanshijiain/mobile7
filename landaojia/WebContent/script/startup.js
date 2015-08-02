//欢迎画面
var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<div class="tutorialicon">♥</div>',
    text: '欢迎进入大爷家的APP'
  },
  {
    id: 'slide1',
    picture: '<div class="tutorialicon">✲</div>',
    text: '大爷再次欢迎你'
  },
  {
    id: 'slide2',
    picture: '<div class="tutorialicon">♫</div>',
    text: '大爷第三次欢迎你'
  },
  {
    id: 'slide3',
    picture: '<div class="tutorialicon">☆</div>',
    text: '骚年，，多拉几个基友进来戳吧。<br><br><a id="tutorial-close-btn" href="/index/index.html">End Tutorial</a>'
  }
];
var options = {
		  'bgcolor': '#0da6ec',
		  'fontcolor': '#fff'
};

/*var welcomescreen = app.welcomescreen(welcomescreen_slides, options);
$(document).on('click', '#tutorial-close-btn, .welcomescreen-closebtn', function () {
    welcomescreen.close();
});*/