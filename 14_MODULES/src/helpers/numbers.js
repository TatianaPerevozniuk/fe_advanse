//Формат CommonJS экспорт:
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

//---Первый способ экспорта:
// module.exports.double = double;
// module.exports.pow = pow;

//---Второй способ-----------------
module.exports = {
    helpersVersion,
    double,
    pow
};
