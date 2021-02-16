console.log('Hello');

const priceEarphones = 15.678;
const pricePhone = 123.965;
const priceClock = 90.2345;

const maxPrice = Math.max(priceEarphones, pricePhone, priceClock);
const minPrice = Math.min(priceEarphones, pricePhone, priceClock);
console.log(`Максимальная цена: ${maxPrice}`);
console.log(`Минимальная цена: ${minPrice}`);

const sumPriceAll = priceEarphones+pricePhone+priceClock;
console.log(`Сумма всех товаров: ${sumPriceAll}`);

const flpriceEarphones = Math.floor(priceEarphones);
const flpricePhone = Math.floor(pricePhone);
const flpriceClock = Math.floor(priceClock);
const flPriceAll = flpriceEarphones+flpricePhone+flpriceClock;
console.log(`Сумма товаров с округлением в меншую сторону: ${flPriceAll}`);

const roundHSumPrise = Math.round(sumPriceAll/100)*100;
console.log(`Сумма товаров с округлением до сотых: ${roundHSumPrise}`);

if (flPriceAll%2 === 0){
    console.log(`Сумма товаров парное число: ${true}`);
}
else {
    console.log(`Сумма товаров непарное число: ${false}`);
}

const sumClient = 500;
const remainderClient = sumClient - sumPriceAll;
console.log(`Остаток клиента от 500грн: ${remainderClient}`);

const avgPrice = sumPriceAll/3;
const roundAvgPrice = Math.round(avgPrice/0.01)*0.01;
console.log(`Среднее значение цен: ${roundAvgPrice}`);

const sale = Math.round(Math.random()*sumPriceAll/0.01)*0.01;
const toPay = Math.round((sumPriceAll - sale)/0.01)*0.01;
const netProfit = Math.round((sumPriceAll/2-sale)/0.01)*0.01;
console.log(`Скидка: ${sale}`);
console.log(`К оплате: ${toPay}`);
console.log(`Чистая прибыль: ${netProfit}`);