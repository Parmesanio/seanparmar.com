module.exports = {
    getAdmin: (db) => {
        return db.query("select * from admins where auth0_id='facebook|2364333683593240'")
    },
    createAdmin: (db, admin) => {
        return db.query("insert into admins(auth0_id, username, email, photos) values ($1, $2, $3, $4) returning *;", {
            auth0_id: admin.auth0_id,
            username: admin.username,	
            email: admin.email,	
            photos: admin.photos,	
            created_at: admin.created_at
        })
    }
}