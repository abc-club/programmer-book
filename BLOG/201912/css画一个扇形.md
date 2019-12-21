
## 目标

用纯css画出如下图形

![](https://img-blog.csdn.net/20180426100411245?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdW5nX0VtaWx5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 方法一： 利用border

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
       #warning {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            overflow: hidden;
            border-radius: 50%;
            background: rebeccapurple;
            clip:rect(0,200px,200px,0);
        }
        #warning .bg {
            position: absolute;
            width: 0;
            height: 0;
            top:-73.2px;
            left: 0px;
            border-top: 173.2px solid  rgb(246, 226, 54);
            border-bottom: 173.2px solid  black;
            border-left: 100px solid  transparent;
            border-right: 100px solid  transparent;
            border-radius: 100%;
        }
        #warning .bg:nth-child(1) {
            transform: rotate(0deg);
        }
        #warning .bg:nth-child(2) {
            transform: rotate(120deg);
        }
        #warning .bg:nth-child(3) {
            transform: rotate(240deg);
        }

    </style>
</head>

<body>
    <div id="warning">
        <div class="bg"></div>
        <div class="bg"></div>
        <div class="bg"></div>
    </div>
    <script>
        /*
            同样的方法：在黑色的底色上生成3个扇形，然后不断旋转而得
            扇形得来：
                border构造相间的三角形，然后使用overflow-hidden和border-radius剪裁成圆
        */
    </script>
</body>

</html>

```


## 方法二：利用矩形与圆相切

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        :root{
            --color1:black;
            --color2:rgb(248, 228, 47);
            --radius:100px;
        }
        .sector {
            width: calc(var(--radius)*2);
            height: calc(var(--radius)*2);
            position: absolute;
            clip: rect(0 200px 200px 100px);/*上右下左*/
            overflow: hidden;
        }
        .sector::after {
            content: '';
            width: 100%; 
            height: 100%;
            background: var(--color2);
            position: absolute;
            border-radius: 50%;
            clip: rect(0 100px 200px 0); 
            background: var(--color2);
            transform: rotate(60deg);
        }
        .sector:nth-of-type(1) {
            transform: rotate(-30deg);
        }
        .sector:nth-of-type(2) {
            transform: rotate(90deg);
        }
        .sector:nth-of-type(3) {
            transform: rotate(210deg);
        } 
        .warning{
            width: calc(var(--radius)*2);
            height: calc(var(--radius)*2);
            background: var(--color1);
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    </style>
</head>
<body>
    <div class="warning">
        <div class="sector"></div>
        <div class="sector"></div>
        <div class="sector"></div> 
    </div>
</body>
<script>
    /* 思路：
        6个扇形通过旋转拼接而成，而扇形可以通过 一个标签+伪类的方式形成
        张鑫旭博文灵感：http://www.zhangxinxu.com/wordpress/2017/11/pure-css-colorful-circle/
        以黑色为底色，生成黄色的3个扇形标签然后不断旋转而得
    */
</script>
</html>
```

## 方法三：利用渐变色
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .warning {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background:
                linear-gradient(60deg,transparent 50%,black 50%),
                linear-gradient(120deg,transparent 50%,yellow 50%),
                linear-gradient(180deg,transparent 50%,black 50%);
            
        }
        .warning::before{
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            background:
                linear-gradient(60deg,transparent 50%,yellow 50%),
                linear-gradient(120deg,transparent 50%,black 50%),
                linear-gradient(180deg,transparent 50%,yellow 50%);
            transform: rotate(180deg);
            clip: rect(100px 200px 200px 0);
            overflow: hidden;
        } 
    </style>
</head>

<body>
    <div class="warning"></div>
    <script>
        /*
            三种解法，分别从构建扇形的不同解法中入手的
                1：矩形+半圆相切得扇形得方式
                2: 渐变
                3：border
        */
        // 解法1 ：矩形+半圆相切得扇形得方式
        
    
    
    </script>
</body>

</html>
```

## 方法四： 利用skew

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>扇形</title>
  <style>


.pie {
	position: relative;
	margin: 1em auto;
	padding: 0;
	width: 32em;
  height: 32em;
	border-radius: 50%;
	list-style: none;
  overflow: hidden;
}
.slice {
	overflow: hidden;
	position: absolute;
	top: 0;
  right: 0;
	width: 50%;
  height: 50%;
	transform-origin: 0% 100%;
}
.slice-one {
  transform: rotate(30deg) skewY(-30deg);
  background: black;
}
.slice-two {
  transform: rotate(-30deg) skewY(-30deg);
  background: yellow;
}
.slice-three {
  transform: rotate(-90deg) skewY(-30deg);
  background: black;
}
.slice-four {
  transform: rotate(-150deg) skewY(-30deg);
  background: yellow;
}
.slice-five {
  transform: rotate(-210deg) skewY(-30deg);
  background: black;
}
.slice-six {
  transform: rotate(-270deg) skewY(-30deg);
  background: yellow;
}

  </style>
</head>
<body>

<ul class='pie'>
    <li class='slice-one slice'> </li>
    <li class='slice-two slice'> </li>
    <li class='slice-three slice'> </li>
    <li class='slice-four slice'> </li>
    <li class='slice-five slice'> </li>
    <li class='slice-six slice'> </li>
  <ul>
</body>
</html>

```