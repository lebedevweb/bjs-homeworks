'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
	let today = new Date(),
			s = Number(amount) - Number(contribution),
			p = Number(percent) / 1200,
			n = (date.getFullYear() - today.getFullYear()) * 12 + date.getMonth() - today.getMonth(),
			paramName = '', paramData = '',
			totalAmount = '';


		if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(date) && date > new Date() ) {
			let payPerMonth = s*(p+p/(((1+p)**n)-1));
			totalAmount = +(payPerMonth * n).toFixed(2);
		} else if (isNaN(percent)) {
			paramName = '"Процентная ставка"';
			paramData = percent;
			totalAmount = `Параметр ${paramName} содержит неправильное значение ${paramData}`
		} else if (isNaN(contribution)) {
			paramName = '"Начальный взнос"';
			paramData = contribution;
			totalAmount = `Параметр ${paramName} содержит неправильное значение ${paramData}`
		} else if (isNaN(amount)) {
			paramName = '"Общая стоимость"';
			paramData = amount;
			totalAmount = `Параметр ${paramName} содержит неправильное значение ${paramData}`
		} else if (isNaN(date)) {
			paramName = '"Общая стоимость"';
			paramData = date;
			totalAmount = `Параметр ${paramName} содержит неправильное значение ${paramData}`
		} else if (date < new Date()) {
			totalAmount = 'Дата не может быть меньше текущей';
		}

    return totalAmount;
}

function getGreeting(name) {
    let greeting;

    if (name === null || name === undefined || name.length === 0) {
    	greeting = 'Привет, мир! Меня зовут Аноним';
    } else if (name.length > 0) {
    	greeting = `Привет, мир! Меня зовут ${name}`
    }

    return greeting;
}