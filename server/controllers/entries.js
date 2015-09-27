var Entry = require('mongoose').model('Entry');

exports.getEntries = function(req, res){
    Entry.find({}).exec(function(err, entries){
        res.send(entries);
    })
};


exports.getEntriesById = function(req, res){
    Entry.findOne({_id:req.params.id}).exec(function(err, entry ){
        res.send(entry);
    })
}