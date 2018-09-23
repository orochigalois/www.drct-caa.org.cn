// JavaScript Document
$(function(){
		
	var intT=300;//定义下面动画的时间
	
	//以下是控制右边宽度等于window-左边的
	var Ww=$(window).width();//获取屏幕宽度
	$('a').prepend()
	if(Ww<=1200)//判断如果屏幕宽度小于1200的时候以document的宽度为准，因为设置的是最小宽度1200
	{
		Ww=$(document).width();
		}
	$('.mright').width(Ww-206);//右边的宽度等于判断后的Ww-左边的宽度
	$(window).resize(function(){//这一段是当放大缩小或者点击最大化最小化还原按钮时控制页面显示正常，重新计算宽度
	
		var Ww=$(window).width();
		if(Ww<=1200)
		{
			Ww=$(document).width();
			}
		$('.mright').width(Ww-206);
		})
	
	
	//以上是控制右边宽度等于window-左边
	
	
	//这里是点击展开
	$('.ul>li>a').click(function(){
		$(this).siblings('.ul1').slideToggle();//这里控制当前菜单关闭展开
		$(this).parent('li').siblings('li').find('.ul1').slideUp();//这里控制其它菜单关闭
		$(this).toggleClass('xz').parent().siblings('li').children('a').removeClass('xz');//这里控制的是箭头的变化
		})
		
	//这里是蓝条的动画效果。
	$('.ul1').each(function(){//遍历每个.ul1
		var intJ=$(this).children('.xz').index();//声明一个变量
		if($(this).children('li').hasClass('xz')){
			$(this).show().parent('li').children('a').addClass('xz');
			}
		$(this).find('.lt').animate({'top':2+intJ*40},intT);
		$(this).children('li').hover(function(){
			var intI=$(this).index();
			$(this).parent().find('.lt').stop().animate({'top':2+intI*40},intT);
			},function(){
				$(this).parent().find('.lt').stop().animate({'top':2+intJ*40},intT);
			})
		})
	
	$('.tab tr:odd td').css('background','#fff');
		//下面这段是没用的代码，获取时间的。
		/*	setInterval(function(){
				var myDate = new Date();
				var a=myDate.getFullYear();
				var b=myDate.getMonth();
				var c=myDate.getDate();
				var d=myDate.getDay();
				switch(d){
					case 1:
					d='一';
					break;
					case 2:
					d='二';
					break;
					case 3:
					d='三';
					break;
					case 4:
					d='四';
					break;
					case 5:
					d='五';
					break;
					case 6:
					d='六';
					break;
					case 7:
					d='日';
					break;
					}
				var e=myDate.toLocaleTimeString(); 
				var e1=e.substring(0,2)
				var e2=parseInt(e.substring(2,4))
				var e3=parseInt(e.substring(4,6))
				var e4=e.substring(6,e.length)
				if(e4.substring(0,1)==':'){
					e4=e4.substring(1,e4.length)
					}
				if(e1=='下午'){
					e2=e2+12;
					}
				$('.date').text(a+'年'+b+'月'+c+'日'+e2+':'+e3+':'+e4+'星期'+d);
				},500)*/
	$('.allcheck').click(function(){//这里实现的是全选和全部取消效果
	
		if($(this).attr('checked')==true){
			$('.allcheck').attr('checked',true);
			$('.table1 :checkbox').attr('checked',true);
			}
		else{
			$('.allcheck').attr('checked',false);
			$('.table1 :checkbox').attr('checked',false);
			}
		})
	//这里是实现仿下拉框的效果
	$(".fxl1").hover(function(){},function(){
								 $(this).children(".fxlk").stop(true,true).hide();
								 })
	$(".fxlk a").click(function(){
				$(this).parent(".fxlk").stop(true,true).hide();
				$(this).parent(".fxlk").siblings(".wbjs").text($(this).text());
				$(this).parent(".fxlk").siblings("input").val($(this).attr('title'));
				
				})
	$(".wbjs").click(function(){
				$(this).siblings(".fxlk").stop(true,true).show();
			  })

	$('.xxk span').eq(0).children('a').addClass('xz');//让第一个选项卡选中
	$('.hdnr:gt(0)').hide();							//让索引大于0的div隐藏。
	$('.xxk span').click(function(){//选项卡切换特效
		var _index=$(this).index();
		$(this).children('a').addClass('xz');
		$(this).siblings().children('a').removeClass('xz');
		$('.hdnr').eq(_index).show().siblings().hide();
	})
}) 