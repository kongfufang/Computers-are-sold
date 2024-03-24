
function random(){
	var i = 0,id = 0,rand = 0;
	let imgs = 
	[
		'./img/随机商品/华硕4090.jpg',
		'./img/随机商品/技嘉4080.jpg',
		'./img/随机商品/铭瑄4060ti.jpg',
		'./img/随机商品/铭瑄4090.jpg'
	]
	const img = document.querySelector('.banner .banner_select .head img'),
		  buttom = document.querySelector('.banner .banner_select .buttom')
	
	buttom.addEventListener('click',function(){
		
		if(i == 0)
		{
			buttom.innerHTML = `结束`
			buttom.style.animation = `null`
			id = setInterval(function(){
			rand = Math.floor( Math.random()*imgs.length)
			img.src = imgs[rand]
			},50)
			i = 1
		}
		else{
			buttom.style.animation = `buttom1 1.5s infinite`
			buttom.innerHTML = `开始`
			clearInterval(id)
			i = 0
			
		}
	})
}
random()