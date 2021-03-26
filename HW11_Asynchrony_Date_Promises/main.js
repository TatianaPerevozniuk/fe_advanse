
async function getRandomChinese(length) {
    let arrayRandomChineseNumber = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Number.parseInt(Date.now().toString().slice(-5));
        const randomChineseNumber = String.fromCharCode(randomNumber);
        arrayRandomChineseNumber.push(randomChineseNumber);
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(randomChineseNumber)
            }, 50)
        })
    }
    console.log(arrayRandomChineseNumber.join(''));
}
getRandomChinese(4);



