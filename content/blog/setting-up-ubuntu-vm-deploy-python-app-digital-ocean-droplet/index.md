---
title: Deploying a Python Crontask on a DigitalOcean Ubuntu Droplet 
date: "2019-07-14T22:12:03.284Z"
description: "As a subscriber to the Boglehead philosophy, my portfolio's performance is closely correlated with the S&P 500. As a tech nerd at heart, I wanted to take a crack at fintech..."
author: "Michael Scott Fox"
image: "https://res.cloudinary.com/dgidtgwgr/image/upload/v1561862474/msf_blog/Finance-1.jpg"
---

- Basic intro, establish voice of blog post
- What we're building
- Creating a Ubuntu VM
- Installing python, venv, and dependencies
- Signing up for IEXcloud
- Writing python code to output the daily return of SPY
  - explain what SPY is
- Writing python module to translate daily return of SPY to SMTP email
- Configure your gmail for unique password
- Opening Port 453 for outward traffic
- Test email
- Set as a crontask