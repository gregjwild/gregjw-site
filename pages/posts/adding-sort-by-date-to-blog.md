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

In the end, I had to add the code to the blog page component. ![Check out the git commit](https://github.com/gregjwild/gregjw-site/commit/d0318643b73c2411bc1159edd996624c21fcb460) if you're interested.