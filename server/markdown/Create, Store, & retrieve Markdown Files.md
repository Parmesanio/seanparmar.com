## **Table of Contents**
- Introduction
- Technologies
- The Challenge
- The Journey
- The Result

## **Introduction**

Recently, we had a week off from class because of the holidays.  During this time I lectured students for 1.5 hours on Monday and 2 hours on Wednesday.  We were going over concepts they were introduced to the previous Friday and I introduced them to concepts they will be learning about the Monday they return from break.  To help facilitate this, I created a couple mini projects and used markdown to write Github repositories for each one.  I walked students through the project while answering any questions they had, but I digress.

One result from this experience is realizing my enjoyment of writing markdown.  Seeing how it works and how fun it was to write alternate syntax for elements made me want to incorporate this into my blog.  What you see on this page now is actually markdown converted to html and I am here to show you how I accomplished this.

## **Technologies Used**

- Node.js + Express
- fs
- showdown
- Postgresql

## **The Challenge**

- Create a markdown file while creating a post
- Link file to specific post

## **The Journey**

I did not have to scour the internets for long to find an answer for the first challenge.  Most if not all the forum posts, blogs, and videos mentioned using Node.js’s built in fs package to create markdown files.

First things first though, lets install some packages.

```yarn add express showdown``` or ```npm i express showdown```

Once you have setup a basic express server read on below.

### **Creating & Storing Markdown Files**
Looking at the <a href="https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback" target="_blank">documentation</a> for ```fs.writeFile()`` gives us an example of, well, creating a file:

```
const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```
A few things to note here:

```fs.writeFile``` takes in the name (```message```) and extension (```.txt```) of the file you want to create, the ```data``` you want written to the file, and a ```callback function```.

Great!  Now lets work on making this more dynamic.

First I need to setup a folder to contain all of my markdown files.  I decided to place this folder in my server directory.  Note the file path to get to this markdown folder from your project's root as this will be the first arguement of ```fs.writeFile()```.

Now we need to dynamically name this .md file.  in my case, I am trying to create one everytime I create a post, so I set the name of the file to the post's title.  I get this data along with the post's body from ```req.body```.



Here's what it looks like:

```./path-to-markdown-folder/markdown/${req.body.postTitle}.md```

Here's what we have so far:

```fs.writeFile(`./path-to-markdown-folder/markdown/${req.body.postTitle}.md`, data, cb)```

Lets work on the data.  In the example from the documentation the data was basically hard coded.  The data I'll be receiving will change depending on what I post.

Like the post's title, I'll be grabbing the post's body off ```req.body```.

```fs.writeFile(`./path-to-markdown-folder/markdown/${req.body.postTitle}.md`, req.body.postBody, cb)```

All we need to do is define the callback function.

It was at this point I realized I did not have a way to link the markdown file to the actual post stored in my database.  If I tried to retrieve the blog post there would not be a body to go with it.  After some fiddling I decided to fire my ```db.create_blog_post()``` method **inside** ```fs.writeFile```'s callback.  What do I store?  I stored the filepath as the post's body.

Here's my create method in full:

```
fs.writeFile(`./path-to-markdown-folder/markdown/${req.body.postTitle}.md`, req.body.postBody, (err) => {
            if (err) throw err;
            let { admin_id, admin_name, postTitle, postURL } = req.body
            db.create_blog_post(admin_id, admin_name, postTitle, postURL, `./path-to-markdown-folder/markdown/${req.body.postTitle}.md`).then(posts => {
                res.send(posts)
            }).catch(err => console.log('err in create_blog_post', err));
      })
```

We can now create markdown files linked to their blog post.
### **Retrieving Markdown Files**

Calling my blog posts with their markdown files wasn't as straighforward as I thought.  There is another ```fs``` method we use called ```fs.readFile()```, but it only reads one file.

Before I go into depth with that issue, here's an example of ```fs.readFile()```:

```
var showdown = require('showdown');
var converter = new showdown.Converter();

fs.readFile(__dirname + '/markdown/hello-world.md', 'utf-8', function(err, data) {
    if (err) throw err;
    res.send(converter.makeHtml(data));
  });
```
The code block above is from Peter J Langley’s <a href="https://guides.codechewing.com/markdown-to-html-node-js-server" target="_blank">Markdown to HTML via node.js server</a>.

You can see that method will only read one file and send it back.  I need to be able to read multiple files as I have a page listing all my blog posts.

Enter ```fs.readdir()```.

CMS from stackoverflow has a great <a href="https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j" target="_blank">example</a> for this method:

```
const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})
```

This method reads the **directory** instead of just a file and allows you to pass each file of that directory into a callback function.

The idea is for each file in my markdown directory I want to read the file, convert the data I get from said file into html, and send it up to my front end.

We will be combining ```fs.readdir()``` with ```fs.readFile()``` **inside** my ```db.get_blog_posts``` method.

```
...

fs.readdir('./path-to-markdown-folder/markdown/', (err, files) => {
  let fileArray = []
  files.forEach((file, i) => {
      console.log(posts[i].body);
      fs.readFile(posts[i].body, 'utf-8', (err, data) => {
              if(err) throw err;  
              var newBody = converter.makeHtml(data);
              posts[i].body = newBody
      })
  })
  setTimeout(() => {
      res.send(posts)
  }, 100)
})

...
```

I gave ```fs.readdir``` the path to my markdown **directory** as its first argument and defined the callback function.  In this callback function I passed in the arguements ```err``` and ```files``` array I received from ```fs.readdir```. For each file in my files array I fired ```fs.readFile()``` passing in the path to said file which is linked to my post's body key (```posts[i].body```) and the file's index.

Finally, I have the data from each file, but it's as markdown.  I need to convert it to html.

Remember we installed a package called ```showdown```?  Here's where we'll use it.

Declare and define two variables:

```
var showdown = require('showdown');
var converter = new showdown.Converter();
```

The first variable requires the package and the second one fires the method off showdown that will be doing our converting.

All we need to do now is use this converter on the data we recieve from ```fs.readFile()``` and set the post's body to this html.

```
var newBody = converter.makeHtml(data);
posts[i].body = newBody
```

Now we just send the post back up to our front end with the updated body value.  An issue I ran into was a timing one where it tried to send the post back before reading the file, so I turned the res.send() method into an async method so it got pulled from the stack to be fired later.

```
setTimeout(() => {
      res.send(posts)
  }, 100)
```


## **The Result**

We are now able to use markdown to write our blog posts and have it converted into html.  I had a lot of fun learning how to do this and the next step is to create a markdown preview like the one in Visual Studio Code.

If you made it this far thank you and <a href="https://www.seanparmar.com/#contact-form" target="_blank">let me know</a> how it went for you and if I can help with any problems.