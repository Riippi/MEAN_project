var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});

var Entry = mongoose.model('Entry', entrySchema);

function createDefaultEntries(){
    Entry.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Entry.create({title:  'WILL THE HUMAN RIGHTS ACT BURGLE PROPERTY PRICES?', featured: true, published: new Date('10/5/2014'), tags: ['Prices', 'Coding']});
            Entry.create({title:  'ARE WORKING MOTHERS GIVING YOUR PENSION CANCER?', featured: true, published: new Date('3/12/2015'), tags: ['Sports', 'Death']});
            Entry.create({title:  'IS TEENAGE SEX GIVING PROPERTY PRICES SWINE FLU?', featured: false, published: new Date('10/1/2014'), tags: ['Fun', 'Politics']});
            Entry.create({title:   'WILL CHANNEL 4 GIVE YOUR HOUSE DIABETES?', featured: false, published: new Date('5/12/2015'), tags: ['Fun', 'Politics']});
            Entry.create({title:  'What Will Node Be Like In 100 Years?', featured: true, published: new Date('1/1/2015'), tags: ['Angular', 'Politics']});
            Entry.create({title:  'JavaScript for People over 20', featured: true, published: new Date('10/13/2015'), tags: ['Fun', 'Node']});
            Entry.create({title:  'The Worst Advice Weve Ever Heard About Node', featured: true, published: new Date('3/1/2015'), tags: ['Spirits', 'Drugs']});
            Entry.create({title:  '15 Best Blogs To Follow About Angular', featured: true, published: new Date('2/1/2015'), tags: ['Bats', 'Bees']});
            Entry.create({title:  '7 Things About Angular Your Boss Wants To Know', featured: false, published: new Date('8/1/2015'), tags: ['Fun', 'Politics']});
            Entry.create({title:  '6 Ways Angulars Could Leave You Needing a Lawyer', featured: false, published: new Date('1/1/2015'), tags: ['Religion', 'Politics']});
            Entry.create({title:   'Why Youll Never Succeed at Angular', featured: true, published: new Date('10/13/2015'), tags: ['Fun', 'Politics']});
            Entry.create({title:  'Are you smarter than your parents?', featured: false, published: new Date('11/1/2015'), tags: ['Blah', 'Snakes']});
            Entry.create({title:   'IS FILTH ON TELEVISION TURNING YOUR DAUGHTERS GAY?', featured: true, published: new Date('7/15/2015'), tags: ['Fun', 'Politics']});
            Entry.create({title:  '5 Tools Everyone In The Node Industry Should Be Using', featured: true, published: new Date('7/1/2015'), tags: ['Fun', 'Politics']});

        }
    })
}

exports.createDefaultEntries = createDefaultEntries;