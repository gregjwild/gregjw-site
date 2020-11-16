---
title: "The obligatory post about what I made my blog with"
date: "2019-09-22"
updated: "2020-11-15"
status: "published"
summary: "I originally wrote the site in Gatsby. Plot-twist! It's now using Next.js instead."
---
I seriously considered building this in pure HTML & CSS. Blogs should only ever be as complicated as they need to be. Requirements are simple:

For the reader:

- They should be clean and easy to read.
- They should load fast.
- No ads. 
- Navigation should be easy.

For me:

- They should be easy to add content to.
- I'd like to have the ability to add more bespoke pages to the site over time, particularly allowing me to use D3.js for data visualization.
- I'd like to minimize the amount of clientside JS where possible.
- I'd like to actually understand the tech stack. I am not a great software engineer, and troubleshooting problems is not my forteit.

HTML & CSS would have covered all of this, to an extent. The first of my requirements isn't too worrysome. It would have been easy enough to convert Markdown to HTML and just upload the new article as a new page on the site. The problem is, this came into conflict with one of my reader requirements: navigation should be easy. I didn't really want to add a table of contents page they would have to visit in order to change page, but rather some kind of menu. Updating that menu by hand every time I added an article would have been a burden. Of course, I've yet to add that menu, but it'll happen eventually.

## Enter Gatsby & Netlify

I didn't want to opt for a full blog engine like Wordpress or Ghost, so a static site generator (SSG hereafter) made sense. I know React, so using a React based SSG made sense. I'd also done a little with Gatsby before, so that reduced the cognitive burden further. Decision made. 

The official Gatsby tutorial is a guide on how to build a blog, which I decided to follow through, since I'd not used Gatsby for a year or so, and felt like a refresher would be good. The main part that made me uncomfortable was the use of CSS in JS. While I'm by no means a CSS zealot, reducing the number of components in the stack to just things I understand warranted removing it. The principles are fairly simple, but in the end I decided to go with CSS modules.

Now, for hosting. I didn't want a complicated tool chain. Anything that gave me `git push` to get content out there would work best. I considered AWS Amplify, and Netlify. Netlify won in the end purely on the grounds there are more tutorials for it. I don't expect tens of thousands of visitors any time soon, so this felt like a good choice, and one I think I could fairly easily change if needed down the line.

## Current state
Right now, there is a lot to improve on. I've got some layout ideas to develop, but it looks okay on mobile, tablets, and desktop devices for now. 

I haven't got any analytics on here currently. A few reasons why:

- I'm probably not going to get much traffic for a while. Single digit daily page views are kind of a bummer, so I'll just pretend I'm bringing in the numbers.
- I don't want to use Google Analytics. It's total overkill for a personal blog.
- I don't really need to use any behavioral analytics right now, and I'm skeptical I ever will. Sorry about that, esteemed colleagues at Hotjar! 
- You don't need a privacy policy if you're not collecting private information. rollsafe.jpeg
- I'll either need to pay for a service, or host one myself. 

Still, I'm totally not above having my ego stroked (let's face it, until you have something to sell, that's all personal blog analytics are about!), so if you're reading this and like it, follow me on [Twitter maybe](https://twitter.com/gregjwild). 

Most importantly, it's a place to start publishing writing, which is above and beyond the vital role of a blog!