const Sign = require("../database/Sign");

const getSignForCredit = (creditId) => {
    try {
        const sign = Sign.getSignForCredit(creditId);
        return sign;
    } catch (error){
        throw error;
    }
}

module.exports = { getSignForCredit };