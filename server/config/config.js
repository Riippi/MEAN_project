var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {

    development: {
        db: 'mongodb://localhost/mean_project',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://mean_user:extimean66667wowserKK@ds051843.mongolab.com:51843/mean_project',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }

}