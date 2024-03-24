const text = ['欢迎来到澧源电脑配件商城',
			'没有加进购物车的宝贝,是永远拿不到手的',
			'失去钱的痛苦是短暂的,得不到宝贝的痛苦才是持久的,人生之路，有失才有得',
			'且视他人之疑目如盏盏鬼火,大胆买自己喜欢的宝贝罢！'],
	  p2 = document.querySelector('.p2')
var date = 500,
	cont = 0,
	char = 0,
	judge = false,
	start = null
let text1
function action(time){
	// 获取时间间隔
	if(start == null)
	{
		start = time
	}
	let progress = time - start
	//输入单个字符所需时间
	if(progress > date)
	{
		text1 = text[cont]
		// 增加字符
		if(judge == false)
		{
			char = char + 1
			p2.innerHTML = text1.slice(0,char)
			date = 500-Math.random()*400
		}
		// 删减字符
		else{
			p2.innerHTML = text1.slice(0,char)
			char = char - 1
		}
		start = time
		if(char === text1.length)
		{
			judge = true
			date = 50
			start = time + 2000
		}
		if(char < 0){
			judge = false
			start = time + 200
			cont++
			cont = cont%text.length 
		}
	}
	window.requestAnimationFrame(action)
}

var by = document.querySelector('body'),bg = document.querySelector('#bg')
//页面打开时的加载动画
setTimeout(function(){
	by.style.opacity = 100
	window.requestAnimationFrame(action)
	document.querySelector('.arrow').addEventListener('click',function(){
	window.scrollTo({ top: 800, left: 0, behavior: "smooth" })//控制滚轮划动800距离
	})
},"1000");


