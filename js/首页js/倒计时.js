function time(){
	let time = document.querySelector('#main .banner .banner_time_title2 .timeSet1'),
		time0 = document.querySelector('#main .banner .banner_time_title3 .timeSet2'),
		time1 = document.querySelector('#main .banner .banner_time_title3 .timeSet3'),
		time2 = document.querySelector('#main .banner .banner_time_title3 .timeSet4'),
		sum = 0
		
	
	setInterval(function(){
		let now1 = new Date(),
			min = now1.getMinutes(),
			sed = now1.getSeconds(),
			hour = now1.getHours()
		if(hour<10)
		{
			hour = '0'+ hour
		}
		time.innerHTML = `${hour}:00`
		sum = 3600 - (min*60+ sed)
		sed = sum%60
		min = (sum-sed)/60
		if(sed < 10)
		{
			sed = '0' + sed
		}
		if(min < 10)
		{
			min = '0' + min
		}
		if(sum == 0)
		{
			time0.innerHTML = `01`
		}
		else{
			time0.innerHTML = `00`
		}
		time1.innerHTML = `${min}`,time2.innerHTML = `${sed}`
	},1000)
	
	
	
	
}
time()