const DB = require("./db.json");

const getSignForCredit = (creditId) => {
    try {
        const sign = DB.signs.filter((sign) => sign.credit === creditId);
        if (!sign) {
            throw {
                status: 400,
                message: `Can't find credit with the id '${creditId}'`,   
            };
        };
        return sign;
    } catch (error){
        throw { status: error?.status || 500, message: error?.message || error };        
    };
}

module.exports = { getSignForCredit };