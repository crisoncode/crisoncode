---
author: Cristian Estarlich
pubDatetime: 2023-02-11T11:56:00Z
title: Pair programming
postSlug: pair-programming-in-2023
featured: true
draft: false
tags:
  - Software development
  - Software
  - Programming
  - Programming technics
  - Pair programming
ogImage: ""
description:
  What is pair programming? How can we apply it in our daily work? Pair programming can give a lot of value to a software development team.
---


## 〽️ Pair programming

What exactly means Pair Programming?

> *Write **all** the production code with two devs only in one machine*
> 
> Kent Beck , eXtreme Programming 2004


Pair programming is a social activity, and it is important to be empathetic with your colleagues. The first attempt may be a complete disaster.
 
The first thing to keep in mind is our current mindset as developers. 
Our daily work is a team effort, meaning that 90% of the code we work with was made by another developer. If our work is a team effort, why do we work in isolation when coding?

Because it's a habit, when you started to code, probably in the university or on your own, you did it in isolation. Nobody explained the benefits of coding with colleagues, or maybe someone did explain it, but you didn't try it. Coding alone certainly has its benefits and can be enjoyable. For example, in my personal projects, I love to code at night. The pleasure of working without interruptions and creating your own "mental world of code" is like being in the Matrix.

![Pair programming - Cypher, Matrix 1999](/assets/cypher.jpg)
>“...there's way too much information to decode the Matrix. You get used to it, though. Your brain  does the translating. I don't even see the code. All I see is blonde, brunette, redhead….”
> Cypher, Matrix 1999

I have felt like Cypher on numerous occasions, and it's an amazing sensation. However, getting back to the main topic, we have developed a habit of working alone, which is difficult to change. When you start working in pair programming, you may encounter some bad behaviors that you will have to constantly fight against. These include focus issues, coding in silence, and not explaining what you are doing. It's not easy to change these habits, but why should you do it? Let me try my best to explain.

### 🥇 **What values gives the pair programming to us?**

👁️‍🗨️ ***Mantain the focus in a task***

It may sound strange at first, but working with people may actually help you become more focused on coding. If the developers you work with are engaged with this technique, it's obvious that focus will improve. It can be disrespectful, for example, to answer a message on your phone or interrupt the flow with a silly meme.

💡 ***Generate better ideas (Two minds thinking)***

One thing that can quickly yield results is talking about a problem. When you verbalize a problem, your brain tries to express the actual problem in words. In this process, you may come up with some solutions. Additionally, your workmates can listen to you and discuss your point of view, which is one of the most important aspects.

🧠 ***Clarify ideas and share knowledge***

As I mentioned earlier, it's important to explain your problems before starting to find a solution. This will give you the opportunity to clarify your thoughts and the current problem you're thinking about. If you can't explain the problem out loud, it means you don't understand it well enough.

✋🏻 ***Take the initiative when the other is a bit frustrating or lost***

It's a common situation in our work to become frustrated with a persistent bug, for example. Having a coworker who can assist you with it is appreciated, and you can also help your coworker when they are struggling.

🚨 **M*antain mutually the alert about team practices***

IMO*, reviewing code on-the-fly is a more efficient way to conduct code reviews instead of  reviewing code in parallel, you can quickly identify bad naming conventions or methods that do not follow SOLID principles. This allows you to provide direct feedback and minimize the feedback loop.*

---

## 🔎 Types of pair programming

Over the time, the industry created a lot of ways to work in pair programming, I’ll explain here which are the most famous ones.
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>

### 🚖 **Driver / Navigator**
&nbsp;<br>

*🚗 **The driver:*** 

The driver is responsible for writing the code, typing at the keyboard and implementing the ideas. 

🎯 Focus in code, writting pieces like methods, etc..

🗣️ Speaks about all the things that he/she is doing

🧑‍💻 Vision of the current task
&nbsp;<br>
&nbsp;<br>

***🗺️ Navigator:***

The navigator, on the other hand, is responsible for reviewing the code, checking for errors, and suggesting improvements to the driver. The navigator can also help the driver with research, clarification of requirements, and finding documentation.

👂 Observe, accompanies and check “on-the-go”

🧩 More strategic vision (next steps)
&nbsp;<br>
&nbsp;<br>



### 🏓  PingPong

Can remember test driven development but in this case with a workmate.	

1. 🧪 One dev writes the test
2. 👩🏻‍💻 One dev writes the implementation
3. *🔎 Refactor (Optional)*
4. ↪️ Rotate
&nbsp;<br>
&nbsp;<br>


### 💪 Strong-style pairing

When someone is too much junior and is working with someone that have experience.
&nbsp;<br>

*🚗 **The driver:*** 

🤨  Full trustability in the navigator

🗣️ Feel comfortable with a lack of information


***🗺️ Navigator:***

👂 Think and giving the next instruction 

🧩 Level of abstraction that is enough to be understanded 

✅ I*t’s a bit dangerous because in somecases can be felt as  micromanagement.*

✅ *It’s more focused for formations, mentoring process for juniors, etc..*
&nbsp;<br>
&nbsp;<br>

### 🕵🏻 Pair development

The tasks that we’re doing on each day not implies only code, we spent  time in other things, this method does not have a definition.

You should be creative in this cases making a mix of the other ones (or creating your method)

🌎 Planification 

✍🏻 Documentation

🗺️ Explorations and investigations

---

## **🕧 Timing**

The Management of time here is important for not loose the focus and improve the productivity.

- You should switch the roles in cycles of 10 to 20 minutes
- Make pauses and take rests of 5-10 minutes.

**Rotations**

- In my opinion, the best approach is to assign workmates on a weekly basis. However, in your workplace, it may be better to switch every two weeks. Conduct some tests to determine which option works best for you.

---

## Common mistakes 

- **Micromanagement 🕵🏻**
    - Be careful with the level of detail you provide when you're the navigator.
    - In some cases, when your coworker lacks knowledge, it makes sense to be more detailed, but this should always be consensual.
- **Don't plan the day 📆**
    - Before starting a pairing session, explain your day, including meetings or appointments.
    - Define the goals for the day.
- **Have enough time for scoring goals** 🥅
    - Sometimes, for various reasons, one of the two developers involved does not have enough time to complete the task from start to finish.
- **Don't hide your feelings 🔋**
    - Maybe you're having a bad day. Just say so.
- **Loose the focus 🐰**
    - In some cases, we may be talking about something unrelated to the task at hand. For example, we may be working on something on the frontend and see a new library over the weekend that may be interesting, but we should avoid such distractions.
- **Impatience 😠**
    - The 5-second rule:
        - If you see something wrong, wait 5 seconds before saying anything.
- **Tools ⚒️**
    - If something isn't working, such as Live Share, try to find a workaround.
    - Mute your notifications to avoid focus problems.
- **Do all the things in pairing** 🤦🏻‍♂️
    - Determine when it's not necessary.
        - Typical work that is recurrent and everyone knows: updating properties.
- **Time for other things** ⌛
    - *Let's work for 10 more minutes, and then take a 15-minute break.*
- **Diversity and empathy** 🤗
    - Maybe your coworker is introverted. Take care of that and understand their character.
- **Don't have in mind the skills and levels 🎚️**
    - For example, if you're the navigator and you're working with a junior developer, speak a bit slower, and ask if they understand what they're doing, and so on.
