//折叠隐藏 展开全部 //gradient 需要建立在双层div里面
$(function(){
	var slideHeight = 360; // px
	var defHeight = $('#bodyshow').height();
	if(defHeight >= slideHeight){
		$('#bodyshow').css({"height":slideHeight+"px","overflow":"hidden"});
		$('#read-more').append('<div class="showdie margin-top"><a href="#">--展开全部剧情--</a></div>');
		$('#read-more a').click(function(){
			var curHeight = $('#bodyshow').height();
			if(curHeight == slideHeight){
				$('#bodyshow').animate({
				  height: defHeight
				}, "normal");
				$('#read-more a').html('--隐藏部分剧情--');
				$('#gradient').fadeOut();
			}else{
				$('#bodyshow').animate({
				  height: slideHeight
				}, "normal");
				$('#read-more a').html('--展开全部剧情--');
				$('#gradient').fadeIn();
			}
			return false;
		});		
	}
});


//scrolltotop 返回顶部代码
$(function(){
        //首先将#back-to-top隐藏
        $("#totop").hide();
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#totop").show();
                }
                else
                {
                    $("#totop").hide();
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $("#totop").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });
            
          $("#totop a").click(function(){ //在id=letter 中的li a标签点击事件
          var v_href = $(this).attr("data"); //获取当前data的值. alert(v_href);
          $("html,body").animate({scrollTop: $(v_href).offset().top - 90});return false;
      	  });

        });
    }); 

//常用行为变量设置
var common = {
	images: {
		lazyload: function() {
				$.getScript("https://cdn.jsdelivr.net/gh/khcss/mydy/template/dyttw/images/js/jquery.lazyload.min.js", function() {
				$(".lazypic").lazyload({
					placeholder : "https://cdn.jsdelivr.net/gh/khcss/mydy/template/dyttw/images/load.gif",
					effect: "fadeIn",
					threshold: 200,
					failurelimit: 15,
					skip_invisible: !1
				})
			})
		},
	},

//播放页显示简介
	detail:{
		collapse: function() {
					$(".player_detail").on("click", ".detail-more", function() {
						$detailContent = $(".player_detail_content");
						//$detailSketch = $(".detail-sketch");
						
						"none" == $detailContent.css("display") ? ($(this).html('\u6536\u8d77<i class="upward"></i>'), $detailContent.show()) : ($(this).html('\u8be6\u60c5<i class="downward"></i>'), $detailContent.hide())
					})
				},
	}
}
$(document).ready(function() {
	//图片延时加载
	common.images.lazyload();
	common.detail.collapse();
});

function timestamp(url){
    var getTimestamp=new Date().getTime();
    if(url.indexOf("?")>-1){
        url=url+"&timestamp="+getTimestamp
    }else{
        url=url+"?timestamp="+getTimestamp
    }
    return url
};
url.indexOf("?")>-1?`${url}&timestamp=${new Date().getTime()}`:`${url}?=timestamp${new Date().getTime()}`