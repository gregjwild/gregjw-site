---
title: "The obligatory post about my blog's rewrite"
date: "2020-11-16"
status: "draft"
summary: "I rewrote the blog in Next.js"
---

> Most importantly, it's a place to start publishing writing, which is above and beyond the vital role of a blog!

Thus said Greg in... September last year. I then promptly failed to write anything. Time to fix that, and of course, I decided to start by rewriting the blog engine. 

Something that frustrated me with using Gatsby for the blog last time around was the extra layers of headache I needed to consider. Graph QL was the main one, especially as I want to start adding other types of content to gregjw.com, as well as blog articles. 

Everything holds true of my requirements before. For the reader that means:
- They should be clean and easy to read.
- They should load fast.
- No ads.
- Navigation should be easy.

For me:
- They should be easy to add content to.
- I'd like to have the ability to add more bespoke pages to the site over time, particularly allowing me to use D3.js for data visualization.
- I'd like to minimize the amount of clientside JS where possible.
- I'd like to actually understand the tech stack. I am not a great software engineer, and troubleshooting problems is not my forteit.

I think the rewrite helps more with me. Based on the way Next has a server compared with Gatsby (which just generates a static site for me), I've got more freedom. I also feel like there are fewer layers of abstraction to understand with Next: it's basically just an opinionated React framework, so if I understand React, I should be able to understand Next. So far, misunderstandings have been minor.