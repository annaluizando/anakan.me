---
title: "what ai driven development means for software engineers"
description: "How software engineering is changing for the market perspective"
date: "2026-02-16"
slug: "ai-driven-development"
---
# what ai-driven development really means to software engineers

## Introduction

If you don't live in a cage and specially if you use Linkedin, you must have heard of how software development positions are changing from market perspective...First lay-offs estimulated by AI (sayings that AI would replace developers), and now, a change of view of what is the software developers role in application development, or better, what is the role in product development

## Disclaimer

I know this is nothing disruptive or new, it's in fact something that has been widely debated currently in social media, specially linkedin but i wanted to share my personal point of view anyway because, coding by hobby but specially working daily with software development made me realize in practice what all those posts and talks about development x AI mean for a software engineer

## The blablabla you already know

As someone that started studying and working with software development 3 years~ ago, I've the feeling i experienced the shift of the artificial inteligence use in software development, first models of chatgpt where just been released and it was the increasing hot topic, it was getting more and more visibility. I started coding seeing video lessons, making projects while seeing video tutorials and in college classes, after some months, i started using chat gpt as an auxiliar for my beginner projects, coding and asking punctual questions, then sending code slices, sending to it, copying code response and pasting on vscode, 2 years after i finished college and started working, and after many time of skepticism about code-aware AI/AI tools integrated with the code, I started using one of those tools.

Of course, it helped a lot to deliver in less time, helped doing things and features I had no idea how to do and make things that would take much more time if doing by myself, but also made me increasily uncomfortable about how i seem to be losing ownership about my code/project and how quickly it was growing.

And that's the thing about making code heavily assisted by AI, I know a bunch of people says different stuff, I've heard a lot of people say stuff like "The code your AI generates mimics the quality of your prompt and how well you ask" but I don't agree on that saying...I may not have that many time on software developement but my take is that it always was a complex thing, not in the sense that it's difficult to do/learn but in a sense that there's many factors you have to always be paying attention when doing a project/product and it's always susceptible to errors and flaws, so, when we put AI in the game, which means, when we accelerate this process, we make it even messier and dangerous.

/Factors to take into account:
- AI bases it's code generation into your current codebase;
- AI is trained with other codes, which means bad code for sure, in many ways;
- Your prompts need to be good;
- You need to know what you're doing;
- You need to know what you want to do;
- Speed != good results;

## Code generated is based into your current codebase

If you're going to use the AI agent on a codebase that already exists, it's very likely that it's a big and stablished codebase, which means, in the real world that is probably full of mistakes, bad practices and replicated code. The thing is, when AI is going to generate new code based on your prompt, it looks into your current code searching for patterns and stuff it needs to follow to keep the new code in same pattern as already existing code, and when it does that, it may replicate the bad patterns you have and is usually what happens.
The best case-scenario here is one where your code is widely documented and has many automated tests, plus ai rules, all to serve as foundation to the new generated code, ai receives prompt, looks into the project, finds documentation and automated tests, has good quality code, generates new code and a software engineer reviews it.

Even with all that, errors may happen but from my personal experience, that seems to be the best case scenario for AI use.

## AI is trained with codes, which means bad code

One thing that where always widely debated in the tech field is code quality, clean code, good coding practices, and if that debate exists, that is a signal that code, in it's majority is bad, not clean and need many improvements. By other side, AI, to be trained, needed as much data as possible to feed itself from, existing code snippets, code cases and codebases in order to have fundaments to generate and reproduce new code, which means codes with many coding practices, mostly with not so clean architectures and approaches, which means the new codes to be generated are going to multiply the bad practices, specially if not reviewed by someone who know what they're doing and what are good practices.

And when I say bad code i don't say only clean code, code repetition and good practices but also insecure code practices too, which is already being other topic widely discussed with the rise of the so-called "ai-driven developement".

## What? How? Why? 

You need to know what you want to do; (What?)
Your prompts need to be good; (How?) 
You need to know what you're doing; (Why?)

How it has already been said, AI is trained with many types of datas, even your on codebase can be messy/bad and you need to know how to manage the new code to avoid all types of undesired results.
Bad code, code repetition, wrong business rules, you've to have a good knowledge not only in good coding practices, but also what are the business rules of your product and which results you want to generate from the new code, always be attentive if AI is alucinating, for example, trying to keep it simple, when you ask AI to generate translations, it can allucinate and create wrong translations or maybe too literal ones, also e attentive if it is creating new business rules you didn't ask for, if it is repeating code unecessarily, if it is using the best approach for something or complicating it too much, generating code that is hard to read/understand...

And never, ever, think vibe coding is a good solution. Shipping code purely generated by AI, without reviewing it is one of the worst choices that can be made on the long term, if even when we ship code that had good prompts, reviews, etc, we can have many problems as bugs, spaguetti code, code repetition and vulnerabilities, imagine what can happen without all this

That's why, when coding with AI, you need to use it like a tool, to support, always with review, always knowing which result you want to accomplish and making clear prompts to it.

## Speed != good results

AI driven development has not only changed the way software engineers develop code but also changed delivery expectations, which where already unrealistic and highly demanding, now deadlines are shorter, time for new features are 1 day tops. Market will always want more profit, the most lucrative approaches, with AI as an excuse to make new features faster, increase of profit, more exploitation of the workers, best for them, so that's what happens, the word spread is that AI is the new hot thing that makes software developement faster, and best, makes you need less developers (or even none, as they say that now you can vibe-code apps entirely), the expectation for the software engineers is that they deliver many features in the shortest time as possible, rushing the developer, which creates a tendency for them to not review AI generated code and not think about best practices.

(of course, there's always the person part/responsability in this proccess but, generaly speaking)

## What it all means to software engineers?

With all those factors in mind, it becomes more clear to me that software engineers are beginning to look, to the market, more as a mix of QA's+Product Owners+Prompt engineers, instead of someone that makes code, make architectural decisions and articulates with other teams. 

Of course that relies a lot on the company's culture and way of thinking regarding the tech team and leadership but, in general, that's the turn i've seen software engineering positions turning into, more pressure to test thoroughly, deeply understand the product and publicly showcase our work. 

In most of the cases now, being technically good is not enough, more than ever.
