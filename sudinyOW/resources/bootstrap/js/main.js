/**
 * Created by sdyk on 16/11/24.
 */


// var _hmt = _hmt || [];
// (function() {
    // var hm = document.createElement("script");
    // hm.src = "../../../../hm.baidu.com/hm.js-44264f7fb2fb8625e5a70949a521b685"/*tpa=https://hm.baidu.com/hm.js?44264f7fb2fb8625e5a70949a521b685*/;
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(hm, s);
// })();

 
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "../../../../hm.baidu.com/hm.js-c16e71335ce5575c1aab0ce71c7415ae"/*tpa=https://hm.baidu.com/hm.js?c16e71335ce5575c1aab0ce71c7415ae*/;
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
 

//全局变量
var url = window.location.protocol + '//' + window.location.host;
//var url = "../../../index.htm"/*tpa=http://www.315pr.com/*/;
//var url = 'http://testwww.315pr.com/';
 
var admin_url = 'http://file.315pr.com/';

//var url_img = "http://test1.315pr.com:38080/resources/bootstrap/img/";
//var url_img = "../img/index.htm"/*tpa=http://www.315pr.com/resources/bootstrap/img/*/;
 var url_img = url + "/resources/bootstrap/img/";
 

// 上传附件（头像）
$(function(){
    $(document).on('change','#attachFile',function(){
        var file_name = $(this).val();
        $("input[name='copyFile']").val(file_name);
        var attachUrl = "";
        // $("#attachForm").submit();
        var option = {
            url : url+"/file/img.shtml",
            data : {
                'v' : '2.0',
                'source' : 2
            },
            type: "post",
            success : function(result){
                if(result.code == '0'){
                    attachUrl = result.data.url;
                    // alert(attachUrl);
                    $('#attachForm input[type="hidden"]').val(attachUrl);
                    $('.basic-img-img img').attr('src', admin_url + attachUrl );
                }else{
                    alert(result.message)
                }
            }
        };
        $("#attachForm").ajaxSubmit(option);
    });
});
// 上传附件（修改作品）
$(function(){
    $(document).on('change','#attachFile1',function(){
        var file_name = $(this).val();
        $("input[name='copyFile']").val(file_name);
        var attachUrl = "";
        // $("#attachForm").submit();
        var option = {
            url : url+"/file/img.shtml",
            data : {
                'v' : '2.0',
                'source' : 2
            },
            type: "post",
            success : function(result){
                if(result.code == '0'){
                    attachUrl = result.data.url;
                    // alert(attachUrl);
                    $('#attachForm1 input[type="hidden"]').val(attachUrl);
                    $('.deit_img img').attr('src', admin_url + attachUrl );
                }else{
                    alert(result.message)
                }
            }
        };
        $("#attachForm1").ajaxSubmit(option);
    });
});
// 上传附件（添加作品）
$(function(){
    $(document).on('change','#attachFile2',function(){
        var file_name = $(this).val();
        $("input[name='copyFile']").val(file_name);
        var attachUrl = "";
        // $("#attachForm").submit();
        var option = {
            url : url+"/file/img.shtml",
            data : {
                'v' : '2.0',
                'source' : 2
            },
            type: "post",
            success : function(result){
                if(result.code == '0'){
                    attachUrl = result.data.url;
                    // alert(attachUrl);
                    $('#attachForm2 input[type="hidden"]').val(attachUrl);
                }else{
                    alert(result.message)
                }
            }
        };
        $("#attachForm2").ajaxSubmit(option);
    });
});

// 上传附件（文件）
$(function(){
    $(document).on('change','#attachFile3',function(){
        var file_name = $(this).val();

        var fileName = getFileName(file_name);

        $("input[name='copyFile']").val(file_name);
        var attachUrl = "";
        // $("#attachForm").submit();
        var option = {
            url : url+"/file/img.shtml",
            data : {
                'v' : '2.0',
                'source' : 2
            },
            type: "post",
            success : function(result){
                if(result.code == '0'){
                    attachUrl = result.data.url;
                    // alert(attachUrl);
                    $('#attachForm3 input[type="hidden"]').val(attachUrl);
                    $('#attachForm3_tit').val(fileName);
                }else{
                    alert(result.message)
                }
            }
        };
        $("#attachForm3").ajaxSubmit(option);
    });
});
// 上传附件 项目（文件）
$(function(){
    $(document).on('change','#attachFile4',function(){
        var file_name = $(this).val();

        var fileName = getFileName(file_name);

        $("input[name='copyFile']").val(file_name);
        var attachUrl = "";
        // $("#attachForm").submit();
        var option = {
            url : url+"/file/img.shtml",
            data : {
                'v' : '2.0',
                'source' : 2
            },
            type: "post",
            success : function(result){
                if(result.code == '0'){
                    attachUrl = result.data.url;
                    // alert(attachUrl);
                    $('#attachForm4 input[type="hidden"]').val(attachUrl);
                    $('#attachForm4_tit').val(fileName);
                }else{
                    alert(result.message)
                }
            }
        };
        $("#attachForm4").ajaxSubmit(option);
    });
});
//上传附件 项目（文件）
// 上传附件 项目（文件）
$(function(){
	var i = 1;
    $(document).on('change','#attachFile5',function(){
	
		i = i + 1;
		console.log(i);
        var file_name = $(this).val();
        var fileName = getFileName(file_name);
        $("input[name='copyFile']").val(file_name);
        var attachUrl = "";
        var option = {
            url : url+"/file/img.shtml",
            data : {
                'v' : '2.0',
                'source' : 2
            },
            type: "post",
            success : function(result){
                var str ='';
                if(result.code == '0'){
                    attachUrl = result.data.url;
                    // alert(attachUrl);valImg
                    $('#valImg').val(attachUrl);
                    str+='<div class="deleteImg'+i+'" style="float: left;margin-top: 22px;width: 100%;">';
                    str+='<img src="'+url_img+'/supplierRegisterOk.png">';
                    str+='<div class="addName">'+file_name+'</div>';
                    str+='<img class="supplierDelete" src="'+url_img+'/supplierDelete.png" onclick="deleteImg('+i+')">';
					str+='<div class="dataUrl" style="display: none;">'+attachUrl+',</div>' 
                    str+='</div>';
                    $('.addDescribe').append(str);
                    $('#attachForm5 input[type="hidden"]').val(attachUrl);
                   // $('#attachForm5_tit').val(fileName);
				  
                }else{
                    alert(result.message) 
                }
            }
        };
        $("#attachForm5").ajaxSubmit(option);
    });
});
 
function getFileName(o){
    var pos=o.lastIndexOf("\\");
    return o.substring(pos+1);
}
/*删除上传文件*/
function deleteImg(i){
	$('.deleteImg'+i).remove();
}
/* ==========供应商自注册post ============== */

function supplierRegister(){ 
	var supplierPropertyId = $('.select').attr('data-type');
	var supplierName = $('.offerName').val();
	var company = $('.companyName').val();
	var city = $('.areaVal').val() +$('.provinceVal').val();
	var describes = $('.companyIntroduce').val();
	var supplierPerson = $('.supplierPerson').val();
	var mobile = $('.mobile').val();
	var wxNum = $('.wxNum').val();
	var other = $('.dataUrl').text();
	var resourceMerit = $('.resourceMerit').val();
	if(supplierName.length < 1 ){
	 		alert('请输入供应商名称！'); 
	 		return false; 
	} 
	if(company.length < 1 ){
	 		alert('请输入公司名称！'); 
	 		return false; 
	} 
	if(other.length < 1 ){
	 		alert('请输入添加公司资质！'); 
	 		return false; 
	} 
	$.ajax({
        type:"post",
        url: url + "/supplier/register.shtml",
        data: {
            "v":"2.0",
            "source": 2,
			"supplierPropertyId":supplierPropertyId,
			"supplierName":supplierName,
			"company":company,
			"city":city,
			"describes":describes,
			"supplierPerson":supplierPerson,
			"mobile":mobile,
			"wxNum":wxNum,
			"other":other,
			"resourceMerit":resourceMerit
        },
        success: function(data){
            // var dataset = $.parseJSON(data);
            if('0' == data.code){
				/*var skip_url = location.href;
				if(skip_url.indexOf('#') != -1){
					skip_url = location.href.split('#')[1];
				}else{
					skip_url = "index.shtml";
				}*/
				//console.log(skip_url);
               // window.location.href = '../../../index.htm'/*tpa=http://www.315pr.com/*/+ skip_url;
            	alert("注册供应商成功！");
//            	alert(data.data);
            	window.location.href = url + "/supplier/" + data.data + ".shtml";
            	
            }else{
                alert(data.message);
            }
        }
    });
}
/* ============= 登录 ------ 登录 ============== */

function login(){
    var mobile = $("#mobile").val();
    var password = $("#password").val();
    $.ajax({
        type:"post",
        url: url + "/user/login.shtml",
        data: {
            "v":"2.0",
            "source": 2,
            "mobile": mobile,
            "password": password
        },
        success: function(data){
            // var dataset = $.parseJSON(data);
            if('0' == data.code){
				var skip_url = location.href;
				if(skip_url.indexOf('#') != -1){
					skip_url = location.href.split('#')[1];
				}else{
					skip_url = "index.shtml";
				}
				console.log(skip_url);
                window.location.href = '../../../index.htm'/*tpa=http://www.315pr.com/*/+ skip_url;
            }else{
                alert(data.message);
            }
        }
    });
}

/* ============= 登录 ------ 发现验证码 ============== */
function sendCode(){
    var mobile = $("#mobile").val();
    $.ajax({
        type:"post",
        url: url + "/user/send_code.shtml",
        data: {
            "v": "2.0",
            "source": 2,
            "mobile": mobile
        },
        success: function(data){
            if('0' == data.code){
                $('button').attr('onclick','');
                settime(60);
                alert("发送成功！");
            }else{
                alert(data.message);
            }
        }
    });
}
/* ============= 登录 ------ 获取验证码倒计时 ============== */
function settime(countdown){
    if (countdown == 0) {
        $('.login-from button').html('重新获取');
        $('.login-from button').css('background','#b43d3d');
        $('button').click(function(){
            sendCode();
        });
        return false;
    }else{
        $('.login-from button').html(countdown);
        $('.login-from button').css('background','#d3d3d3');
        countdown--;
    }
    setTimeout(function() {
        settime(countdown);
    },1000)
}
/* ============= 登录 ------ 注册 ============== */
function register(){
	var isFreeman = $(':radio[name="radio"]:checked').val(); 
	if(isFreeman==null){
		alert("请选择服务类型!");
		return false;
	}
    var mobile = $("#mobile").val();
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();
    var code = $("#code").val();

    if(password1 != password2){
        alert("两次密码不一致！");
        return false;
    }
    $.ajax({
        type:"post",
        url: url + "/user/register.shtml",
        data: {
            "v":"2.0",
            "source": 2,
            "mobile": mobile,
            "vCode": code,
            "password": password1 
			 
        },
        success: function(data){
            if('0' == data.code){
				if(isFreeman =='1'){
        	 		window.location.href = url + "/user/reg_suc_a.shtml";
        	 		return false; 
        	 	};
        	 	if(isFreeman =='2'){
        	 		window.location.href = url + "/user/reg_suc_b.shtml";
        	 		return false; 
        	 	}
            }else{
                alert(data.message);
            }
        }
    });
}

/* ============= 登录——————忘记密码 ============== */
function resetPass(){
    var mobile = $('#mobile').val();
    var code = $('#code').val();
    var password1 = $('#password1').val();
    var password2 = $('#password2').val();

    if(password1 != password2){
        alert("两次密码不一致！");
        return false;
    }
    $.ajax({
        type:"post",
        url: url + "/user/restpass.shtml",
        data: {
            "v":"2.0",
            "source": 2,
            "mobile": mobile,
            "vCode": code,
            "password": password1
        },
        success: function(data){
            if('0' == data.code){
                alert("密码修改成功！");
                window.location.href = "../../../user/logv.shtml.htm#user/user_center.shtml"/*tpa=http://www.315pr.com/user/logv.shtml#user/user_center.shtml*/;
            }else{
                alert(data.message);
            }
        }
    });
}

/* ============= 基本信息—————修改 ============== */
function edit_user(){
	
	var name = $('#name').val();
	var sex = $('.basic-content.sex input[name="sex"]:checked ').val();
	var birthday = $('#birthday').val();
	var cityArea = $('#cityArea').val();
	var wxNum = $('#wxNum').val();
	var email = $('#email').val();
	var des = $('#des').val();
    var headerpic = $('#attachForm input[type="hidden"]').val();
    var workingLife = $('#ex').val();
	var channelIds =""; 
	var channels ="";
	$('input[name="channelId"]:checked').each(function(){
		channelIds = channelIds + $(this).val() +",";
		channels =  channels + $(this).next().text() + ",";
		}
	); 
	if(channelIds != null || channelIds.length > 0){
		channelIds = channelIds.substring(0, channelIds.length - 1);
		channels = channels.substring(0, channels.length - 1);
	}
	// 图片没有上传有默认图片
    if(isEmpty(headerpic)){
        headerpic = $('.basic-img-img img').attr('src').substring(21);
    }

	$.ajax({
		url : url + '/user/modify.shtml',
		type : "post",
		data : {
			'v' : '2.0',
			'source' : 2,
			'channelIds' : channelIds,
			'channels' : channels,
			'name' : name,
			'des' : des,
			'birthday' : birthday,
			'cityArea' : cityArea,
			'wxNum' : wxNum,
			'email' : email,
			'workingLife' : workingLife,
			'headerpic' : headerpic,
			'gender' : sex
		},
		success: function(data){
			if(data.code == '0'){
				location.reload() ;
			}else{
				alert(data.message);
			}
		}
	});
}

/* ============= 基本信息—————删除标签（需优化） ============== */
function del_tag(obj,id){
	$.ajax({
		url : url + '/user/del_tag.shtml',
		type : "post",
		data : {
			'v' : '2.0',
			'source' : 2,
			'id' : id
		},
		success: function(data){
			if(data.code == '0'){
				alert("删除成功！");
                $(obj).parents('span').remove();
			}else{
				alert(data.message);
			}
		}
	});
}

/* ============= 基本信息—————添加标签 （未完成） ============== */
function add_tag(){
	var serviceTagLv1Id = $('#server1 option:selected').val();
	var serviceTagLv2Id = $('#server2 option:selected').val();
	var serviceTagLv1 = $('#server1 option:selected').text();
	var serviceTagLv2 = $('#server2 option:selected').text();

    if(serviceTagLv1 == '请选择'){
        alert('请选择技能标签');
        return false;
    }
    if(serviceTagLv1 == '请选择'){
        alert('请选择技能标签');
        return;
    }
				
	$.ajax({
		url : url + '/user/add_tag.shtml',
		type : "post",
		data : {
			'v' : '2.0',
			'source' : 2,
			'serviceTagLv1Id' : serviceTagLv1Id,
			'serviceTagLv2Id' : serviceTagLv2Id,
			'serviceTagLv1' : serviceTagLv1,
			'serviceTagLv2' : serviceTagLv2
		},
		success: function(data){
			if(data.code == '0'){
				$('.basic-skill').append('<span id="'+ serviceTagLv1Id + '-' + serviceTagLv2Id +'">'+ serviceTagLv1 + '-' + serviceTagLv2 +'<a href="javascript:;" onclick="del_tag(this,'+ data.data +');">x</a></span>');
			}else{
				alert(data.message);
			}
		}
	});
}

/* ============= 基本信息—————添加经验（需优化） ============== */
function add_experience(){

	var company = $("#company").val();
	if(isEmpty(company)){
		alert("请输入公司信息！");
		return;
	}
	var position = $("#position").val();
	if(isEmpty(position)){
		alert("请输入职位信息！");
		return;
	}			
	$.ajax({
		url : url + '/user/add_experience.shtml',
		type : "post",
		data : {
			'v' : '2.0',
			'source' : 2,
			'company' : company,
			'position' : position
		},
		success: function(data){
			if(data.code == '0'){
                $('.baisc-ex-show').append('<p>'+ company + '-'+ position +'<a href="javascript:;" onclick="del_experience(this,'+ data.data +');">x</a></p>');
                $("#company").val('');
                $("#position").val('');
			}else{
				alert(data.message);
			}
		}
	});
}

/* ============= 基本信息—————删除经验 （需优化） ============== */
function del_experience(obj,id){
	$.ajax({
		url : url + '/user/del_experience.shtml',
		type : "post",
		data : {
			'v' : '2.0',
			'source' : 2,
			'id' : id
		},
		success: function(data){
			if(data.code == '0'){
				alert("删除成功！");
                $(obj).parents('p').remove();
			}else{
				alert(data.message);
			}
		}
	});
}

/* ============= 基本信息—————关闭任务（需优化） ============== */
function close_task(id){
	$.ajax({
		url : url + '/user/close_task.shtml',
		type : "post",
		data : {
			'v' : '2.0',
			'source' : 2,
			'id' : id
		},
		success: function(data){
			if(data.code == '0'){
				alert("关闭成功！");
				location.reload() ;
			}else{
				alert(data.message);
			}
		}
	});
}

/* ============= 我的 —————— 我的任务列表 ============== */
function myTask(pageNum){
    $.ajax({
        url : url + '/user/tasks.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'type' : 1
        },
        success : function(data){
        var mt = data.data.list;
            for(var i=0;i<mt.length;i++){
                $('#myTask_self').append('<li><a href="'+url+'/user/task_info-2.0-'+ mt[i].applyId +'-2.shtml"><div class="t_img"><img src="'+ mt[i].background +'" alt=""/></div><span class="tit">'+ mt[i].title +'</span><span class="del">'+ mt[i].detail +'</span><span class="bt"><span class="channel">'+ mt[i].channel +'</span><span class="price">￥<em class="red">'+ mt[i].budget +'</em></span></span><i><img src="'+url_img+getTaskStatusLabelImg(mt[i].status)+'" alt=""/></i></a></li>');
            }

            $('.user_demand .t_img').height($('.user_demand .t_img').width()/(315/250));

            $('#num_1').html('('+ data.data.totalCount +')');

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);
            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myTask(page)
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
    $.ajax({
        url : url + '/user/tasks.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'type' : 2
        },
        success : function(data){
            var mt = data.data.list;
//            var i=0;
//            for(var i=0;i<mt.length;i++){
//                mt[i].status==0;
//                i=i+1;
//            }
//            if(i!=0){
//            	alert("您有"+i+"条受邀请任务");
//            }
            for(var i=0;i<mt.length;i++){
                $('#myTask_other').append('<li><a href="task_info-2.0-'+ mt[i].applyId +'-2.shtml"><div class="t_img"><img src="'+ mt[i].background +'" alt=""/></div><span class="tit">'+ mt[i].title +'</span><span class="del">'+ mt[i].detail +'</span><span class="bt"><span class="channel">'+ mt[i].channel +'</span><span class="price">￥<em class="red">'+ mt[i].budget +'</em></span></span><i><img src="'+url_img+getTaskStatusLabelImg(mt[i].status)+'" alt=""/></i></a></li>');
            }

            $('.user_demand .t_img').height($('.user_demand .t_img').width()/(315/250));

            $('#num_2').html('('+ data.data.totalCount +')');

            if(data.data.totalCount == 0){
                $('#page-box1').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box1 .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box1 .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box1 .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myTask(page)
                }
            });
            $('#page-box1 .now').text($('#page-box1 .active').text());
        }
    });


}
/* ============= 我的 —————— 我的订单列表 ============== */
function goods(pageNum){
    $.ajax({
        url : url + '/user/tasks.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'type' : 1
        },
        success : function(data){
        var mt = data.data.list;
            for(var i=0;i<mt.length;i++){
                $('#myTask_self').append('<li><a href="'+url+'/user/task_info-2.0-'+ mt[i].applyId +'-2.shtml"><div class="t_img"><img src="'+ mt[i].background +'" alt=""/></div><span class="tit">'+ mt[i].title +'</span><span class="del">'+ mt[i].detail +'</span><span class="bt"><span class="channel">'+ mt[i].channel +'</span><span class="price">￥<em class="red">'+ mt[i].budget +'</em></span></span><i><img src="'+url_img+getTaskStatusLabelImg(mt[i].status)+'" alt=""/></i></a></li>');
            }

            $('.user_demand .t_img').height($('.user_demand .t_img').width()/(315/250));

            $('#num_1').html('('+ data.data.totalCount +')');

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);
            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myTask(page)
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
    $.ajax({
        url : url + '/user/tasks.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'type' : 2
        },
        success : function(data){
            var mt = data.data.list;
//            var i=0;
//            for(var i=0;i<mt.length;i++){
//                mt[i].status==0;
//                i=i+1;
//            }
//            if(i!=0){
//            	alert("您有"+i+"条受邀请任务");
//            }
            for(var i=0;i<mt.length;i++){
                $('#myTask_other').append('<li><a href="task_info-2.0-'+ mt[i].applyId +'-2.shtml"><div class="t_img"><img src="'+ mt[i].background +'" alt=""/></div><span class="tit">'+ mt[i].title +'</span><span class="del">'+ mt[i].detail +'</span><span class="bt"><span class="channel">'+ mt[i].channel +'</span><span class="price">￥<em class="red">'+ mt[i].budget +'</em></span></span><i><img src="'+url_img+getTaskStatusLabelImg(mt[i].status)+'" alt=""/></i></a></li>');
            }

            $('.user_demand .t_img').height($('.user_demand .t_img').width()/(315/250));

            $('#num_2').html('('+ data.data.totalCount +')');

            if(data.data.totalCount == 0){
                $('#page-box1').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box1 .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box1 .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box1 .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myTask(page)
                }
            });
            $('#page-box1 .now').text($('#page-box1 .active').text());
        }
    });


}


/* ============= 我的 —————— 我的发布需求列表 ============== */
function myDemand(pageNum){
    $.ajax({
        url : url + '/user/demands.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9
        },
        success : function(data){
            var md = data.data.list;

            for(var i=0;i<md.length;i++){
                $('.user_demand').append('<li><a href="'+url+'/user/demand_info-2.0-'+ md[i].id +'-2.shtml"><div class="d_img"><img src="'+ md[i].background +'" alt=""/></div><span class="tit">'+ md[i].title +'</span><span class="del">'+ md[i].detail +'</span><span class="bt"><span class="channel">'+ md[i].channel +'</span><span class="price">￥<em class="red">'+ md[i].budget +'</em></span></span><i><img src="'+url_img+getDemandStatusLabelImg(md[i].status)+'" alt=""/></i></a></li>');
            }

            $('.user_demand .d_img').height($('.user_demand .d_img').width()/(315/250));

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myDemand(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 我的 —————— 我的项目列表 ============== */
function myProject(pageNum){
    $.ajax({
        url : url + '/user/projects.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'type' : 1
        },
        success : function(data){
            var mt = data.data.list;

            for(var i=0;i<mt.length;i++){
                $('#myPreoject_self').append('<li><a href="project_del-2.0-'+mt[i].applyId+'-2.shtml"><div class="p_img"><img src="'+ mt[i].background +'" alt=""/></div><span class="tit">'+ mt[i].title +'</span><span class="del">'+ mt[i].detail +'</span><span class="bt"><span class="channel">'+ mt[i].channel +'</span><span class="price">￥<em class="red">'+ mt[i].budget +'</em></span></span><i><img src="'+url_img+getTaskStatusLabelImg(mt[i].status)+'" alt=""/></i></a></li>');
            }

            $('.user_demand .p_img').height($('.user_demand .p_img').width()/(315/250));

            $('#num_1').html('('+ data.data.totalCount +')');

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myProject(page)
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
    $.ajax({
        url : url + '/user/projects.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'type' : 2
        },
        success : function(data){
            var mt = data.data.list;

            for(var i=0;i<mt.length;i++){
                $('#myProject_other').append('<li><a href="project_del-2.0-'+ mt[i].applyId +'-2.shtml"><div class="p_img"><img src="'+ mt[i].background +'" alt=""/></div><span class="tit">'+ mt[i].title +'</span><span class="del">'+ mt[i].detail +'</span><span class="bt"><span class="channel">'+ mt[i].channel +'</span><span class="price">￥<em class="red">'+ mt[i].budget +'</em></span></span><i><img src="'+url_img+getTaskStatusLabelImg(mt[i].status)+'" alt=""/></i></a></li>');
            }
            $('.user_demand .p_img').height($('.user_demand .p_img').width()/(315/250));

            $('#num_2').html('('+ data.data.totalCount +')');

            if(data.data.totalCount == 0){
                $('#page-box1').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box1 .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box1 .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box1 .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myProject(page)
                }
            });
            $('#page-box1 .now').text($('#page-box1 .active').text());
        }
    });


}

/* ============= 我的 ———————— 我的作品列表 ============== */
function myWork(pageNum){

    $('.usercenter_work ul').empty();

    $.ajax({
        url : url + '/user/works.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9
        },
        success : function(data){
            var mw = data.data.list;

            if(mw.length < 0){
                $('.usercenter_work ul').append('<p>添加您的作品案例，让需求方了解您做过的成绩</p>');
            }

            for(var i=0;i<mw.length;i++){
                $('.usercenter_work ul').append('<li><div class="w_img"><img src="'+ mw[i].img +'" /></div><div class="user_work_tit">'+ mw[i].title +'</div><div class="user_work_des">'+ mw[i].des +'</div><a href="'+ mw[i].link +'">作品链接</a><div class="user_hover"><span class="user_work_edit" onclick="edit_work(this,'+ mw[i].id +')"><img src="'+url_img+'/work_edit.png"/></span><span class="user_work_del" onclick="del_work('+ mw[i].id +')"><img src="'+url_img+'/work_del.png"/></span></div></li><div class="usercenter_editwork"><div class="addwork_img"><img src="'+ mw[i].img +'" alt=""/><form id="attachForm1" method="post" action="" enctype="multipart/form-data"><input type="file" accept="image/*" class="uploadFile" name="file" id="attachFile1"/><input type="hidden" value=""/></form></div><div class="addwork_tit">作品名称</div><div class="addwork_con"><input type="text" name="work_tit" value="'+ mw[i].title +'"/></div><div class="addwork_tit">作品链接</div><div class="addwork_con"><input type="text" name="work_link" value="'+ mw[i].link +'"/></div><div class="addwork_tit">作品描述</div><div class="addwork_con"><textarea name="work_des">'+ mw[i].des +'</textarea></div><div class="addwork_btn"><button id="edit_work">保存</button><button class="cancel" onclick="cancle_work(this);">取消</button></div></div>');
            }

            $('.usercenter_work .w_img').height($('.usercenter_work .w_img').width()/(915/350));
            $('.usercenter_work .w_img').css('overflow','hidden');

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[name="pageInput"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    myWork(page)
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 我的 ———————— 我的作品修改 ============== */
function edit_work(obj,id){
    $(obj).parents('li').hide().next('.usercenter_editwork').show().find('.addwork_img').addClass('deit_img');


    $('#edit_work').click(function(){
        var work_tit = $('input[name="work_tit"]').val();
        var work_link = $('input[name="work_link"]').val();
        var work_des = $('textarea[name="work_des"]').val();
        var img = $('#attachForm1 input[type="hidden"]').val();

        if(isEmpty(img)){
            img = $('.deit_img img').attr('src').substring(21);
        }

        // 图片没有上传有默认图片

        $.ajax({
            url : url + '/user/modify_work.shtml',
            type : "post",
            data : {
                'v' : '2.0',
                'source' : 2,
                'id' : id,
                'title' : work_tit,
                'des' : work_des,
                'link' : work_link,
                'img' : img
            },
            success: function(data){

                if(data.code == '0'){
                    alert('修改成功！');
                    $(obj).parents('.usercenter_editwork').hide().prev('li').show();
                    myWork(1);
                }else{
                    alert(data.message);
                }
            }
        });
        myWork(1);
    });
}

/* ============= 我的 ———————— 我的作品删除 ============== */
function del_work(id){
    $.ajax({
        url : url + '/user/del_work.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'id' : id
        },
        success: function(data){

            if(data.code == '0'){
                alert('删除成功！');
                myWork(1);
            }else{
                alert(data.message);
            }
        }
    });
}

/* ============= 我的 ———————— 添加我的作品 ============== */
function save_work(){

    var title = $('input[name="add_tit"]').val();
    var des = $('textarea[name="add_des"]').val();
    var link = $('input[name="add_link"]').val();
    var img = $('#attachForm2 input[type="hidden"]').val();

    if(isEmpty(title)){
        alert('内容不全请补齐！');
        return false;
    }
    if(isEmpty(des)){
        alert('内容不全请补齐！');
        return false;
    }


    if(img == '0'){
        img = '';
    }

    $.ajax({
        url : url + '/user/add_work.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'title' : title,
            'des' : des,
            'link' : link,
            'img' : img
        },
        success: function(data){

            if(data.code == '0'){
                alert('添加成功！');
                location.reload();
            }else{
                alert(data.message);
            }
        }
    });
    myWork(1);
}

function cancle_work(obj){
    $(obj).parents('.usercenter_editwork').hide().prev('li').show();
}

/* ============= 我的 ———— 添加子任务 ============== */
function addTask(){

    $("#demand_type1").change(function(){
        $('#demand_type2').empty();
        if($('#demand_type1 option:selected')){
            var demand_type1 =$('#demand_type1 option:selected').attr('value');
            $.ajax({
                type: 'post',
                url: url + "/tag/service_child.shtml",
                data: {
                    'v' : '2.0',
                    'source' : 2,
                    'pid' : demand_type1
                },
                success: function(data){
                    var  dt = data.data;

                    for(var i=0;i<dt.length;i++){
                        $('#demand_type2').append('<option value="'+ dt[i].id +'">'+ dt[i].name +'</option>');
                    }
                }
            });
        }
    });

    $('.demand-block-btn div').click(function(){
        var name = $('input[name="demandTit"]').val();
        var dt1 = $('#demand_type1').val();
        var dt1_v = $('#demand_type1 option:selected').text();
        var dt2 = $('#demand_type2').val();
        var dt2_v = $('#demand_type2 option:selected').text();
        var bud = $('input[name="demandPrice"]').val();
        var time = $('#date').val();
        var demandDes = $('#demandDes').val();

        var href = document.location.href;
//        alert(href);
        var str = href.split('task-')[1];
        demandId = str.substring(0,str.lastIndexOf('.'));
        if(dt1_v == '请选择'){
            alert('请选择您的任务类型！');
            return false;
        }
console.log($(this))
        $.ajax({
            url : url + '/user/add_task.shtml',
            type : "post",
            data : {
                'v' : '2.0',
                'source' : 2,
                'demandId': demandId,
                'title' : name,
                'serviceLv1Id' : dt1,
                'serviceLv1' : dt1_v,
                'serviceLv2Id' : dt2,
                'serviceLv2' : dt2_v,
                'budget' : bud,
                'endTime' : time,
                'describe' : demandDes,
                'remark' : ''
            },
            success: function(data){

                if(data.code == '0'){
                    alert('发布成功！');
                    history.go(-1);
                    window.location.href = document.referrer;
                }else{
                    alert(data.message);
                }
            }
        });

    });
    $('.task-block-btn div').click(function(){
    	var name = $('input[name="demandTit"]').val();
    	var dt1 = $('#demand_type1').val();
    	var dt1_v = $('#demand_type1 option:selected').text();
    	var dt2 = $('#demand_type2').val();
    	var dt2_v = $('#demand_type2 option:selected').text();
    	var bud = $('input[name="demandPrice"]').val();
    	var time = $('#date').val();
    	var demandDes = $('#demandDes').val();
    	
    	var href = document.location.href;
    	var str = href.split('task-')[1];
    	id = str.substring(0,str.lastIndexOf('.'));
    	if(dt1_v == '请选择'){
    		alert('请选择您的任务类型！');
    		return false;
    	}
    	console.log($(this))
    	$.ajax({
    		url : url + '/user/add_subtask.shtml',
    		type : "post",
    		data : {
    			'v' : '2.0',
    			'source' : 2,
    			'title' : name,
    			'serviceLv1Id' : dt1,
    			'serviceLv1' : dt1_v,
    			'serviceLv2Id' : dt2,
    			'serviceLv2' : dt2_v,
    			'budget' : bud,
    			'endTime' : time,
    			'describe' : demandDes,
    			'remark' : '',
    			'parentId' : id
    		},
    		success: function(data){
    			
    			if(data.code == '0'){
    				alert('发布成功！');
    				history.go(-1);
    				window.location.href = document.referrer;
    			}else{
    				alert(data.message);
    			}
    		}
    	});
    	
    });
}

/* ============= 我的 ———— 审核子任务 ============== */
function task_check(id){
    $.ajax({
        url : url + '/user/check_apply.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'id' : id
        },
        success: function(data){

            if(data.code == '0'){
                alert('分配成功!');
            }else{
                alert(data.message);
            }
        }
    });
}

/* ============= 发布需求 ============== */
function addDemand(){

    $.divSelect(".select_style","#select_value");


    $('#submit_demand').click(function(){
        var dt1 = $('.select_value').html();
        var dt1_v = $('#select_value').val();
        var bud = $('input[name="demandPrice"]').val();
        var endDate = $('#pay_date').val();
        var demandDes = $('#demandDes').val();

        if(isEmpty(dt1_v)){
            alert('请选择您的需求类型！');
            return false;
        }
        if(isEmpty(bud)){
            alert('请输入您的预算具体金额！');
            return false;
        }
        if(isEmpty(endDate)){
            alert('请选择您的需求交付日期！');
            return false;
        }
        if(isEmpty(demandDes)){
            alert('请输入您的需求具体描述！');
            return false;
        }

        $.ajax({
            url : url + '/demand/save.shtml',
            type : "post",
            data : {
                'v' : '2.0',
                'source' : 1,
                'serviceLv1Id' : dt1_v,
                'serviceLv1' : dt1,
                'budget' : bud,
                'endDate' : endDate,
                'describe' : demandDes
            },
            success: function(data){

                if(data.code == '0'){
					console.log(data.data);
					sessionStorage.setItem('id',data.data)
                  //show_alert('提交成功');
					window.location.href = '../../../user/logv.shtml#demand/release_suc.shtml.htm'/*tpa=http://www.315pr.com/demand/release_suc.shtml*/
                    // setTimeout(function () {
                        // ;
                    // },2000);

                }else{
                    alert(data.message);
                }
            }
        });

    });
}

//发布需求跳转弹出层
function showAlertJudge(){
	window.location.href = '../../../index.shtml.htm'/*tpa=http://www.315pr.com/index.shtml*/
}
//发布需求跳转弹出层
function demandDetails(){
	window.location.href = '../../../user/demand_info-2.0-.htm'/*tpa=http://www.315pr.com/user/demand_info-2.0-*/+sessionStorage.getItem('id')+'-2.shtml'
}

function effectDemand(){
    $.divSelect("#select_style","#select_value");
    $.divSelect("#budget_style","#budget_value");
    $.divSelect("#type_style","#type_value");

    $('#submit_effect').click(function(){
        var channelId = $('#select_value').val();
        var channelName = $('.select_value').html();
        var budget = $('#budget_value').val();
        var projectType = $('#type_value').val();
        var startDate = $('#strat_date').val();
        var endDate = $('#end_date').val();
        var companyDes = $('input[name="company"]').val();
        var productDes = $('input[name="infomation"]').val();
        var demandDes = $('#demandDes').val();

        if(isEmpty(channelId)){
            alert('请选择您的行业类型！');
            return false;
        }
        if(isEmpty(budget)){
            alert('请选择您的预算！');
            return false;
        }
        if(isEmpty(startDate)){
            alert('请选择您的需求交付日期！');
            return false;
        }
        if(isEmpty(endDate)){
            alert('请选择您的需求交付日期！');
            return false;
        }

        $.ajax({
            url : url + '/demand/save_as.shtml',
            type : "post",
            data : {
                'v' : '2.0',
                'source' : 2,
                'channelId' : channelId,
                'channelName' : channelName,
                'budget' : budget,
                'projectType' : projectType,
                'startDate' : startDate,
                'endDate' : endDate,
                'companyDes' : companyDes,
                'productDes' : productDes,
                'demandDes' : demandDes
            },
            success: function(data){

                if(data.code == '0'){
                    show_alert('提交成功');
                    setTimeout(function () {
                        window.location.href = '../../../index.shtml.htm'/*tpa=http://www.315pr.com/index.shtml*/;
                    },2000);

                }else{
                    alert(data.message);
                }
            }
        });

    });
}

/* ============= 我的------邀请freeman ============== */
function invite(){
   $('.search-more').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.search-con').toggleClass('cur');
    });


    /*
	 * $('#channel span').each(function(){ if($(this).attr('data') ==
	 * $('input[name="channel"]').val()){ $('.search-tag').append('<span
	 * id="search_channel" data="'+ $(this).attr('data') +'">'+ $(this).html() + '
	 * X' +'</span>'); } }); $('#server span').each(function(){
	 * if($(this).attr('data') == $('input[name="server1_id"]').val()){
	 * $('.search-tag').append('<span id="search_server1" data="'+
	 * $(this).attr('data') +'">'+ $(this).html() + ' X' +'</span>'); } });
	 */

    $('#search_server2').click(function(){
        $(this).remove();
        match(1);
    });
    $('#search_server1').click(function(){
        $(this).remove();
        $('#search_server2').remove();
        $('.search-server').show();
        match(1);
    });
    $('#search_channel').click(function(){
        $(this).remove();
        $('.search-channel').show();
        match(1);
    });

    $('#channel span').each(function(){
		 
			var i =$(this).attr('data');
		//	var 
				console.log($(this).attr('data')==$('.delete'+i).attr('data'));
		 
				$(this).click(function(){ 
						$(this).parents('#search_channel').hide();
						var i =$(this).attr('data');
						if(!$('.delete'+i).attr('data')){
						$('.search-tag').append('<span id="search_channel" onclick="deletes('+$(this).attr('data')+')" class="delete'+$(this).attr('data')+'"  data="'+ $(this).attr('data') +'">'+ $(this).html() + ' X' +'</span>');
						}
				});
    });
    $('#server span').each(function(){
        $(this).click(function(){
            var demand_type1 = $(this).attr('data');
            $.ajax({
                type: 'post',
                url: url + "/tag/service_child.shtml",
                data: {
                    'v' : '2.0',
                    'source' : 2,
                    'pid' : demand_type1
                },
                success: function(data){
                    var  dt = data.data;

                    for(var i=0;i<dt.length;i++){
                        $('#demand_type2').append('<span data="'+ dt[i].id +'">'+ dt[i].name +'</span>');
                    }
                }
            });
            if(!$('.delete'+demand_type1).attr('data')){
            $('.search-tag').append('<span id="search_channel" onclick="deletes('+$(this).attr('data')+')" class="delete'+$(this).attr('data')+'" data="'+ $(this).attr('data') +'">'+ $(this).html() + ' X' +'</span>');
			}
        });
    });

   match(1);
}
	function deletes(i){
		 $('.delete'+i).remove();
        $('.search-channel').show();
        match(1);
	}

function match(pageNum){
    var ci = $('#search_channel').attr('data');
    var s1 = $('#search_server1').attr('data');
    var s2 = $('#search_server2').attr('data');
    var id = $('input[name="task_id"]').val();
    var s1v = $('#search_server1').text().split('X')[0];
    var s2v = $('#search_server2').text().split('X')[0];
    var civ = $('#search_channel').text().split('X')[0];
    var s = "";

    if(isEmpty(s2v)){
        s = s1v;
    }else{
        s = s1v + "- " + s2v;
    }


    console.log(s);
    var sch = $('input[name="query"]').val();

    if(!isEmpty(sch)){
        ci = '';
        s1 = '';
        s2 = '';
    }

    $('table tbody').empty();

    $.ajax({
        url : url + '/user/screen_freeman.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'channel' : ci,
            'serviceTag1' : s1,
            'serviceTag2' : s2,
            'query' : sch
        },
        success : function (data) {
            var freemanlist = data.data.freemans;

            for(var i=0;i<freemanlist.length;i++){
                if(isEmpty(s)){
                    if(!isEmpty(freemanlist[i].services)){
                        s = freemanlist[i].services.split(',')[0];
                    }else{
                        s = '未填写';
                    }

                }
                if(isEmpty(civ)){
                    if(!isEmpty(freemanlist[i].channels)){
                        civ = freemanlist[i].channels[1];
                    }else{
                        civ = '未填写';
                    }

                }
                var f = '';
                if(!isEmpty(freemanlist[i].freemanName)){
                    f = freemanlist[i].freemanName;
                }else{
                    f = '未填写';
                }
                var href = document.location.href;
//                alert(href);
                var str = href.split('match-')[1];
                id = str.substring(0,str.lastIndexOf('.'));
//                alert(id);
                $('table tbody').append('<tr><td>'+ f +'</td><td>'+ civ +'</td><td>'+ s +'</td><td><span title="邀请" onclick="invite_freeman('+"'"+freemanlist[i].freemanId+"'"+','+"'"+id+"'"+')"><img src="'+url_img+'/user_4.png" title="邀请"/></span><span alt="详情" onclick="invite_del('+"'"+freemanlist[i].freemanId+"'"+');"><img src="'+url_img+'/user_3.png" title="详情"/></span></td></tr>');
            }

            if(data.data.totalCount%9 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);


            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    match(page)
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}


function invite_freeman(fid,tid){
  $.ajax({
        url : url + '/user/invite.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'id' : tid,
            'freemanId' : fid
        },
        success : function (data) {

            if(data.code == '0'){
                alert('邀请成功！');
            }else{
                alert(data.message);
            }
        }
    });
}

function invite_del(fid){
   $('.invite-block').show();
    $('.invite_bg').show();

    $.ajax({
        url : url + '/user/freeman_del-{v}-{f}-{source}.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'f' : fid
        },
        success : function (data) {
            var f = data.data;

            var str1 = '';
            for(var i=0;i< f.channels.length;i++){
                str1 += '<span>'+ f.channels[i] +'</span>';
            }

            var str2 = '';
            for(var i=0;i< f.skills.length;i++){
                str2 += '<span>'+ f.skills[i] +'</span>';
            }

            var str3 = '';
            for(var i=0;i< f.works.length;i++){
                str3 += '<div><h4>'+ f.works[i].title +'</h4><p>'+ f.works[i].des +'</p><a href="'+ f.works[i].link +'">点击链接</a></div>';
            }

            $('.freemanDel-block-img').find('img').attr('src', f.headerpic);
            $('.freemanDel-block-name').html(f.freemanName);
            $('.freemanDel-block-channel').html(str1 +'<span>'+ f.workingLife +'</span><span>'+ f.position +'</span>');
            $('.freemanDel-block-me').find('dd').html(f.experience);
            $('.freemanDel-block-skill').html(str2);
            $('.freemanDel-block-works').html(str3);
        }
    });
}

/* ============= 申请干活 ============== */
function applyDemand(id){
    $.ajax({
        url : url + '/demand/apply.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'id' : id
        },
        success : function (data) {

            if(data.code == '0'){
                show_alert('申请成功！');
                setTimeout(function(){
                    window.location.href = window.location.href;
                },2000);
            }else{
                show_alert(data.message);
                setTimeout(function(){
                    $('#show_alert_bg').hide();
                    $('#show_alert').hide();
                },2000);
			}

        }
    });
}

/* ============= 筛选------分类 ============== */

function filter_fun(listName){
    var aLi = $('#filter-tit li');

    aLi.each(function(i){
        $(this).click(function(){
            $('.filter-block .filter-content').eq(i).addClass('active').show().siblings().removeClass('active').hide();
        });
    });
    $('.filter-content li').click(function(){
        var item_name = $(this).html();
        var item_id = $(this).attr('data');
        var item = $(this).parent().hide().attr('id');
        if(item == 'filter-content1'){
            aLi.eq(0).find('span').html(item_name).attr('data',item_id);
        }else{
            aLi.eq(1).find('span').html(item_name).attr('data',item_id);
        }
        listName();
        // freemanlist();
        // smart_Load();
    });
}

/* ============= 导航------需求列表 ============== */

function demandList(pageNum){

    filter_fun(demandlist);
    demandlist(pageNum);
    // freemanlist(pageNum);
}
function demandlist(pageNum){
    var servicetag1 = $('#filter-tit li').eq(0).find('span').attr('data');
    var status = $('#filter-tit li').eq(1).find('span').attr('data');
    if(servicetag1 == ''){
        servicetag1 = '';
    };
    if(status == ''){
        status = '';
    }

    $.ajax({
        url : url + '/demand/demands.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9,
            'status' : status,
            'serviceTag1' : servicetag1
        },
        success : function (data) {
            // var dataset = $.parseJSON(data);
            var demandlist = data.data.list;

            $('.demandlist ul').empty();

            for(var i=0;i<demandlist.length;i++){
	            
	            if(isEmpty(demandlist[i].channel)){
		            demandlist[i].channel = '保密';
	            }
	            
                $('.demandlist ul').append('<li><a href="'+url+'/demand/info-2.0-'+ demandlist[i].id +'-2.shtml"><div class="img"><img src="'+ url_img +'/demand_bg.png" alt=""/></div><div class="icon"><img src="'+ url_img +'/'+ server_icon(demandlist[i].service1Id) +'.png" alt=""/></div><div class="content"><h3>'+ demandlist[i].title +'</h3><div class="demandlist-p">￥'+ demandlist[i].budget +'</div><div class="demandlist-d"><span>'+ demandlist[i].serviceTag1 +'-'+ demandlist[i].serviceTag2 +'</span><span>'+ demandlist[i].channel +'</span></div>'+getDemandStatusList(demandlist[i].status)+'<div class="demandlist-c"><span>已申请<em><i>'+ demandlist[i].applyCount +'</i>人</em></span><span>已浏览<em><i>'+ demandlist[i].seeCount +'</i>人</em></span></div><div class="demandlist-date">完成时间：'+ demandlist[i].endTime +'</div></div></a></li>');
            }

            var aLi = $('.demandlist li');
            for(var i=0;i<aLi.length;i++){
                if(i%3 == 2){
                    aLi[i].style.marginRight = '0';
                }
            }

            if(data.data.totalCount%9 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();
                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    demandList(page);
                }
            });
        }
    });
}


/* ============= 导航------案例列表 ============== */

function caselist(){
    caseList();
}

function caseList(pageNum){

    $('.caselist ul').empty();

    $.ajax({
        url : url + '/case/cases.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 9
        },
        success : function (data) {
            var caselist = data.data.list;


            if(caselist.length>0){
                for(var i=0;i<caselist.length;i++){
                    var tags = '';
                    if(isEmpty(caselist[i].tags)){
                        tags = ''
                    }else{
                        tags = caselist[i].tags;
                    }
                    $('.caselist ul').append('<li><a href="'+url+'/case/info-2.0-'+ caselist[i].id +'-2.shtml"><div class="caselist-img"><img src="'+ caselist[i].showImage +'" alt="'+ caselist[i].title +'" /></div><div class="caselist-content"><h3>'+ caselist[i].title +'</h3><div>'+ tags +'</div></div></a></li>');
                }
            }

            $('.caselist li .caselist-img').height($('.caselist li .caselist-img').width()*240/420);
            var aLi = $('.caselist li');
            for(var i=0;i<aLi.length;i++){
                if(i%3 == 2){
                    aLi[i].style.marginRight = '0';
                }
            }

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    caseList(page);
                }
            });
        }
    });
}


/* ============= 我的 ------ 媒体列表 ============== */

function report(){
    reportList();
}
function reportList(pageNum){
    $('#report').empty();

    $.ajax({
        url : url + '/report_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' :15
        },
        success : function (data) {
            var report = data.data.list;

            for(var i=0;i<report.length;i++){
                /*
				 * var tags = ''; if(isEmpty(caselist[i].tags)){ tags = ''
				 * }else{ tags = caselist[i].tags; }
				 */
                $('#report').append('<dl><dt><img src="'+ report[i].image +'"/></dt><dd><div>'+ report[i].title +'</div><span>来自：'+ report[i].source +'</span><a href="'+ report[i].link +'" target="_blank">查看详情</a> </dd></dl>');
            }

            $('.report-block dt').height($('.report-block dt').width()*330/400);
            $('.report-block dd').height($('.report-block dt').width()*330/400);

            if(data.data.totalCount == 0){
                $('#page-box').hide();
            }

            if(data.data.totalCount%9 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    reportList(page);
                }
            });
        }
    });
}

/* ============= 导航------freeman列表 ============== */

function freemanList(pageNum){

    filter_fun(freemanlist);
    freemanlist(pageNum);

}

function freemanlist(pageNum){
    var servicetag1 = $('#filter-tit li').eq(0).find('span').attr('data');
    var status = $('#filter-tit li').eq(1).find('span').attr('data');
    if(servicetag1 == ''){
        servicetag1 = '';
    };
    if(status == ''){
        status = '';
    }

    $('.freemanlist ul').empty();

    $.ajax({
        url : url + '/freeman/freemans.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channel' : status,
            'serviceTag1' : servicetag1
        },
        success : function (data) {
            var freemanlist = data.data.freemans;

            for(var i=0;i<freemanlist.length;i++){
               if(freemanlist[i].freemanName.length< 8){
					if(!isEmpty(freemanlist[i].services && freemanlist[i].services.split(',').length > 1)){
						$('.freemanlist ul').append('<li><a href="'+url+'/freeman/freeman_del-2.0-'+ freemanlist[i].freemanId +'-2.shtml"><div class="freemanlist-img"><img src="' + freemanlist[i].headerPic +'" alt=""/></div><div class="freemanlist-content"><h3><span>'+ freemanlist[i].freemanName +'<em>'+ freemanlist[i].orderCount +'单</em></span></h3><div>服务标签：<span>'+ freemanlist[i].services.split(',')[0] +'</span></div></div></a></li>');
							
					}else if(!isEmpty(freemanlist[i].services)  && freemanlist[i].services.split(',').length == 1){
						$('.freemanlist ul').append('<li><a href="'+url+'/freeman/freeman_del-2.0-'+ freemanlist[i].freemanId +'-2.shtml"><div class="freemanlist-img"><img src="' + freemanlist[i].headerPic +'" alt=""/></div><div class="freemanlist-content"><h3><span>'+ freemanlist[i].freemanName +'<em>'+ freemanlist[i].orderCount +'单</em></span></h3><div>服务标签：<span>'+ freemanlist[i].services +'</span><span>&nbsp;</span></div></div></a></li>');
					}else{
						$('.freemanlist ul').append('<li><a href="'+url+'/freeman/freeman_del-2.0-'+ freemanlist[i].freemanId +'-2.shtml"><div class="freemanlist-img"><img src="' + freemanlist[i].headerPic +'" alt=""/></div><div class="freemanlist-content"><h3><span>'+ freemanlist[i].freemanName +'<em>'+ freemanlist[i].orderCount +'单</em></span></h3><div>服务标签：<span>完善中</span></div></div></a></li>');
					}
					//$('.freemanlist ul li:nth-of-type(4n)').css('marginRight','0');
				}else{
					
					if(!isEmpty(freemanlist[i].services && freemanlist[i].services.split(',').length > 1)){
						$('.freemanlist ul').append('<li><a href="'+url+'/freeman/freeman_del-2.0-'+ freemanlist[i].freemanId +'-2.shtml"><div class="freemanlist-img"><img src="' + freemanlist[i].headerPic +'" alt=""/></div><div class="freemanlist-content"><h3><span>'+ freemanlist[i].freemanName.substr(0,8)+'...'+'<em>'+ freemanlist[i].orderCount +'单</em></span></h3><div>服务标签：<span>'+ freemanlist[i].services.split(',')[0] +'</span></div></div></a></li>');
							
					}else if(!isEmpty(freemanlist[i].services)  && freemanlist[i].services.split(',').length == 1){
						$('.freemanlist ul').append('<li><a href="'+url+'/freeman/freeman_del-2.0-'+ freemanlist[i].freemanId +'-2.shtml"><div class="freemanlist-img"><img src="' + freemanlist[i].headerPic +'" alt=""/></div><div class="freemanlist-content"><h3><span>'+ freemanlist[i].freemanName.substr(0,8)+'...' +'<em>'+ freemanlist[i].orderCount +'单</em></span></h3><div>服务标签：<span>'+ freemanlist[i].services +'</span><span>&nbsp;</span></div></div></a></li>');
					}else{
						$('.freemanlist ul').append('<li><a href="'+url+'/freeman/freeman_del-2.0-'+ freemanlist[i].freemanId +'-2.shtml"><div class="freemanlist-img"><img src="' + freemanlist[i].headerPic +'" alt=""/></div><div class="freemanlist-content"><h3><span>'+ freemanlist[i].freemanName.substr(0,8)+'...' +'<em>'+ freemanlist[i].orderCount +'单</em></span></h3><div>服务标签：<span>完善中</span></div></div></a></li>');
					}
					
					//$('.freemanlist ul li:nth-of-type(4n)').css('marginRight','0');
					
				}
            }

            $('.freemanlist li img').height($('.freemanlist li img').width());
            var aLi = $('.freemanlist li');
            for(var i=0;i<aLi.length;i++){
                if(i%4 == 3){
                    aLi[i].style.marginRight = '0';
                }
            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);


            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    freemanList(page)
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 导航------特惠营销列表 ============== */

function packageList(pageNum){

//    filter_fun(packagelist);
    packagelist(pageNum);
    // freemanlist(pageNum);
}
function packagelist(pageNum){
    $.ajax({
        url : url + '/package/list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'pageNo' : pageNum,
            'limit' : 9,
        },
        success : function (data) {
            // var dataset = $.parseJSON(data);
            var packagelist = data.data.list;

            $('.demandlist ul').empty();

            for(var i=0;i<packagelist.length;i++){
	            
	            if(isEmpty(packagelist[i].channel)){
		            packagelist[i].channel = '保密';
	            }
 
	            $('.demandlist ul').append('<li class="addPreferentialList"><a href="'+url+'/package/'+ packagelist[i].id +'.shtml"><div class="img"><img class="img" src="'+admin_url+packagelist[i].image+'" alt=""/></div><div class="content"><div class="title">'+ packagelist[i].title +'</div><div class="content1">'+ packagelist[i].brief+'</div> <div class="seekType"><em style="color:#ff5454">'+ packagelist[i].visitCount +'</em>人咨询</div><div class="priceText" >参考价<em style="color:#ff5454;font-size:18px;">'+ packagelist[i].price +'</em></div></div></a></li>'); 
            }
            var aLi = $('.demandlist li');
            for(var i=0;i<aLi.length;i++){
                if(i%3 == 2){
                    aLi[i].style.marginRight = '0';
                }
            }

            if(data.data.totalCount%9 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/9)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/9));
                $('#page-box .num').text(parseInt(data.data.totalCount/9));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();
                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    packageList(page);
                }
            });
        }
    });
}

/* ============= 导航------媒介列表 ============== */

function smart(pageNum){
    // filter_fun(smart_Load);
    
    $('.more').unbind('click').click(function(event){
	    if($(this).hasClass('on')){
		    $(this).removeClass('on').parents('dl').css('height','28px');
	    }else{
		    $(this).addClass('on').parents('dl').css('height','auto'); 
	    }
    });
    
    $('#fans_submit').click(function(){
	    smart_Load(pageNum);
    });
    $('#price_submit').click(function(){
	    smart_Load(pageNum);
    });
    $('.search-form1 button').click(function(){
	    $('.channel dd').each(function(){
		    $(this).removeClass("active");
	    });
	    $('.range dd').each(function(){
		    $(this).removeClass("active");
	    });
	    $('.type dd').each(function(){
		    $(this).removeClass("active");
	    });
	    var fcount_s = '';
		var fcount_e = '';
		var price_s = '';
		var price_e = '';
		var fsort = '';
		var psort = '';
		
	    smart_Load(pageNum);
    });
    
    $('.style_change').unbind('click').click(function(){
	    if($(this).hasClass('on')){
		    $(this).removeClass('on');
	    }else{
		    $(this).addClass('on');
	    }
	    smart_Load(pageNum);
    });
    $('.sort_sel').unbind('click').click(function(){
	    if($(this).find('ul').hasClass('curr')){
		    $(this).find('ul').removeClass('curr');
	    }else{
		    $(this).find('ul').addClass('curr');
	    }
    });
    $('.sort_sel li').click(function(){
	    $(this).parent('ul').prev('span').html($(this).html()).attr('title',$(this).attr('title'));
	    smart_Load(pageNum);
    });
    
    $(".search_block_click dd").click(function() {
	    $(this).addClass("active").siblings().removeClass("active");
	    smart_Load(pageNum);
    });
    
    smart_Load(pageNum);
}

function smart_Load(pageNum){
	var classify = '';
	
	$('#classify dd').each(function(){
		if($(this).hasClass('active')){
		    classify = $(this).attr('data');
	    }
	});
    
    $('.smart ul').empty();
    
    switch(parseInt(classify)){
	    case 1 : 
		    microblogList(pageNum);
		    break;
		case 2 :
			wechatList(pageNum);
			break;
		case 3 :
			newsList(pageNum);
			break;
		case 4 :
			paperkList(pageNum);
			break;
		case 5 :
			networkList(pageNum);
			break;
		case 6 :
			vedioList(pageNum);
			break;
		case 7 :
			kolList(pageNum);
			break;
		case 8 :
			communityList(pageNum);
			break;
		case 9 :
			bbsList(pageNum);
			break;
		case 10 :
			cpadvertList(pageNum);
			break;
		default : 
			microblogList(pageNum);
    }

}


/* ============= 媒体：微信分类 ======== */
function wechatList(pageNum){
	
	var channelId = '';
	$('#channel dd').each(function(){
		if($(this).hasClass('active')){
		    channelId = $(this).attr('data');
	    }
	});
	
	var code = '';
	$('#range dd').each(function(){
		if($(this).hasClass('active')){
		    code = $(this).attr('data');
	    }
	});
	
	
	var acountType = '';
	$('#type dd').each(function(){
		if($(this).hasClass('active')){
		    acountType = $(this).attr('data');
	    }
	});
	
	
	var fcount_s = $('#fans_start').val();
	var fcount_e = $('#fans_end').val();
	var price_s = $('#price_start').val();
	var price_e = $('#price_end').val();
	var fsort = $('.sort_fans span').attr('title');
	var psort = $('.sort_price span').attr('title');
	var query = $('input[name="search"]').val();
	
	if(isEmpty(fsort)){
		fsort = '';
	}
	if(isEmpty(psort)){
		psort = '';
	}
	
	
	$.ajax({
        url : url + '/smart/wechat_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;
            
            if($('.style_change').hasClass('on')){
	            
	            for(var i=0;i<wx.length;i++){
		            
		            var fans = Math.round(wx[i].fansCount/10000).toFixed(2);
		            var read = Math.round(wx[i].readCount/10000).toFixed(2);
                
	                $('.smart ul.wx').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_id">ID.'+ wx[i].account +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ fans +'万</span><span class="grid_read"><img src="'+ url_img +'read.png"/>'+ read +'万</span></div></li>');
	                $('.smart ul.wx li:nth-of-type(4n)').css('marginRight','0');
	            }
	            
            }else{
	            $('.smart ul.wx').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>ID号</span><span>行业</span><span>地区</span><span>粉丝数</span><span>阅读量</span></li>');
	            for(var i=0;i<wx.length;i++){
	                
	                $('.smart ul.wx').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].account +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].fansCount +'</span><span>'+ wx[i].readCount +'</span></li>');
	                
	            }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：微博分类 ======== */
function microblogList(pageNum){
	
	var channelId = '';
	$('#channel dd').each(function(){
		if($(this).hasClass('active')){
		    channelId = $(this).attr('data');
	    }
	});
	
	var code = '';
	$('#range dd').each(function(){
		if($(this).hasClass('active')){
		    code = $(this).attr('data');
	    }
	});
	
	
	var acountType = '';
	$('#type dd').each(function(){
		if($(this).hasClass('active')){
		    acountType = $(this).attr('data');
	    }
	});
	
	
	var fcount_s = $('#fans_start').val();
	var fcount_e = $('#fans_end').val();
	var price_s = $('#price_start').val();
	var price_e = $('#price_end').val();
	var fsort = $('.sort_fans span').attr('title');
	var psort = $('.sort_price span').attr('title');
	var query = $('input[name="search"]').val();
	
	if(isEmpty(fsort)){
		fsort = '';
	}
	if(isEmpty(psort)){
		psort = '';
	}
	
	
	$.ajax({
        url : url + '/smart/microblog_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;
            
            if($('.style_change').hasClass('on')){
	            
	            for(var i=0;i<wx.length;i++){
		            
		            var fans = Math.round(wx[i].fansCount/10000).toFixed(2);
                
	                $('.smart ul.wb').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ fans +'万</span><span class="grid_read"><img src="'+ url_img +'ralay.png"/>'+ wx[i].praiseCount +'</span></div></li>');
	                $('.smart ul.wb li:nth-of-type(4n)').css('marginRight','0');
	            }
	            
            }else{
	            $('.smart ul.wb').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>粉丝数</span><span>转发量</span></li>');
	            for(var i=0;i<wx.length;i++){
	                
	                $('.smart ul.wb').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].fansCount +'</span><span>'+ wx[i].praiseCount +'</span></li>');
	                
	            }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：新闻客户端分类 ======== */
function newsList(pageNum){
	
	var channelId = '';
	$('#channel dd').each(function(){
		if($(this).hasClass('active')){
		    channelId = $(this).attr('data');
	    }
	});
	
	var code = '';
	$('#range dd').each(function(){
		if($(this).hasClass('active')){
		    code = $(this).attr('data');
	    }
	});
	
	
	var acountType = '';
	$('#type dd').each(function(){
		if($(this).hasClass('active')){
		    acountType = $(this).attr('data');
	    }
	});
	
	
	var fcount_s = $('#fans_start').val();
	var fcount_e = $('#fans_end').val();
	var price_s = $('#price_start').val();
	var price_e = $('#price_end').val();
	var fsort = $('.sort_fans span').attr('title');
	var psort = $('.sort_price span').attr('title');
	var query = $('input[name="search"]').val();
	
	if(isEmpty(fsort)){
		fsort = '';
	}
	if(isEmpty(psort)){
		psort = '';
	}
	
	
	$.ajax({
        url : url + '/smart/news_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;
            
            if($('.style_change').hasClass('on')){
	            
	            for(var i=0;i<wx.length;i++){
		            
		            var fans = Math.round(wx[i].fansCount/10000).toFixed(2);
                
	                $('.smart ul.news').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_id">'+ wx[i].platformType +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ fans +'万</span><span class="grid_read">类型：'+ wx[i].type +'</span></div></li>');
	                $('.smart ul.news li:nth-of-type(4n)').css('marginRight','0');
	            }
	            
            }else{
	            $('.smart ul.news').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>发布平台</span><span>粉丝数</span><span>账号类型</span></li>');
	            for(var i=0;i<wx.length;i++){
	                
	                $('.smart ul.news').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].platformType +'</span><span>'+ wx[i].fansCount +'</span><span>'+ wx[i].type +'</span></li>');
	                
	            }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：纸质分类 ======== */
function paperkList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/paper_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){

                    var fans = Math.round(wx[i].fansCount/10000).toFixed(2);

                    $('.smart ul.paperk').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans">'+ wx[i].audiences +'</span><span class="grid_read">'+ wx[i].type +'</span></div></li>');
                    $('.smart ul.paperk li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.paperk').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>受众群体</span><span>账号类型</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.paperk').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].audiences +'</span><span>'+ wx[i].type +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：网络分类 ======== */
function networkList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/network_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){

                    var fans = Math.round(wx[i].fansCount/10000).toFixed(2);

                    $('.smart ul.network').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans">'+ wx[i].publishChannel +'</span><span class="grid_read">'+ wx[i].type +'</span></div></li>');
                    $('.smart ul.network li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.network').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>发布频道</span><span>媒体类型</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.network').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].publishChannel +'</span><span>'+ wx[i].type +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：视频分类 ======== */
function vedioList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/vedio_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){

                    var fans = Math.round(wx[i].fansCount/10000).toFixed(2);

                    $('.smart ul.video').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_id">'+ wx[i].platformType +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ fans +'</span><span class="grid_read"><img src="'+ url_img +'play.png"/>'+ wx[i].readCount +'</span></div></li>');
                    $('.smart ul.video li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.video').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>所属平台</span><span>粉丝量</span><span>平均播放量</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.video').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].platformType +'</span><span>'+ wx[i].fansCount +'</span><span>'+ wx[i].readCount +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：KOL朋友圈分类 ======== */
function kolList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/kol_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){
	                
	                if(isEmpty(wx[i].praiseCount)){
		                wx[i].praiseCount = 0;
	                }

                    $('.smart ul.kol').append('<li class="grid"><span class="grid_img"><img src="'+ url_img +'wx1.png" alt="" /></span><span class="grid_name">'+ wx[i].kolName +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_price">'+ wx[i].price +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ wx[i].fansCount +'</span><span class="grid_read"><img src="'+ url_img +'ralay.png"/>'+ wx[i].praiseCount +'</span></div></li>');
                    $('.smart ul.kol li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.kol').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>价格</span><span>粉丝量</span><span>转发量</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.kol').append('<li><span class="smart_img"><img src="'+ url_img +'wx1.png" alt="" /></span><span>'+ wx[i].kolName +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].price +'</span><span>'+ wx[i].fansCount +'</span><span>'+ wx[i].praiseCount +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：KOL朋友圈分类 ======== */
function communityList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/community_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){

                    $('.smart ul.community').append('<li class="grid"><span class="grid_img"><img src="'+ url_img +'community.png" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].type +'</span><span class="grid_intro">'+ wx[i].describes +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ wx[i].popleCount +'</span></div></li>');
                    $('.smart ul.community li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.community').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>地区</span><span>简介</span><span>人数量</span><span>类型</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.community').append('<li><span class="smart_img"><img src="'+ url_img +'community.png" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].area +'</span><span class="list_intro">'+ wx[i].describes +'</span><span>'+ wx[i].popleCount +'</span><span>'+ wx[i].type +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：论坛贴吧分类 ======== */
function bbsList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/bbs_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){

                    $('.smart ul.bbs').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].channel +'</span><span class="grid_area">'+ wx[i].area +'</span><div><span class="grid_fans"><img src="'+ url_img +'fans.png"/>'+ wx[i].fansCount +'</span><span class="grid_read">'+ wx[i].platformType +'</span></div></li>');
                    $('.smart ul.bbs li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.bbs').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>行业</span><span>地区</span><span>粉丝量</span><span>发布平台</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.bbs').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].channel +'</span><span>'+ wx[i].area +'</span><span>'+ wx[i].fansCount +'</span><span>'+ wx[i].platformType +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 媒体：论坛贴吧分类 ======== */
function cpadvertList(pageNum){

    var channelId = '';
    $('#channel dd').each(function(){
        if($(this).hasClass('active')){
            channelId = $(this).attr('data');
        }
    });

    var code = '';
    $('#range dd').each(function(){
        if($(this).hasClass('active')){
            code = $(this).attr('data');
        }
    });


    var acountType = '';
    $('#type dd').each(function(){
        if($(this).hasClass('active')){
            acountType = $(this).attr('data');
        }
    });


    var fcount_s = $('#fans_start').val();
    var fcount_e = $('#fans_end').val();
    var price_s = $('#price_start').val();
    var price_e = $('#price_end').val();
    var fsort = $('.sort_fans span').attr('title');
    var psort = $('.sort_price span').attr('title');
    var query = $('input[name="search"]').val();

    if(isEmpty(fsort)){
        fsort = '';
    }
    if(isEmpty(psort)){
        psort = '';
    }


    $.ajax({
        url : url + '/smart/cp_advert_list.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'page' : pageNum,
            'limit' : 12,
            'channelId' : channelId,
            'code' : code,
            'acountType' : acountType,
            'fcount_s' : fcount_s,
            'fcount_e' : fcount_e,
            'price_s' : price_s,
            'price_e' : price_e,
            'fsort' : fsort,
            'psort' : psort,
            'query' : query
        },
        success : function (data) {
            var wx = data.data.rows;

            if($('.style_change').hasClass('on')){

                for(var i=0;i<wx.length;i++){

                    var fans = Math.round(wx[i].fansCount/10000).toFixed(2);
                    var read = Math.round(wx[i].readCount/10000).toFixed(2);

                    $('.smart ul.cp').append('<li class="grid"><span class="grid_img"><img src="'+ wx[i].logo +'" alt="" /></span><span class="grid_name">'+ wx[i].name +'</span><span class="grid_channel">'+ wx[i].platformType +'</span><span class="grid_id">'+ wx[i].putSeat +'</span><div style="text-align: center;">'+ wx[i].advertForm +'</div></li>');
                    $('.smart ul.cp li:nth-of-type(4n)').css('marginRight','0');
                }

            }else{
                $('.smart ul.cp').append('<li class="smart_tit"><span>LOGO</span><span>名称</span><span>投放位置</span><span>广告形式</span><span>发布类型</span></li>');
                for(var i=0;i<wx.length;i++){

                    $('.smart ul.cp').append('<li><span class="smart_img"><img src="'+ wx[i].logo +'" alt="" /></span><span>'+ wx[i].name +'</span><span>'+ wx[i].putSeat +'</span><span>'+ wx[i].advertForm +'</span><span>'+ wx[i].platformType +'</span></li>');

                }

            }

            if(data.data.totalCount%12 >0){
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12)+1);
                $('#page-box .num').text(parseInt(data.data.totalCount/12)+1);
            }else{
                $('input[type="hidden"]').val(parseInt(data.data.totalCount/12));
                $('#page-box .num').text(parseInt(data.data.totalCount/12));
            }

            $('#page-box .total').text(data.data.totalCount);

            $('.page').pagination({
                coping:true,
                count:2,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                current: pageNum,
                callback:function(options){
                    var page = options.getCurrent();

                    $('.now').text(page);
                    // 这里写ajax请求。传递到后端的参数里一定要有当前页的页码哟。
                    smart(page);
                }
            });
            $('#page-box .now').text($('#page-box .active').text());
        }
    });
}

/* ============= 需求列表状态标签 ======== */
function getDemandStatusList(s){
    var name = "";
    // 招募中
    if(s == 0){
        name = '<div class="demandlist-t">招募中</div>';
	
    // 执行中
    }else if(s == 1){
        name = '<div class="demandlist-t" style="background:none;border:solid 1px #ccc;color:#000;">执行中</div>';
    // 已完成
    }else if(s == 2){
        name = '<div class="demandlist-t" style="background:none;border:solid 1px #ccc;color:#000;">已完成</div>';
    // 已评价
    }else{
        name = '<div class="demandlist-t" style="background:none;border:solid 1px #ccc;color:#000;">已评价</div>';
    }
    return name;
}

/* ============= 我的发布需求状态标签 ======== */

function getDemandStatusLabelImg(s){
	var name = "";
	// 0审核中
	if(s == 0){
		name = "s_1_shz.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_1_shz.png*/;
	// 1审核失败
	}else if(s == 1){
		name = "s_3_shsb.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_3_shsb.png*/;
     // 2匹配中
	}else if(s == 2){
		name = "s_5_zmz.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_5_zmz.png*/;
	// 3、执行中
	}else if(s == 3){
		name = "s_6_zxz.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_6_zxz.png*/;
	// 4、已完成
	}else if(s == 4){
		name = "s_7_ywc.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_7_ywc.png*/;
	// 5、已评价
	}else if(s == 5){
		name = "s_9_ypj.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_9_ypj.png*/;
	// 6、已关闭
	}else{
		name = "s_8_ygb.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_8_ygb.png*/;
	}
	return name;
	
}

// /*============= 根据状态获取任务标签 ========*/
// function fetProjectStatueImg(s){
// var name = '';
// if(s == 0){
// name = 's_1-_wsq.png'/*tpa=http://www.315pr.com/resources/bootstrap/js/s_1-_wsq.png*/;
// }else if(s == 1){
// name = 's_1_shz.png'/*tpa=http://www.315pr.com/resources/bootstrap/js/s_1_shz.png*/;
// }else if(s == 2){
// name = 's_'
// }
// }

/* ============= 根据状态获取任务标签 ======== */

function getTaskStatusLabelImg(s){
	var name = "";
	// 未申请
	if(s == "0"){
        name = "s_10_wsq.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_10_wsq.png*/;
	// 审核中
	}else if(s == "1"){
        name = "s_1_shz.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_1_shz.png*/;
     // 审核成功
    }else if(s == "2"){
		name = "s_2_shcg.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_2_shcg.png*/;
	// 审核失败
	}else if(s == "3"){
		name = "s_3_shsb.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_3_shsb.png*/;
	// 抢活失败
	}else{
		name = "s_4_qhsb.png"/*tpa=http://www.315pr.com/resources/bootstrap/js/s_4_qhsb.png*/;
	}
	return name;

}

function server_icon(s){
	var name = "";
	// 文案撰写
	if(s == "1"){
        name = "server_icon1";
	// 发稿
	}else if(s == "9"){
        name = "server_icon9";
     // 咨询或培训
    }else if(s == "10"){
		name = "server_icon10";
	// 策划
	}else if(s == "4"){
		name = "server_icon4";
	// 设计
	}else if(s == "5"){
		name = "server_icon5";
	// 视频
	}else if(s == "6"){
		name = "server_icon6";
	// 会议/活动
	}else if(s == "7"){
		name = "server_icon7";
	// 微信
	}else if(s == "8"){
		name = "server_icon8";
	// 危机公关
	}else{
		name = "sercer_icon49";
	}
	return name;

}
/* ============= 是否为空 ============== */
function isEmpty(strVal){
    if(strVal == ''|| strVal == undefined || strVal == 'undefind'|| strVal == null || strVal == 'null' ){
        return true;
    }else{
        return false;
    }
}


/* ============= 上传文件upload_file ============== */
function upload_file(id){
    var tit = $('#attachForm3_tit').val();
    var fileUrl = $('#attachForm3 input[type="hidden"]').val();
    //alert(fileUrl);
    if(isEmpty(tit)){
        alert('请完善内容！');
        return false;
    }

    $.ajax({
        url : url + '/demand/upload_plan.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'id' : id,
            'title' : tit,
            'fileUrl' : fileUrl
        },
        success : function (data) {
            if(data.code == '0'){
                alert("上传成功！");
                location.reload();
            }else{
                alert(data.message);
            }
        }
    });
}
function upload_file_all(id){
    var tit = $('#attachForm4_tit').val();
    var fileUrl = $('#attachForm4 input[type="hidden"]').val();

    if(isEmpty(tit)){
        alert('请完善内容！');
        return false;
    }

    $.ajax({
        url : url + '/demand/upload_plan.shtml',
        type : "post",
        data : {
            'v' : '2.0',
            'source' : 2,
            'title' : tit,
            'fileUrl' : fileUrl,
            'id' : id
        },
        success : function (data) {
            if(data.code == '0'){
                alert("上传成功！");
                location.reload();
            }else{
                alert(data.message);
            }
        }
    });
}
/* ============= 弹出框alert ============== */
function show_alert(str){
    if(!document.getElementById('show_alert_bg')){
        // 不存在，则添加
        $('<div id="show_alert_bg" onclick="returnGo();" style="padding-top:10%;z-index:1000;"><div id="show_alert"><div>'+ str +'</div>我们会尽快与您取得联系，请保持手机畅通<div class="showAlertJudge" onclick="">确定</div></div></div>').appendTo('body');
    }else{
        $('#show_alert_bg').show();
        $('#show_alert').show();
    }
}

/* ============= applyFreeman ============== */
function applyFreeman(){
    $.ajax({
        url : url + '/freeman/apply.shtml',
        type : "post",
        data : 'v=2.0&source=2',
        success : function (data) {
            if(data.code == '0'){
                document.location.href = '../../../user/logv.shtml#user/user_center.shtml.htm'/*tpa=http://www.315pr.com/user/user_center.shtml*/;
            }else{
                alert(data.message);
            }
        }
    });
}

/* ============= applyFreeman ============== */
function show_tag(){
    if(!document.getElementById('show_alert_bg')){
        // 不存在，则添加
    	$('<div id="show_alert_bg" style="padding-top:10%;z-index:1000;"><div id="show_alert">请您先前往注册，成功注册后我们会尽快为您开通工作台<div><a href="javascript:returnGo();">返回</a><a href="'+url+'/user/reg.shtml">前往注册</a></div></div></div>').appendTo('body');
    }else{
        $('#show_alert_bg').show();
        $('#show_alert').show();
    }
}

function returnGo(){
    $('#show_alert_bg').hide();
    $('#show_alert').hide();
}

