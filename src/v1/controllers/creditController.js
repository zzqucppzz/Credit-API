const creditService = require("../services/creditService");

const getAllCredits = (req,res) => {
    const allCredits = creditService.getAllCredits();
    res.send({ status: "OK", data: allCredits});
};

const getOneCredit = (req,res) => {
    const {
        params: { creditId },
    } = req;
    
    if (!creditId) {
        return;
    };

    const credit = creditService.getOneCredit(creditId);
    res.send({status:"OK", data: credit});
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
        return;
    };

    const newCredit = {
        name: body.name,
        mode: body.mode,
        time: body.time,
        lecture: body.lecture,
        lab: body.lab
    };

    const createdCredit = creditService.createNewCredit(newCredit);
    res.status(201).send({ status: "OK", data: createdCredit});
};

const updateOneCredit = (req,res) => {
    const {
        body,
        params: { creditId }
    } = req;

    if (!creditId){
        return;
    }

    const updatedCredit = creditService.updateOneCredit(creditId, body);
    res.send({ status: "OK", data: updatedCredit});
};

const deleteOneCredit = (req,res) => {
    const {
        params: { creditId }
    } = req;

    if (!creditId){
        return;
    }

    creditService.deleteOneCredit(creditId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit,
};
