module.exports = {
    development: {
        database: {
            host: '164.90.140.153',
            port: 3306,
            user: 'remote_user',
            password: '@Pass123#',
            database: 'dbteste',
        },
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
    },
};
