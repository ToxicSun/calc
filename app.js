let cont = document.querySelector('.one__menu'),
	num = document.querySelector('.input_num'),
	btn = document.querySelector('.work'),
	inpNum = document.querySelector('.first__number'),
	result = document.querySelector('.second__number');

btn.addEventListener('click', () => {
	switch (cont.value){
		case "2-8":
			inpNum.innerHTML = num.value;
			let twoEight = parseInt(+num.value, 2).toString(8);
			result.innerHTML = twoEight;
			break;
		case "2-10":
			inpNum.innerHTML = num.value;
			let twoTen = parseInt(+num.value, 2);
			result.innerHTML = twoTen;
			break;
		case "2-16":
			inpNum.innerHTML = num.value;
			let twoSix = parseInt(+num.value, 2).toString(16);
			result.innerHTML = twoSix;
			break;
	    case "8-2":
			inpNum.innerHTML = num.value;
			let eightTwo = parseInt(+num.value, 8).toString(2);
			result.innerHTML = eightTwo;
			break;	
		case "8-10":
			inpNum.innerHTML = num.value;
			let eightTen = parseInt(+num.value, 8);
			result.innerHTML = eightTen;
			break;
		case "8-16":
			inpNum.innerHTML = num.value;
			let eightSix = parseInt(+num.value, 8).toString(16);
			result.innerHTML = eightSix;
			break;
		case "10-2":
			inpNum.innerHTML = num.value;
			let tenTwo = parseInt(+num.value, 10).toString(2);
			result.innerHTML = tenTwo;
			break;
		case "10-8":
			inpNum.innerHTML = num.value;
			let tenEight = parseInt(+num.value, 10).toString(8);
			result.innerHTML = tenEight;
			break;
		case "10-16":
			inpNum.innerHTML = num.value;
			let tenSix = parseInt(+num.value, 10).toString(16);
			result.innerHTML = tenSix;
			break;
		case "16-2":
			inpNum.innerHTML = num.value;
			let sixTwo = parseInt(num.value,16).toString(2);
			result.innerHTML = sixTwo;
			break;
		case "16-8":
			inpNum.innerHTML = num.value;
			let sixEight = parseInt(num.value, 16).toString(8);
			result.innerHTML = sixEight;
			break;
		case "16-10":
			inpNum.innerHTML = num.value;
			let sixTen = parseInt(num.value,16).toString(10);
			result.innerHTML = sixTen;
			break;
	}
});

