-- Randomize IDs
-- Taken from http://wiki.postgresql.org/wiki/Pseudo_encrypt
CREATE OR REPLACE FUNCTION pseudo_encrypt(VALUE int) returns bigint AS $$
DECLARE
l1 int;
l2 int;
r1 int;
r2 int;
i int:=0;
BEGIN
 l1:= (VALUE >> 16) & 65535;
 r1:= VALUE & 65535;
 WHILE i < 3 LOOP
   l2 := r1;
   r2 := l1 # ((((1366.0 * r1 + 150889) % 714025) / 714025.0) * 32767)::int;
   l1 := l2;
   r1 := r2;
   i := i + 1;
 END LOOP;
 RETURN ((l1::bigint << 16) + r1);
END;
$$ LANGUAGE plpgsql strict immutable;
-- create sequence random_int_seq;
create function make_random_id() returns bigint as $$
  select pseudo_encrypt(nextval('random_int_seq')::int)
$$ language sql;

-- DROPS
drop table if exists admins cascade;
drop table if exists blog_posts cascade;

-- ADMIN SCHEMA
create table admins (
    id bigint primary key default make_random_id(),
    auth0_id text,
    username text,
    email text,
    photos text,
    created_at date not null default current_date
);
CREATE SEQUENCE admins_id_seq OWNED BY admins.id;
select * from admins

-- BLOG_POSTS SCHEMA
create table blog_posts (
    id bigint primary key default make_random_id(),
    admin_id int references admins(id),
    title text,
    author text,
    body text,
    posting_date date not null default current_date
);
CREATE SEQUENCE blog_posts_id_seq OWNED BY blog_posts.id;
select * from blog_posts
-- Selects Dates with mm/dd/yy format
SELECT TO_CHAR(blog_posts.posting_date :: DATE, 'Mon dd, yyyy') from blog_posts;

-- EXPERIENCES SCHEMA
create table experiences(
id bigint primary key default make_random_id(),
exp_imgurl text,
description text,
tech text
);
CREATE SEQUENCE experiences_id_seq OWNED BY experiences.id;