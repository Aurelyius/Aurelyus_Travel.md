//https://api.telegram.org/bot5376583210:AAFn5a8SO1PjGDv1A_epfQPMSEDRRUl5e0I/getupdates

//https://api.telegram.org/bot5376583210:AAFn5a8SO1PjGDv1A_epfQPMSEDRRUl5e0I/sendMessage?chat_id=-772480581&text=hi_i_am_a_bot

document.querySelector('.trimite').onclick = function(){
	let message = document.querySelector('.message').value;
	const token = '5376583210:AAFn5a8SO1PjGDv1A_epfQPMSEDRRUl5e0I';
	let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-772480581&text='
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url + message, true);
	xhttp.send();
}
 

