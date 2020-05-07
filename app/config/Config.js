
module.exports = {
    express: {
        port: 3000,
        host: 'localhost'
    },
    dbConfig: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "devtable",
        connectionLimit: 10
    },
    jwt: {
        secretKey : 'n0d3app53cr3tk3y',
        expiresIn : '2h'
    }
};
