insert into admins
(auth0_id, username, email, photos)
values
($1, $2, $3, $4)
returning *;