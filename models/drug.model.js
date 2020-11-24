const db = require('../utils/database');

// TODO: 
const getAll = async () => {
    try {
        return await db.load('SELECT * from drug')
    } catch (error) {
        throw error
    }

}

// async function add(newDrug){}

async function add(newDrug) {
    try {
        return await db.add('drug', newDrug)
    } catch (error) {
        throw error
    }
}

async function erase(newDrug) {
    try {
        return await db.erase('drug', newDrug)
    } catch (error) {
        throw error
    }
}

async function erase(newDrug) {
    try {
        return await db.erase('drug', newDrug)
    } catch (error) {
        throw error
    }
}
module.exports = {
    getAll,
    add, 
    erase

};