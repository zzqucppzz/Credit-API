const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllCredits = () => {
    return DB.credits;
};

const getOneCredit = (creditId) => {
    const credit = DB.credits.find((credit) => credit.id === creditId);
    if (!credit){
        return;
    }
    return credit;
};

const createNewCredit = (newCredit) => {
    const isAlreadyAdded = DB.credits.findIndex((credit) => credit.name === newCredit.name) > -1;

    if (isAlreadyAdded) {
        return;
    }

    DB.credits.push(newCredit);
    saveToDatabase(DB);
    return newCredit;
};

const updateOneCredit = (creditId, changes) => {
    const indexForUpdate = DB.credits.findIndex((credit) => credit.id === creditId);

    if (indexForUpdate === -1){
        return;
    }

    const updatedCredit = {
        ...DB.credits[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }

    DB.credits[indexForUpdate] = updatedCredit;
    saveToDatabase(DB);
    return updatedCredit;
};

const deleteOneCredit = (creditId) => {
    const indexForDeletion = DB.credits.findIndex((credit) => credit.id === creditId);

    if (indexForDeletion === -1){
        return;
    }
    DB.credits.splice(indexForDeletion,1);
    saveToDatabase(DB);
};

module.exports = { 
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit
};