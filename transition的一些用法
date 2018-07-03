<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>transition</title>
	<style type="text/css">
	*{
		margin:0;
		padding: 0;
	}
		div{
			width: 200px;
			margin: 100px auto;
			text-align: center;
		}
		h1{
            font-size: 30px;
            width: 120px;
            margin: 30px auto;
		}
		p{
			width: 0px;
            height: 8px;
            margin: 0 auto;
		}
		button{
           width: 120px;
           font-size: 18px;
           height: 40px;
           border:1px lightgray solid;
           background: transparent;
           border-radius: 10px;margin: 30px auto;
           outline: none;
		}
	</style>
</head>
<body>
	<div class="content">
		<h1>前端学院</h1>
		<p></p>
		<button><b>切换样式</b></button>
	</div>

	<script type="text/javascript">
		//获取元素
		var btn=document.getElementsByTagName('button')[0];
		var h1=document.getElementsByTagName('h1')[0];
		var p=document.getElementsByTagName('p')[0];
        
        //点击按钮触发transition
		btn.onclick=function () {
			h1.style.color='red';
			p.style.background="red";
			p.style.width="120px";
			btn.style.background="pink";
			h1.style.transition='color 1s';
			p.style.transition='all 1s';
			btn.style.transition='all 1s';

			//1s后自动回复原貌
			var stimer=setTimeout(function (){	
				h1.style.color='black';
				p.style.background="white";
				p.style.width="0px";
			    btn.style.background="transparent";
			    btn.style.transition='all 1s';
				h1.style.transition='color 1s';
				p.style.transition='all 1s';
			},1000)
		}
	</script>
</body>
</html>
