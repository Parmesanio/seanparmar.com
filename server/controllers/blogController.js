let fs            = require('fs'),
showdown          = require('showdown'),
converter         = new showdown.Converter();
module.exports = {
    get_posts: (req, res) => {
        const db = req.app.get('db');
        db.get_blog_posts().then(posts => {
            fs.readdir('./server/markdown/', (err, files) => {
                console.log('inside fs.readdir', posts)
                files.forEach((file, i) => {
                    fs.readFile(posts[i].body, 'utf-8', (err, data) => {
                            if(err) throw err;
                            var newBody = converter.makeHtml(data);
                            posts[i].body = newBody
                    })
                })
                setTimeout(() => {
                    res.send(posts)
                }, 100)
            })
        }).catch(err => console.log('err in get_blog_posts', err));
    },
    create_post: (req, res) => {
        const db = req.app.get('db');
        fs.writeFile(`./server/markdown/${req.body.postTitle}.md`, req.body.postBody, (err) => {
            if (err) throw err;
            let { admin_id, admin_name, postTitle, postURL } = req.body
            db.create_blog_post(admin_id, admin_name, postTitle, postURL, `./server/markdown/${req.body.postTitle}.md`).then(posts => {
                res.send(posts)
            }).catch(err => console.log('err in create_blog_post', err));
      })
    },
    edit_post: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        let { postTitle, postURL, postBody } = req.body;

        db.edit_blog_post([id, postTitle, postURL, postBody]).then((posts) => res.send(posts)).catch(err => console.log('err in edit_blog_post', err));
    },
    delete_post: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;

        db.delete_blog_post(id).then(posts => res.send(posts)).catch(err => console.log('err in delete_blog_post', err));
    }
}