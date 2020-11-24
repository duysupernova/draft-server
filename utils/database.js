var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Overlord_Toc6',
    database: 'arvtrials',
    port: '3306'

});

connection.connect();

const load = async (query) => {
    return new Promise((resolve) => {
        return connection.query(query, function (error, results, fields) {
            if (error) throw error;
            resolve(results)
        });
    })
}

async function add(table, data) {
    return new Promise((resolve) => {
        return connection.query(`INSERT INTO ${table} SET ?`, data, function (error, results, fields) {
            if (error) throw error;
            resolve(results)
        });
    })

};

async function erase(table, data) {
    return new Promise((resolve) => {
        return connection.query(`DELETE FROM ${table} WHERE drugId = '${data.drugId}' AND name = '${data.name}'`, function (error, results, fields) {
            if (error) throw error;
            resolve(results)
        });
    })

}



module.exports = {
    load,
    add,
    erase
};