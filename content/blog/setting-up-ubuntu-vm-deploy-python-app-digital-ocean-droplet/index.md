---
title: Automating A Financial Report with Python  
date: "2019-07-14T22:12:03.284Z"
description: "As a subscriber to the Boglehead philosophy, my portfolio's performance is closely correlated with the S&P 500. As a tech nerd at heart, I wanted to take a crack at fintech..."
author: "Michael Scott Fox"
image: "https://res.cloudinary.com/dgidtgwgr/image/upload/v1561862474/msf_blog/Finance-1.jpg"
---

# A brief detour into Fintech
Typically, my relationship with programming is exclusive to Populus, my apparel crowdfunding side-hustle. While the powers of Full Stack JavaScript are easy to work with, I occasionally get the itch to experiment with other languages for one-off projects. 

Recently, I've been spending a good amount of time learning bash scripting as I continue to build DevOps processes for the Populus Web Client and RESTful API, and I've always wanted to try writing my own Python script. Since I don't have a fleet of overworked analysts running the hot numbers across my desk, making the computer pick up the slack is nice.


## What we're building

In this post, I'll do a walkthrough of how I setup a daily report for the S&P500 Index using Python, IEXCloud, and a Digital Ocean Ubuntu Droplet. 

Here's a flowchart of what the project does for the user. 

We'll be creating an instance of Ubuntu on a DigitalOcean droplet, writing a Python script to automate the boring stuff, and setting up a crontask to run the report after trading closes in New York.

## Setting up a Server
Now, you can do this project for free on any computer you own, however being able to control a server in the cloud for $5/month is pretty fucking cool. If you already have a Linux machine laying around at home, chances are you don't need this guide anyway.

> But muh security

That's why we're going to generate a new ssh key right now. Crack open your terminal and run the following command 
```sh
cd ~/.ssh
ssh-keygen -b 4096 -C "youremailaddress@gmail.com"
```
Next we want to add this to your agent so we can connect to your new server. 

Go to DigitalOcean and signin with Github, Google, or your email. 


## Installing Dependencies
We're going to be using a variety of tools to help us build this project. We'll need to 
```
- install python
- Opening Port 453 for outward traffic
- install virtualenv
- install .env
```

## Python as a Script
- IEX cloud signup
- Writing python code to output the daily return of SPY
  - explain what SPY is
- Writing python module to translate daily return of SPY to SMTP email
  
- Configure your gmail for unique password
- Test email

## Timing is Everything
- Set as a crontask