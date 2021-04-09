//Формат ES modules экспорт:
const helpersVersion = '1.5.0';

const logger = (error) => {
    console.error(error);
};

const double = value => {
    try {
        if (isFinite(value)){
            return value * value;
        } else {
            throw new Error('not a number');
        }
    } catch (error){
        logger(error);
    }
};
const pow = value => value * value;

//экспорт, способ 1: можно писать перед каждой переменной, функцией
//export const helpersVersion = '1.5.0';

//способ 2, через переменную
// export const HELPERS = {
//     helpersVersion,
//     double,
//     pow
// }

//3
export {
    double,
    pow
}

//4 Экспорт по умолчанию
// export default value => value * value + 2;
// (наш данный модуль вернет ф-цию, а не объект)
// имя для ф-ции напишем, тогда, когда будем импортировать

export default helpersVersion;