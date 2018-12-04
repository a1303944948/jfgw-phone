/*********************************************首页JS代码实现*******************************************/
//setTimeout(function(){window.scrollTo(0,0)},20);//当页面打开或刷新时返回页面顶部
//var scroll = document.getElementById('scroll');
//var ky = 0;		//滚轮移动位置
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
function d(id){
	return document.getElementById(id);
}
function c(cls){
	return document.getElementsByClassName(cls);
}
function n(name){
	return document.getElementsByTagName(name);
}
//var product_video = c('product_details_video');
var bodyH = n('body')[0].offsetHeight;
var footer = n('footer');
var header = n('header');
var home = c('news_home');
/*动态更改页面img与video的src*/
function no_repeat(){
	var img = n('img');
	for(var i = 0; i < img.length; i++){
		if(img[i].src == ""&&img[i].attributes[0].name != 'v-bind:src'){
			img[i].src = 'https://hf-web.oss-cn-shanghai.aliyuncs.com/web/jfgw/' + img[i].getAttribute('data-src');
		}
	}
	var video = n('video');
	for(var j = 0; j < video.length; j++){
		if(video[j].src == ""){
			video[j].src = 'https://hf-web.oss-cn-shanghai.aliyuncs.com/web/jfgw/' + video[j].getAttribute('data-src');
		}
	}
	var source = n('source');
	for(var k = 0; k < source.length; k++){
		if(source[k].src == ""){
			sources = 'https://hf-web.oss-cn-shanghai.aliyuncs.com/web/jfgw/' + source[k].getAttribute('data-src');
			source[k].src = sources;
		}
	}
}
no_repeat();

var loading = c('loading');
function onloads(){
	var img = n('img');
	n('html')[0].style.overflowY = 'hidden';
	n('body')[0].style.overflowY = 'hidden';
	for(var i = 0; i < img.length; i++){
		var imgObj = new Image();
		imgObj.src = img[i].src;
		imgObj.onload = function(){
			var count = 100/(img.length);
			var counts = parseFloat(loading[0].children[0].children[1].children[0].style.width) + count;
			loading[0].children[0].children[1].children[0].style.width = counts + '%';
			if(Math.round(parseFloat(loading[0].children[0].children[1].children[0].style.width)) == 100){
				loading[0].style.display = 'none';
				n('html')[0].style.overflowY = 'auto';
				n('body')[0].style.overflowY = 'auto';
			};
		}
	}
}
if(loading[0] != undefined){
	onloads();
}

/*header新闻中心滑动*/
/*c('header_right_hover')[0].onmousemove = function(){
	c('header_right_list')[0].style.top = "0px";
	c('header_right_list')[0].style.boxShadow = "0px 0px 5px #a4a4a4";
};
c('header_right_hover')[0].onmouseout = function(){
	c('header_right_list')[0].style.top = "-124px";
	c('header_right_list')[0].style.boxShadow = "0px 0px 0px #ffffff";
}*/


$('.footere_div_a').hover(function(){
	//$('.footere_div_a_top').css('display','block');
	//$('.footere_div_a_bottom').css('display','block');
	$('.footere_div_a>div').css({
		'transform': 'scale(1,1)'
	})
},function(){
	//$('.footere_div_a_top').css('display','none');
	//$('.footere_div_a_bottom').css('display','none');
	$('.footere_div_a>div').css({
		'transform': 'scale(0,0)'
	})
})
/*JS滚动条定制*/
/*var sizebig = 0;
var sizesmall = 0;
$(window).resize(function(){
	//JS当页面高度不足整个页面时底部将贴在最下面
	bodyH = document.getElementsByTagName('body')[0].offsetHeight;
	var footer = document.getElementsByTagName('footer');
	sizebig = window.innerHeight;
	if(sizebig < sizesmall){
		if(bodyH+230 < window.innerHeight){
			footer[0].style.position = 'absolute';
			footer[0].style.bottom = '0px';
			footer[0].style.left = '0px';
		}else{
			footer[0].style.position = 'relative';
		}
	}else{
		if(bodyH < window.innerHeight){
			footer[0].style.position = 'absolute';
			footer[0].style.bottom = '0px';
			footer[0].style.left = '0px';
		}else{
			footer[0].style.position = 'relative';
		}
	}
	sizesmall = window.innerHeight;
	/*if(ky*(window.innerHeight-window.innerHeight/bodyH*window.innerHeight)/(bodyH - window.innerHeight) > window.innerHeight - window.innerHeight/bodyH*window.innerHeight){
		scroll.style.top =  window.innerHeight - window.innerHeight/bodyH*window.innerHeight + 'px';
	}else{
		scroll.style.top =  ky*(window.innerHeight-window.innerHeight/bodyH*window.innerHeight)/(bodyH - window.innerHeight) + 'px';
	}
	bodyH = document.getElementsByTagName('body')[0].offsetHeight;
	scroll.style.height = window.innerHeight/bodyH*window.innerHeight + 'px';
	if(bodyH <= window.innerHeight){
		scroll.style.display = 'none';
	}else{
		scroll.style.display = 'block';
	}*/
//});
var cont = 0;
for(var i = 0; i < footer[0].children[0].children.length; i++){
	cont += footer[0].children[0].children[i].clientWidth;
}
footer[0].children[0].style.width = cont + 'px';
window.onload = function(){
	/*var ty;		//鼠标的位置
	var oy;		//物体的位置
	var sy;		//鼠标距离物体的位置
	scroll.style.height = window.innerHeight/bodyH*window.innerHeight + 'px';
	if(bodyH <= window.innerHeight){
		scroll.style.display = 'none';
	}
	//防止复制操作
	function select_none(){
		$('html,body').css({
		    '-webkit-touch-callout': 'none',
		    '-webkit-user-select': 'none',
		    '-khtml-user-select': 'none',
		    '-moz-user-select': 'none',
		    '-ms-user-select': 'none',
		    'user-select': 'none'
		})
	}
	//恢复复制操作
	function select_auto(){
		$('html,body').css({
			'-webkit-touch-callout': 'auto',
			'-webkit-user-select': 'auto',
			'-khtml-user-select': 'auto',
			'-moz-user-select': 'auto',
			'-ms-user-select': 'auto',
			'user-select': 'auto'
		})
	}
	scroll.onmousedown = function(e){
		sy = e.offsetY;
		scroll.style.backgroundColor = 'rgba(50,50,50,0.7)';
		select_none();
		document.onmousemove = function(e){
			ty = e.clientY;
			oy = ty - sy;
			if(oy <= 0){
				oy = 0;
			}
			if(oy >= window.innerHeight - window.innerHeight/bodyH*window.innerHeight){
				oy = window.innerHeight - window.innerHeight/bodyH*window.innerHeight;
			}
			scroll.style.top = oy + 'px';
			ky = (bodyH-window.innerHeight)/(window.innerHeight-window.innerHeight/bodyH*window.innerHeight)*oy;
			scrollTo(0,(bodyH-window.innerHeight)/(window.innerHeight-window.innerHeight/bodyH*window.innerHeight)*oy);
			//scrollTo(0,bodyH/window.innerHeight*oy);
		}
		document.onmouseup = function(){
			scroll.style.backgroundColor = 'rgba(50,50,50,0.3)';
			document.onmousedown = false;
			document.onmousemove = false;
			select_auto();
		}

	}
	//鼠标滚轮移动时的变化
	document.getElementsByTagName('body')[0].onmousewheel = function(e){
		if(e.wheelDeltaY>=0){
			ky-=50;
			if(ky <= 0){
				ky = 0;
			}
			scroll.style.top = ky*(window.innerHeight-window.innerHeight/bodyH*window.innerHeight)/(bodyH - window.innerHeight) + 'px';
			scrollTo(0,ky);
		}else{
			ky+=50;
			if(ky >= bodyH - window.innerHeight){
				ky = bodyH - window.innerHeight;
			}
			scroll.style.top = ky*(window.innerHeight-window.innerHeight/bodyH*window.innerHeight)/(bodyH - window.innerHeight) + 'px';
			scrollTo(0,ky);
		};
	}
	if(navigator.userAgent.indexOf("Firefox") != '-1'){
		$('#scroll').css('display','none');
		$('html,body').css('overflow-y','auto');
	}*/
	//JS当页面高度不足整个页面时底部将贴在最下面
	bodyHs = n('body')[0].offsetHeight;
	if(bodyHs < window.innerHeight){
		footer[0].style.position = 'absolute';
		footer[0].style.bottom = '0px';
		footer[0].style.left = '0px';
	}
}

/*顶级制造系列*/
var list = $('.index_quality_list');
for(var i = 0; i < list.length; i++){
	list.children().children().children().eq(i).css('top',-parseInt(list.children().children().children().eq(i).css('height'))-40 + 'px');
}
list.hover(function(){
	var zj = $(this).children().children().children();
	zj.css('top',(130-parseInt(zj.css('height')))/2 + 'px');
},function(){
	var zjs = $(this).children().children().children();
	zjs.css('top',-parseInt(zjs.css('height'))-40 + 'px');
})


/*产品设备*/
$('.index_product_list>a>span').hide();
$('.index_product_list>a').hover(function(){
	var zj = $(this).children('div');
	zj.css('opacity','1');
	$(this).children('span').stop().slideDown(300);
},function(){
	var zj = $(this).children('div');
	zj.css('opacity','0');
	$(this).children('span').stop().slideUp(300);
})