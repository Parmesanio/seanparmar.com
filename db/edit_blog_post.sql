update blog_posts 
set title=$2, post_imgurl=$3, body=$4
where id=$1;
select *, TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;