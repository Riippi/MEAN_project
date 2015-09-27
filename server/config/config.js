var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {

    development: {
        db: 'mongodb://localhost/mean_project',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: '-insert path to the database in here-',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }

}