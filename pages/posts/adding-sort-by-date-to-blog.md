---
title: "How I added sort-by-date to the blog"
date: "2020-11-17"
status: "published"
summary: "A quick summary of where I ran into trouble when adding sort by date to the blog"
tags: "technical-notes"
rated: "boring"
---
I'd scoped out adding a sort-by-date to be a quick 30 minute addition to the blog. In the end it took a little longer, due to some unforseen complications about how I misunderstood how Next/React handles data.

In short, I'd hoped that I would be able to add a quick sort function to the PostList component that renders the blog articles in list form. It proved to be a little more complicated than I expected. The components would only accept serializable content (i.e. something that converts to JSON). The problem was, I was trying to convert my dates to a JavaScript date object, and pass that through the components. This wasn't going to work!

In the end, I had to add the code to the blog page component. 

The first thing I did was write a quick function to take the post data, and use the date string from the markdown headers such as "2020-11-17", and convert this to a Date Object.

    const postsWithDatesConverted = postsRaw => {
        return postsRaw.map(post => {
            post.frontmatter.date = new Date(post.frontmatter.date);
            return post;
        });
    }

Next I needed to sort by date - without it, the list would appear in an order that made no sense at all. An interesting issue I ran into was mutating the data in place when using sort. This again lead to a strange looking sort. To prevent this, a `slice()` of the whole array returns a copy of it for us to work with. Finally, I needed to reverse the array to prevent it being sorted oldest-first.

    const postsSorted = postsWithDatesConverted(postsRaw)
        .slice()
        .sort((a, b) => a.frontmatter.date - b.frontmatter.date)
        .reverse()

Finally, to prevent the problem I mentioned with the components requiring serializable content, I converted the date to a string - I only wanted the date information anyway!

    const posts = postsSorted.map(post => {
        post.frontmatter.date = post.frontmatter.date.toISOString().slice(0,10)
        return post
    })

[Check out the git commit](https://github.com/gregjwild/gregjw-site/commit/d0318643b73c2411bc1159edd996624c21fcb460) if you're interested in seeing the rest of the site's code.