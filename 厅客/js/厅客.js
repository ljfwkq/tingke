$(function(){
	setTimeout(function(){
		$(document).scrollTop(0);
	},500);
	    var wHei = $('body').height();//获取页面高度
	    var index = 0;
	    var Time = new Date();
	    $("div.part1").addClass("first");
		//alert(time);
		$(window).resize(function(){
		    wHei = $('body').height();
		    $(document).scrollTop(index*wHei);
	});
	$(window).mousewheel(function(event,delta,deltaX,deltaY){
		/*
		 * mousewheel:鼠标滚动事件	
		 * event:event事件
		 * delta:参数，获取滚轮是向上滚动还是向下滚动,向下是负值，向上是正值
		 * deltaX,deltaY:滚动坐标
		*/
		if(new Date()-Time>800){
			Time=new Date();
			delta==-1?index++:index--;
		    if(index>6)index=6;
		    if(index<0)index=0;
		    $("div.part").eq(index).siblings().removeClass("on");
	        $("div.nav ul li").eq(index).addClass("on").siblings().removeClass("on");
	        $("body,html").animate({"scrollTop":wHei*index},800,function(){
	        	$("div.part").eq(index).addClass("on");
	        });
		}
		
	});
	$("div.nav ul li").click(function(){
	    index=$(this).index();//获取当前的索引值
	      $("div.part").eq(index).siblings().removeClass("on");
		$("div.nav ul li").eq(index).addClass("on").siblings().removeClass("on");
		$("body,html").animate({"scrollTop":wHei*index},800,function(){
	        	$("div.part").eq(index).addClass("on");
	        });
	});
});
