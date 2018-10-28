delete from blog_posts where id=$1;
select *, TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;