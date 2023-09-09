const Credit = require("../database/Credit");

const getAllCredits = () => {
    try {
        const allCredits = Credit.getAllCredits();
        return allCredits;
    } catch (error) {
        throw error;
    }
};

const getOneCredit = (creditId) => {
    try {
        const credit = Credit.getOneCredit(creditId);
        return credit;
    } catch (error) {
        throw error;
    }
};

const createNewCredit = (newCredit) => {
    const creditToInsert = {
        ...newCredit,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    try {
        const createdCredit = Credit.createNewCredit(creditToInsert);
        return createdCredit;
    } catch (error) {
        throw error;
    }
};

const updateOneCredit = (creditId, changes) => {
    try {
        const updatedCredit = Credit.updateOneCredit(creditId,changes);
        return updatedCredit;
    } catch (error) {
        throw error;
    }
};

const deleteOneCredit = (creditId) => {
    try {
        Credit.deleteOneCredit(creditId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit,
};
