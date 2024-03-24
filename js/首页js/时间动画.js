function time(){
	let n = document.querySelector('.Timi'),
	myDate = new Date(),
	hour = myDate.getHours(),
	min = myDate.getMinutes()
	if(min<10)
	{
		min = '0'+min
	}
	if(hour<10)
	{
		hour = '0'+hour
	}
	n.innerHTML = `${hour}:${min}`
}
setInterval(time,100)