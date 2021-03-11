module.exports = {
    development: {
        database: {
            host: 'tuffi.db.elephantsql.com',
            port: 5432,
            user: 'xsexbbqy',
            password: 'OHGaru_RIbMIwu6a1Y7SuOJ60MzRkmOI',
            database: 'xsexbbqy',
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
