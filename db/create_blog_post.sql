insert into blog_posts
(admin_id, author, title, post_url, body)
values
($1, $2, $3, $4, $5);
select *, TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;