/******** 轮播图********/
var index=0;//定义当前索引
var allIndex=$(".wapper>a").length-1;
var intIndex=0;
$(function(){
    intIndex=setInterval(next,3000);
    $("#prev").click(function(){
        clearInterval(intIndex);
        prev();
        intIndex=setInterval(prev,3000);
    })
    $("#next").click(function(){
        clearInterval(intIndex);
        next();
        intIndex=setInterval(next,3000);
    })
})
function next(){
    //当前显示的元素淡出
    $(".wapper>a").eq(index).fadeOut(1000);
    if(index==allIndex)
    {
        index=0;
    }
    else
    {
        index++;
    }
    $(".wapper>a").eq(index).fadeIn(1000);
}
function prev(){
    //上一张
    $(".wapper>a").eq(index).fadeOut(1000);
    if(index==0)
    {
        index=allIndex;
    }
    else
    {
        index--;
    }
    $(".wapper>a").eq(index).fadeIn(1000);
}



/********倒计时*********/
$(document).ready(function () {
    var starttime = new Date();
    var nowTime = starttime.getTime(); //当前的毫秒数
    starttime.setDate(starttime.getDate() +1); // 设定截止时间为第二天
    var targetDate = new Date(starttime.toLocaleDateString());//返回字符串
    run(targetDate);
});

function run(enddate) {
    getDate(enddate);
    setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
    var starttime = new Date(); //获取日期对象

    var nowTime = starttime.getTime(); //现在的毫秒数
    var enddate = new Date(enddate);
    var targetTime = enddate.getTime(); // 截止时间的毫秒数
    var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

    var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400; //余数代表剩下的秒数；
    var hour = Math.floor(second / 3600); //整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    var spanH = $('.se-txt')[0];
	var spanM = $('.se-txt')[1];
    var spanS = $('.se-txt')[2];
    spanH.innerHTML = tow(hour);
    spanM.innerHTML = tow(minute);
    spanS.innerHTML = tow(second);
}
function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}

//下拉菜单
$(function () {
    $('ul.nav-list li').hover(function () {
        $(this).children('div.subMenu').stop().slideToggle(600);
    })
})