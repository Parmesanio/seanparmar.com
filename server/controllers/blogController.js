module.exports = {
    get_posts: (req, res) => {
        const db = req.app.get('db');
        db.get_blog_posts().then(res => console.log(res)).catch(err => console.log('err in get_blog_posts', err));
    }
}