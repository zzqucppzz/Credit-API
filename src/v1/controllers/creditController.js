const creditService = require("../services/creditService");

const getAllCredits = (req,res) => {
    const { mode } = req.query;
    try {
        const allCredits = creditService.getAllCredits({mode});
        res.send({ status: "OK", data: allCredits});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneCredit = (req,res) => {
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
        return; 
    };

    try {
        const credit = creditService.getOneCredit(creditId);
        res.send({status:"OK", data: credit});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });        
    }
};

const createNewCredit = (req,res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.mode ||
        !body.time ||
        !body.lecture ||
        !body.lab
    ) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'time', 'lecture', 'lab'",
                }
            })
        return;
    };

    const newCredit = {
        name: body.name,
        mode: body.mode,
        time: body.time,
        lecture: body.lecture,
        lab: body.lab
    };

    try {
        const createdCredit = creditService.createNewCredit(newCredit);
        res.status(201).send({ status: "OK", data: createdCredit});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    }
};

const updateOneCredit = (req,res) => {
    const {
        body,
        params: { creditId }
    } = req;

    if (!creditId){
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':creditId' can not be empty" },
        });
        return;
    }

    try {
        const updatedCredit = creditService.updateOneCredit(creditId, body);
        res.send({ status: "OK", data: updatedCredit});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    }
    
};

const deleteOneCredit = (req,res) => {
    const {
        params: { creditId }
    } = req;

    if (!creditId){
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':creditId' can not be empty" },
        });
        return;
    }

    try {
        creditService.deleteOneCredit(creditId);
        res.status(204).send({ status: "OK" });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});        
    }

};

module.exports = {
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit,
};
