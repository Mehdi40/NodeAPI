import Cred from '../../conf.json'

module.exports = { 
    client: 'mysql', 
    connection: { 
        host: Cred.database.host, 
        user: Cred.database.user, 
        password: Cred.database.password, 
        database: Cred.database.database
    },
    debug: true
};