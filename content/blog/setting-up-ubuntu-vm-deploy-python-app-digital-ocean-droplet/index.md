---
title: Serving a Python Crontask on a DigitalOcean Ubuntu Droplet 
date: "2019-07-14T22:12:03.284Z"
description: "As a subscriber to the Boglehead philosophy, my portfolio's performance is closely correlated with the S&P 500. As a tech nerd at heart, I wanted to take a crack at fintech..."
author: "Michael Scott Fox"
image: "https://res.cloudinary.com/dgidtgwgr/image/upload/v1561862474/msf_blog/Finance-1.jpg"
---

# A brief detour into Fintech
Typically, my relationship with programming is exclusive to Populus, my apparel crowdfunding side-hustle. While the powers of Full Stack JavaScript are easy to work with, I occasionally get the itch to experiment with other languages for one-off projects. 

Recently, I've been spending a good amount of time learning bash scripting as I continue to build DevOps processes for the Populus Web Client and RESTful API, and I've always wanted to try writing my own Python script...just for the hell of it, I suppose. 



## What we're building
In this blog, I'll do a walkthrough of how I setup a daily email notification for the S&P500 Index using Python, IEXCloud, and a Digital Ocean Ubuntu Droplet. 

This is a guide designed for anyone, but you'll have a leg up if you're familiar with the following:
- Linux Server Administration
- Python 
- HTTP Requests
- 


- Creating a Ubuntu VM
- Installing python, venv, and dependencies
- Signing up for IEXcloud
- Writing python code to output the daily return of SPY
  - explain what SPY is
- Writing python module to translate daily return of SPY to SMTP email
  
#
- Configure your gmail for unique password
- Opening Port 453 for outward traffic
- Test email
- Set as a crontask