const creditService = require("../services/creditService");

const getAllCredits = (req,res) => {
    const allCredits = creditService.getAllCredits();
    res.send("Get all credits");
};

const getOneCredit = (req,res) => {
    const credit = creditService.getOneCredit();
    res.send("Get an existing credit");
};

const createNewCredit = (req,res) => {
    const createdCredit = creditService.createNewCredit();
    res.send("Create a new credit");
};

const updateOneCredit = (req,res) => {
    const updatedCredit = creditService.updateOneCredit();
    res.send("Update an existing credit");
};

const deleteOneCredit = (req,res) => {
    res.send("Delete an existing credit");
};

module.exports = {
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit,
};
