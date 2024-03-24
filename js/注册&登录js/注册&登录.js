function verifyname1(){
	const use = document.querySelectorAll('.box .use')
	const user = document.querySelectorAll('.box .user')
	const reg = /^[a-zA-Z0-9]{1,5}$/
	if(reg.test(user[0].value) != true)
	{
		 	use[0].innerHTML = '请输入由英文或数字组成的1到5位字符'
			return false
	}
	use[0].innerHTML = ''
	return true
}
function verifyname2(){
	const use = document.querySelectorAll('.box .use')
	const user = document.querySelectorAll('.box .user')
	const reg = /^[a-zA-Z0-9]{1,5}$/
	if(reg.test(user[1].value) != true)
	{
		 	use[1].innerHTML = '请输入由英文,数字组成的1到5位字符'
			return false
	}
	use[1].innerHTML = ''
	return true
}

function verifypasswd1(){
	const passwd = document.querySelectorAll('.box .passwd'),
	pass_1 = document.querySelector('.box .pass_1'),
	password = /^[a-zA-Z0-9]{6}$/
	if(password.test(passwd[0].value) != true)
	{
		 	pass_1.innerHTML = `请输6位由英文,数字组成的字符`
			return false
	}
	pass_1.innerHTML = ''
	return true
}

function verifypasswd2(){
	const passwd = document.querySelectorAll('.box .passwd'),
	pass = document.querySelectorAll('.box .pass'),
	password = /^[a-zA-Z0-9]{6}$/
	if(password.test(passwd[2].value) != true)
	{
		 	pass[1].innerHTML = `请输6位由英文,数字组成的字符`
			return false
	}
	pass[1].innerHTML = ''
	return true
}

function verifypasswd3(){
	const passwd = document.querySelectorAll('.box .passwd'),
	pass = document.querySelectorAll('.box .pass')
	if(passwd[1].value != passwd[0].value)
	{
		 	pass[0].innerHTML = `两次输入的密码不相同`
			return false
	}
	pass[0].innerHTML = ''
	return true
}

function move(){
	const box = document.querySelector('.pre-box'),
	      p = document.querySelectorAll('.bt-box p'),
		  h1 = document.querySelector('.pre-box h1')
		  pic = document.querySelector('.img-bx img')
		  p[1].addEventListener('click',function(){
			box.style.left = `525px`
			pic.src = './img/登录&注册/2.png'
			box.style.background = `linear-gradient(to top,#000098,#0055ff)`
			h1.innerHTML = '注册界面'
		  })
		  p[0].addEventListener('click',function(){
		  	box.style.left = `0`
			pic.src = './img/登录&注册/1.png'
			box.style.background = `linear-gradient(to top,#aa0000,#ff0000)`
			h1.innerHTML = '登录界面'
		   })
}
move()

function verify(){
	const user = document.querySelectorAll('.box .user'),
		  passwd = document.querySelectorAll('.box .passwd')
	user[0].addEventListener('change',verifyname1)
	user[1].addEventListener('change',verifyname2)
	passwd[0].addEventListener('change',verifypasswd1)
	passwd[2].addEventListener('change',verifypasswd2)
	passwd[1].addEventListener('change',verifypasswd3)

}
verify()


// 登录验证与数据库设计
function form(){
	const user = document.querySelectorAll('.box .user'),//登录和注册的用户名字
		  passd = document.querySelectorAll('.box .passwd'),
		  register = document.querySelector('.register-form .bt-box button'),//注册按钮
		  login = document.querySelector('.login-form .bt-box button'),//登录按钮
		  password = /^[a-zA-Z0-9]{6}$/,
		  reg = /^[a-zA-Z0-9]{1,5}$/
	
	// 设计数据库
	let men = {
			mark:0,//标记
			name:'',
			password:'',
			money:10000,//用户的金额
			goods:[{
				name:'',
				cost:''
			}],//用户购买过的所有商品
			goodscost:[0]//用户购买过的所有商品的价格
		},
	    data_01 = new Array()
	// 设计数据库	
		
	register.addEventListener('click',function(){
				 if(passd[1].value == passd[0].value && password.test(passd[0].value)==true && reg.test(user[0].value) == true)
				 {
					men['name'] = user[0].value
					men['password'] = passd[1].value
					men['mark'] = 1
					if(localStorage.getItem('data01') == null)
					{
						data_01[0]=men
						localStorage.setItem('data01',JSON.stringify(data_01))			
					}
					else
					{
						data_01 = JSON.parse(localStorage.getItem('data01'))
						for(let i =0;i <data_01.length;i++)
						{
							if(data_01[i]['name'] == men['name'])
							{
								alert('当前用户名已经被占用，请重新输入用户名')
								user[0].value='';
								return;
							}
						}
						data_01.push(men)
						localStorage.removeItem('data01')
						localStorage.setItem('data01',JSON.stringify(data_01))
					}
					alert('注册成功')
					location.href='../电脑配件售卖网站/首页.html'
				 }
				 else{
					 alert('注册失败')
				 }
	})
	login.addEventListener('click',function(){
				if(localStorage.getItem('data01') == null)
				{

					alert('该用户未注册，请先登录')
					// 代码完善

				}
				else{
					data_01 = JSON.parse(localStorage.getItem('data01'))
					for(let i =0;i <data_01.length;i++)
						{
							if(data_01[i]['name'] == user[1].value&&data_01[i]['password'] == passd[2].value)
							{
								data_01[i]['mark'] = 1
								localStorage.removeItem('data01')//删除旧的数据库
								localStorage.setItem('data01',JSON.stringify(data_01))//将数据保存到本地
								location.href='../电脑配件售卖网站/首页.html'
								alert('登录成功')
								return;
							}
						}
					user[1].value = '',passd[2].value='';
					alert('该用户未注册，请先登录')
				}
	})
	
}
form()