module.exports = {
    get_posts: (req, res) => {
        const db = req.app.get('db');
        db.get_blog_posts().then(posts => res.send(posts)).catch(err => console.log('err in get_blog_posts', err));
    },
    create_post: (req, res) => {
        const db = req.app.get('db');
        let { admin_id, admin_name, postTitle, postURL, postBody } = req.body
        db.create_blog_post(admin_id, admin_name, postTitle, postURL, postBody).then(posts => res.send('Successfully created post.')).catch(err => console.log('err in create_blog_post', err));
    },
    edit_post: (req, res) => {
        const db = req.app.get('db');
        console.log('EDIT POST', req.params, req.body);
        let { id } = req.params;
        let { postTitle, postURL, postBody } = req.body;

        db.edit_blog_post([id, postTitle, postURL, postBody]).then((posts) => res.send(posts)).catch(err => console.log('err in edit_blog_post', err));
    },
    delete_post: (req, res) => {
        const db = req.app.get('db');
        console.log('DELETE_POST',req.params);
        let { id } = req.params;

        db.delete_blog_post(id).then(posts => res.send(posts)).catch(err => console.log('err in delete_blog_post', err));
    }
}