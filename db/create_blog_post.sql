insert into blog_posts
(admin_id, author, title, post_imgURL, body)
values
($1, $2, $3, $4, $5);
-- select * from blog_posts;