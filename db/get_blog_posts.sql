select *, TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;
-- SELECT TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;