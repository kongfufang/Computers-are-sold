function change(){
	let buttoms = document.querySelectorAll('.select .select_title .Tright li'),
		contents = document.querySelectorAll('.select .select_cont')
		
	for(let i = 0;i < buttoms.length;i++)
	{
		//切换菜单内容
		buttoms[i].addEventListener('click',function(){
		document.querySelector('.select .select_title .Tright .active p').classList.remove('active')
		document.querySelector('.select .select_title .Tright .active').classList.remove('active')
		buttoms[i].classList.add('active')
		buttoms[i].firstChild.classList.add('active')
		//切换选项卡内容
		document.querySelector('.select .cont').classList.remove('cont')
		contents[i].classList.add('cont')
		})
	}
}
change()
// 用 display 的 none 和 block 实现