function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict"
    let percentNumb =  parseFloat(percent);
    let contributionNumb = parseFloat(contribution);
    let amountNumb = parseFloat(amount);
    if (isNaN(percentNumb)) return `Параметр 'Процентная ставка' содержит неправильное значение "${percent}"`; 
    if (isNaN(contributionNumb)) return `Параметр 'Процентная ставка' содержит неправильное значение "${contribution}"`; 
    if (isNaN(amountNumb)) return `Параметр 'Процентная ставка' содержит неправильное значение "${amount}"`; 
    
    let P = percentNumb / 12 / 100;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
    let monthPay = (amount - contribution) * (P + P / (Math.pow((1 + P), n) - 1));
    let totalAmount = monthPay * n;
    
    return parseFloat(totalAmount.toFixed(2));
} 

function getGreeting(name) {
    if (typeof name !== "string" || name == '') name = 'Аноним';
    return `Привет, мир! Меня зовут ${name}`;
}