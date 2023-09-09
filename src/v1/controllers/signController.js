const signService = require("../services/signService");

const getSignForCredit = (req,res) => {
    const {
        params: { creditId },
    } = req;
    if (!creditId) {
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':creditId' can not be empty" },
        });        
    }
    try {
        const signCredit = signService.getSignForCredit(creditId);
        res.send({ status: "OK", data: signCredit});
    }catch(error){
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });        
    }
};

module.exports = { getSignForCredit };