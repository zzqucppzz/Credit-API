const Credit = require("../database/Credit");

const getAllCredits = () => {
    const allCredits = Credit.getAllCredits();
    return allCredits;
};

const getOneCredit = (creditId) => {
    const credit = Credit.getOneCredit(creditId);
    return credit;
};

const createNewCredit = (newCredit) => {
    const creditToInsert = {
        ...newCredit,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    const createdCredit = Credit.createNewCredit(creditToInsert);
    return createdCredit;
};

const updateOneCredit = (creditId, changes) => {
    const updatedCredit = Credit.updateOneCredit(creditId,changes);
    return updatedCredit;
};

const deleteOneCredit = (creditId) => {
    Credit.deleteOneCredit(creditId);
};

module.exports = {
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit,
};
