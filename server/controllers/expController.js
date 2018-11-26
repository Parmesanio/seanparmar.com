let fs            = require('fs'),
showdown          = require('showdown'),
converter         = new showdown.Converter();
module.exports = {
    get: (req, res) => {
        let db = req.app.get('db');
        db.get_experiences().then(experiences => 
                fs.readdir('./server/markdown/', (err, files) => {
                    files.forEach((file, i) => {
                        console.log(file)
                        fs.readFile(experiences[i].body, 'utf-8', (err, data) => {
                                if(err) throw err;
                                var newBody = converter.makeHtml(data);
                                experiences[i].body = newBody
                                console.log('experiences[i]', experiences[i]);
                        })
                    })
                    setTimeout(() => {
                        console.log('experiences',experiences);
                        res.send(experiences)
                    }, 100)
                })
            ).catch(err => console.log('err in get_experiences', err));
    }
}