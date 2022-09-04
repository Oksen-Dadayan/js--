let num1 = prompt('Рік народження');
num1 = Number(num1);

let num2 = prompt('Поточний рік')
num2 = Number(num2);

if(isNaN(num1, num2)) {
		console.log('помилка, рік треба ввести тільки числом')
	} else {
		console.log(num2 - num1)
	}

