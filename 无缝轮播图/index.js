
  //获取元素
  var next=document.getElementsByClassName('next')[0];
  var preous=document.getElementsByClassName('preous')[0];
  var count=document.getElementsByClassName("count");
  var imges=document.getElementsByClassName("img-list")[0];
  var index=1; //初始为第一张图片
  var wrap=document.getElementsByClassName('wrapper')[0];
  var isNext=true;
  var animated;
  var Timer;


//滑动动画
function animate(offset){
  animated=true;
  var nowLeft=parseInt(imges.offsetLeft)+offset;
  var time=300;//位移总时间
  var interval=10;//位移间隔时间
  var speed=offset/(time/interval);//每次位移量
  //开始动画
  function go(){
    if ((speed<0&&parseInt(imges.offsetLeft)>nowLeft)||speed>0&&parseInt(imges.offsetLeft)<nowLeft) {
      imges.style.left=parseInt(imges.offsetLeft)+speed+"px";
      setTimeout(go,interval);
    }else{   
      animated=false;
      imges.style.left=nowLeft+"px";
      if (nowLeft<-1200) {
        imges.style.left=-240+"px";
      }
      if (nowLeft>-240) {
        imges.style.left=-1200+"px";
      }
    }
  }
  go();
}

//点击向后按钮
next.onclick=function(){
  if (animated) {
      return;
  }
  if (index == 5) {
      index = 1;
  }else {
      index += 1;
  }
  animate(-240);
  changeCount();
}
//点击向前按钮
preous.onclick=function(){
  if (animated) {
      return;
  }
  if (index == 1) {
      index = 5;
  }else {
      index -= 1;
  }
  animate(240);
  changeCount();
}

//圆点随着图片切换而切换
function changeCount(){
  for (var i = count.length - 1; i >= 0; i--) {
    if (count[i].id=="active") {
      count[i].id="";
    }
  }
  count[index-1].id='active';
}

//点击原点时跳转
for (let i = count.length - 1; i >= 0; i--) {
  count[i].onclick=function(){
    if (animated) {
      return;
    }
    if(this.id=="active") {
      return;
    }
    var num=parseInt(this.getAttribute('value'))-index;
    index=parseInt(this.getAttribute('value'));
    animate(-240*num);
    changeCount();
  }
}

//自动轮播
function play(){
  Timer=setInterval(function(){
    next.onclick();
  },1000);
}
play();

function stop(){
  clearInterval(Timer);
}
wrap.onmouseenter=stop;
//鼠标移动上去时，停止轮播
wrap.onmouseleave=play;
