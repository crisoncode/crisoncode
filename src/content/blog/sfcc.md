---
author: Cristian Estarlich
pubDatetime: 2023-03-02T15:00:00Z
title: How I started to work in SFCC?
postSlug: how-i-started-to-work-in-sfcc
featured: true
draft: false
tags:
  - Software development
  - eCommerce
  - Salesforce Commerce Cloud
  - SFCC
ogImage: "assets/sfcc.png"
description:
  What is Salesforce Commerce Cloud? How I can start to work in Salesforce Commerce Cloud? My experience as a SFCC Dev for 4 years and a half.
---
![Salesforce Commerce Cloud logo](/assets/sfcc.png)

# How I started to work in Salesforce Commerce Cloud

A few years ago, I started working at an eCommerce consultancy company in Barcelona. My entire career as a developer had been focused on this sector, so when they offered me the opportunity to work with another platform/technology called Salesforce Commerce Cloud, I decided to join the company.

At first, Commerce Cloud was unfamiliar territory for me. There were a lot of new concepts to learn, and I had to shift from PHP to Javascript. The learning curve in this platform is not easy. In other words, during my first three months, I faced challenges without any concrete understanding 🤣. Fortunately, the work environment at this company was excellent, and my colleagues were always willing to lend a hand. 

## The bussines manager

When considering SFCC concepts, the business manager is a crucial component. This admin panel acts as the first point of contact for those working in CC. However, the UI/UX may be somewhat confusing at first. Certain concepts such as content assets or content slots may not be immediately clear, and others like PDP, PLP, or Einstein search may also require further study.

It's important to understand these concepts in order to fully grasp the nature of your daily workload.

## Development Environment and Cycle

To start working in Commerce Cloud, you will need a sandbox environment. A sandbox is a virtual machine in the cloud where you can develop and test your code. Each file you edit should be uploaded to your sandbox instance.

You will also have three more instances:

- 🧑🏻‍💻 Development
    - This instance is for testing and quality assurance purposes.
    - It should have the same hardware resources as the production environment, so that performance tasks and cache issues can be tested here before going live.
- ✅ Staging
    - This instance acts as a funnel for all connections and sends data to production.
        - For example, catalogs from other platforms are uploaded to this instance and then replicated to the production instances.
    - All new developments will be tested here before going live in production.
- 🚨 Production
    - This is your live environment, so it is crucial to take care of it.

One thing to consider is the close relationship between Salesforce and Students plans. If you are interested in working with this technology, it is recommended to join a company that can provide you with the opportunity to study the platform. Currently, there is no specific program for students to learn the platform before joining a company that uses it.

# Technologies

Salesforce Commerce Cloud uses JavaScript for its backend. As for the frontend, there are three options:

1. SiteGenesis:
    - This is the older option, which is no longer supported by Salesforce.
2. Storefront Reference Architecture (SFRA):
    - This option features a mobile-first design and integrates with Bootstrap.
    - It is built with Webpack and has taesting using Mocha/Chai.
3. Headless Commerce:
    - This is the future architecture that Salesforce is currently developing.
    - It allows for a separation of the backend and frontend using Progressive Web Apps (PWA) or a custom frontend like Vue or React.

## Conclusions

One of the most important things I've experienced in Commerce Cloud is the scale of projects. My previous projects before CC lacked budget and marketing plans, which made me feel like my efforts and code were for nothing.

The license costs that Salesforce puts on each project act as a filter, allowing developers to see how their features will be used by a greater number of customers.

However, there are downsides to working with Commerce Cloud. The biggest issue, for me, is the isolation from other technologies like React, Scala, Symfony, and Kotlin.

Fun and trendy ways of working in the software industry, such as TDD and continuous integration, are difficult to implement in Salesforce. The platform's main objective is to create solutions, not build infrastructure or write complex queries. For example, if you need a specific data query, you don't need to figure out how to write it - Commerce Cloud already has the data you need bound to an object.
