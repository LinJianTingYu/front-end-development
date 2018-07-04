
        //获取dom节点
    	var ele={
    		userName:document.getElementsByClassName("userName")[0],
    		password:document.getElementsByClassName("password")[0],
    		isPassword:document.getElementsByClassName("isPassword")[0],
    		userTrueName:document.getElementsByClassName("userTrueName")[0],
    		sex:document.getElementsByClassName("sex")[0],
    		IdCard:document.getElementsByClassName("IdCard")[0],
    		email:document.getElementsByClassName("email")[0],
    		telphone:document.getElementsByClassName("telphone")[0],
    		subBtn:document.getElementsByClassName("subBtn")[0],
    		ul:document.getElementsByTagName("ul")[0],
    		rightreg:document.getElementsByClassName("right")
    	}
        //创建正则表达式
        var patusername=/^[a-z][a-z0-9_]{5,19}$/i;//用户名
        var patpassword=/^\S{6,18}$/;//密码
        var patuserTrueName=/^[\u4e00-\u9fa5]{2,4}$/;//真实姓名
        var patIdCard=/^\d{15}$|^\d{17}[0-9x]$/i;//身份证号码
        var patemail=/^[\d\w][\w_\d]*@[a-z]{2,4}(\.com)(\.cn)*$/i;//邮箱
        var pattelphone=/^1[3458][0-9]{9}$/i;//电话号码
        
        //验证的规则

        //失去焦点后开始验证
        ele.userName.addEventListener("blur",function(){
            isname();
        });
        ele.isPassword.addEventListener("blur",function(){
            isispassword();
        });
        ele.userTrueName.addEventListener("blur",function(){
            isTruename();
        });
        ele.password.addEventListener("blur",function(){
            isPassword();
        });
        ele.IdCard.addEventListener("blur",function(){
            isidcard();
        });
        ele.email.addEventListener("blur",function(){
            isemail();
        });
        ele.telphone.addEventListener("blur",function(){
            istelphone();
        });

        //验证规则
        function isname(){
        	if(patusername.test(ele.userName.value)){
            	ele.userName.nextElementSibling.innerText="ok";
            }else{
              ele.userName.nextElementSibling.innerText="6-20位字母、数字或“_”,字母开头";
            }
        }
        function isPassword(){
        	if(patpassword.test(ele.password.value)){
            	ele.password.nextElementSibling.innerText="ok";
            }else{
                ele.password.nextElementSibling.innerText="6-18位，包括数字字母或符号，中间不能有空格";
            }
        }

        //判断两次输入的密码是否一致
        function isispassword(){
        	if(ele.password.value==ele.isPassword.value&&ele.isPassword.value!=""){
            	ele.isPassword.nextElementSibling.innerText="ok";
            }else{
               ele.isPassword.nextElementSibling.innerText="两次输入密码不一致";
            }
        }
        function isTruename(){
        	if(patuserTrueName.test(ele.userTrueName.value)){
            	ele.userTrueName.nextElementSibling.innerText="ok";
            }else{
               ele.userTrueName.nextElementSibling.innerText="真实姓名，两位到四位的中文汉字";
            }
        }
        function isidcard(){
        	if(patIdCard.test(ele.IdCard.value)){
            	ele.IdCard.nextElementSibling.innerText="ok";
            }else{
               ele.IdCard.nextElementSibling.innerText="15位或者18位的数字";
            }
        }

        function isemail(){
        	if(patemail.test(ele.email.value)){
            	ele.email.nextElementSibling.innerText="ok";
            }else{
               ele.email.nextElementSibling.innerText="lulu_s@open.com、lu_lu_z@qq.com.cn";
            }
        }
        function istelphone(){
        	if(pattelphone.test(ele.telphone.value)){
            	ele.telphone.nextElementSibling.innerText="ok";
            }else{
               ele.telphone.nextElementSibling.innerText="输入错误";
            }
        }

        //点击提交时,判断每一项都是否正确，全输入正确时，则弹出“验证成功”
        ele.subBtn.addEventListener("click",function(){
        	var allright=true;
        	isispassword();
        	isPassword();
        	isemail();
        	isTruename();
        	isidcard();
        	isname();
        	istelphone();
        	for (var i = ele.rightreg.length - 1; i >= 0; i--) {
        		if(ele.rightreg[i].innerText!="ok"){
                    allright=false;
        		}
        	}
        	allright ? alert("验证成功") : alert("验证失败");
        })