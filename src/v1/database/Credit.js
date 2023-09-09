const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllCredits = () => {
    try {
        return DB.credits;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getOneCredit = (creditId) => {
    try {
        const credit = DB.credits.find((credit) => credit.id === creditId);
        if (!credit){
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
              };
        }
        return credit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };        
    }
};

const createNewCredit = (newCredit) => {
    try {
        const isAlreadyAdded = DB.credits.findIndex((credit) => credit.name === newCredit.name) > -1;

        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name '${newCredit.name}' already exists`,
            };
        }

        DB.credits.push(newCredit);
        saveToDatabase(DB);
        return newCredit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateOneCredit = (creditId, changes) => {
    try {
        const isAlreadyAdded = DB.credits.findIndex((credit) => credit.name === changes.name) > -1;

        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Credit with the name '${changes.name}' already exists`,
            };
        }

        const indexForUpdate = DB.credits.findIndex((credit) => credit.id === creditId);

        if (indexForUpdate === -1){
            throw {
                status: 400,
                message: `Can't find credit with the id '${creditId}'`,
              };
        }

        const updatedCredit = {
            ...DB.credits[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        }

        DB.credits[indexForUpdate] = updatedCredit;
        saveToDatabase(DB);
        return updatedCredit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const deleteOneCredit = (creditId) => {
    try {
        const indexForDeletion = DB.credits.findIndex((credit) => credit.id === creditId);

        if (indexForDeletion === -1){
            throw {
                status: 400,
                message: `Can't find credit with the id '${creditId}'`,
              };
        }
        DB.credits.splice(indexForDeletion,1);
        saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };        
    }
};

module.exports = { 
    getAllCredits,
    getOneCredit,
    createNewCredit,
    updateOneCredit,
    deleteOneCredit
};