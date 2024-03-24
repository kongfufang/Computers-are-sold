function shop(){
	
	let bannerGoods = document.querySelectorAll('.shop p'),
		bannerGoods1 = document.querySelectorAll('.select_cont .cover p'),
		k = -1,k1 = -1
		for(let i = 0;i<bannerGoods.length;i++)
		{
			bannerGoods[i].addEventListener('click',function(){
				if(localStorage.getItem('data01') == null)
				{
					alert('请先登录')
				}
				else{
					let n = JSON.parse(localStorage.getItem('data01')),
						goods = {
							name:'',
							cost:''
						}
					goods['name'] = bannerGoods[i].parentNode.parentNode.children[0].innerText	//获取商品名字
					goods['cost'] = bannerGoods[i].parentNode.parentNode.children[3].innerText //获取商品价格
					for(let j = 0;j < n.length;j++)
					{
						if(n[j]['mark'] == 1)
						{
							k = j
						}
					}
					if(k == -1)
					{
						alert('请先登录')
						return
					}
					if(n[k]['goods'][0]['name'] == '')
					{
						n[k]['goods'][0]['name'] = goods['name']
						console.log(n[k]['goods'][0]['name'])
						n[k]['goods'][0]['cost'] = goods['cost']
					}else{
						n[k]['goods'].push(goods)
					}
					document.querySelector('#nav .search #cont').innerHTML = `${n[k]['goods'].length}`
					document.querySelector('#nav .search #cont').style.opacity = 1
					localStorage.removeItem('data01')
					localStorage.setItem('data01',JSON.stringify(n))
					k = -1
				}
			})
		}
		
		for(let i = 0;i<bannerGoods1.length;i++)
		{
			bannerGoods1[i].addEventListener('click',function(){
				if(localStorage.getItem('data01') == null)
				{
					alert('请先登录')
				}
				else{
					let n = JSON.parse(localStorage.getItem('data01')),
						goods = {
							name:'',
							cost:''
						}
					goods['name'] = bannerGoods1[i].parentNode.parentNode.children[0].children[1].children[0].children[0].innerText	//获取商品名字
					goods['cost'] = bannerGoods1[i].parentNode.parentNode.children[0].children[1].children[1].children[0].innerText //获取商品价格
					for(let j = 0;j < n.length;j++)
					{
						if(n[j]['mark'] == 1)
						{
							k1 = j
						}
					}
					if(k1 == -1)
					{
						alert('请先登录')
						return
					}
					if(n[k1]['goods'][0]['name'] == '')
					{
						n[k1]['goods'][0]['name'] = goods['name']
						n[k1]['goods'][0]['cost'] = goods['cost']
					}else{
						n[k1]['goods'].push(goods)
					}
					document.querySelector('#nav .search #cont').innerHTML = `${n[k1]['goods'].length}`
					document.querySelector('#nav .search #cont').style.opacity = 1
					localStorage.removeItem('data01')
					localStorage.setItem('data01',JSON.stringify(n))
					k1 = -1
				}
			
			})
		}
}
shop()