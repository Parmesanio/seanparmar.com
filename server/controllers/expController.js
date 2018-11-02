module.exports = {
    get: (req, res) => {
        let db = req.app.get('db');
        db.get_experiences().then(experiences => res.send(experiences)).catch(err => console.log('err in get_experiences', err));
    }
}