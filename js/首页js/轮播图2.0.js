var i = 1,
rightBt = document.querySelector('.rightBt'),
leftBt = document.querySelector('.leftBt'),
banner_box = document.querySelector('#banner_box'),
button = document.querySelectorAll('.banner .mainbox ol li'),
sum = 0;
function handRightBt(){
	
	if(i < 3)
	{
		banner_box.style.transition = `0.2s`
		sum = i*100
		banner_box.style.left = `-${sum}%`
		document.querySelector('.banner .mainbox ol .current').classList.remove('current')
		button[i].classList.add('current')
		i++
	}
	else{
		sum = i*100
		banner_box.style.left = `-${sum}%`
		document.querySelector('.banner .mainbox ol .current').classList.remove('current')
		button[0].classList.add('current')
		setTimeout(function(){
			banner_box.style.transition = `none`
			banner_box.style.left = `0%`
			
		},200)
		
		i = 1
	}
}
function move(){
	
	//圆点按钮切换图片
	for(let cont = 0;cont<3;cont++)
	{
		button[cont].addEventListener('mouseenter',function(){
			document.querySelector('.banner .mainbox ol .current').classList.remove('current')
			button[cont].classList.add('current')
			banner_box.style.transition = `0.2s`
			sum = cont*100
			i = cont+1
			banner_box.style.left = `-${sum}%`
		})
	}
	
	rightBt.addEventListener('click',handRightBt)
	
	leftBt.addEventListener('click',function(){
		if(i != 1)
		{
			banner_box.style.transition = `0.2s`
			sum = (i-2)*100
			banner_box.style.left = `-${sum}%`
			document.querySelector('.banner .mainbox ol .current').classList.remove('current')
			button[i-2].classList.add('current')
			i--
		}
		else{
			i = 3
			document.querySelector('.banner .mainbox ol .current').classList.remove('current')
			button[2].classList.add('current')
			banner_box.style.transition = `none`
			banner_box.style.left = `-300%`
			setTimeout(function(){
				banner_box.style.transition = `0.2s`
				banner_box.style.left = `-200%`
			},0)
		}
		
	})
	let data = setInterval(handRightBt,3000)
	const mainbox = document.querySelector('.banner .mainbox')
	mainbox.addEventListener('mouseenter',function(){
		clearInterval(data)
	})
	mainbox.addEventListener('mouseleave',function(){
		clearInterval(data)
		data = setInterval(handRightBt,3000)
	})
}
move()