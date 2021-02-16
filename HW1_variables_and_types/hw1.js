console.log('Hello');

const priceEarphones = 15.678;
const pricePhone = 123.965;
const priceClock = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(`Максимальная цена: ${Math.max(priceEarphones, pricePhone, priceClock)}`);
console.log(`Минимальная цена: ${Math.min(priceEarphones, pricePhone, priceClock)}`);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let sumPriceAll = priceEarphones+pricePhone+priceClock;
console.log(`Сумма всех товаров: ${sumPriceAll}`);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
// Округлення використовувати в МЕНЬШУ сторону.
const flpriceEarphones = Math.floor(priceEarphones);
const flpricePhone = Math.floor(pricePhone);
const flpriceClock = Math.floor(priceClock);
let flPriceAll = flpriceEarphones+flpricePhone+flpriceClock;
console.log(`Сумма товаров с округлением в меншую сторону: ${flPriceAll}`);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log(`Сумма товаров с округлением до сотых: ${Math.round(sumPriceAll/100)*100}`);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if (flPriceAll%2 === 0){
    console.log(`Сумма товаров парное число: ${true}`);
}
else {
    console.log(`Сумма товаров непарное число: ${false}`);
}

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const sumClient = 500;
let remainderClient = sumClient - sumPriceAll;
console.log(`Остаток клиента от 500грн: ${remainderClient}`);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice = sumPriceAll/3;
console.log(`Среднее значение цен: ${Math.round(averagePrice/0.01)*0.01}`);

// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
// (Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130.
// Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше,
// собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40)
let saleEarphones = Math.random()*priceEarphones;
let toPayEarphones = priceEarphones - saleEarphones;
console.log(`Скидка: ${Math.round(saleEarphones/0.01)*0.01}`);
console.log(`К оплате: ${Math.round(toPayEarphones/0.01)*0.01}`);
let netProfit = priceEarphones/2-saleEarphones;
console.log(`Чистая прибыль: ${Math.round(netProfit/0.01)*0.01}`);