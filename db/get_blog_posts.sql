select *, TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts order by posting_date desc;
-- SELECT TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;