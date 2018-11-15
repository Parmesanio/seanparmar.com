module.exports = {
    getAdmin: (db) => {
        return db.query("select * from admins where auth0_id='facebook|2364333683593240'")
    },
    createAdmin: (db, admin) => {
        return db.query("insert into admins(auth0_id, username, email, photos) values (${auth0_id}, ${username}, ${email}, ${photos}) returning *;", {
            auth0_id: admin.auth0_id,
            username: admin.username,	
            email: admin.email,	
            photos: admin.photos
        })
    }
}