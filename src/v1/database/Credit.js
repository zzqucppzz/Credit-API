const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Credit:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Linear Algebra  
 *         mode:
 *           type: string
 *           example: IT154IU
 *         time:
 *           type: array
 *           items:
 *             type: string
 *           example: ["18/09/2023--14/01/2024"]
 *         lecture:
 *           type: array
 *           items:
 *             type: string
 *           example: ["P.H.Hà"]
 *         lab:
 *           type: string
 *           example: Nope
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *     Sign:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: ad75d475-ac57-44f4-a02a-8f6def58ff56
 *         credit: 
 *           type: string
 *           example: 4a3d9aaa-608c-49a7-a004-66305ad4ab50
 *         studentId:
 *           type: string
 *           example: 11817fb1-03a1-4b4a-8d27-854ac893cf41
 *         student:
 *           type: string
 *           example: /students/:studentId
 */
const getAllCredits = (filterParams) => {
    try {
        let credits = DB.credits;
        if (filterParams.mode){
            return DB.credits.filter((credit) => credit.mode.toLowerCase().includes(filterParams.mode))
        };
        // Other if-statements will go here for different parameters
        return credits;
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