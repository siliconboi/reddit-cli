#! /usr/bin/env node
 
import open from "open"
import yargs from "yargs"
import fetch from "node-fetch"

const {argv} = yargs(process.argv)

let post;
if(argv.r){
        
const res = await fetch(`https://www.reddit.com/r/${argv.r}/.json`)
const data = await res.json()
const rand = Math.floor(Math.random()*data.data.children.length)
post = data.data.children[rand]
}
else{
    const res = await fetch("https://www.reddit.com/.json")
    const data = await res.json()
    const rand = Math.floor(Math.random()*data.data.children.length)
    post = data.data.children[rand]
}
if(argv.print){
    console.log(`
    Title: ${post.data.title}
    Subreddit:${post.data.subreddit}
    Link: ${post.data.permalink}`)
}
else{
    open(`https://reddit.com${post.data.permalink}`)
}