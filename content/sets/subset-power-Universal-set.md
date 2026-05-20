
---
title: Subsets, Power set  and Universal set
description: part of, broken down and everything set is all you need to remember.
tags:
  - sets
  - types of set
draft: false
---
### Empty set
empty set is the most intuitive and unintuitive thing in sets. We all know that their must be a set which is empty. the empty set contains nothing but has one property, it belongs to every set in mathematics.

> [!note]
> $\varnothing$ or $\Phi$ represents the empty set.
> $\varnothing$ or $\{\} \in \text{any set in mathematics}$
> _more explain in_ Power set 

### Equality and Equal sets

how two sets are measured to be equal?? you may think the length of set, meaning how many elements are in that set. for example any empty set $\varnothing$ will not be equal to anything set that is not empty. since the have something. But what about $A = \{1,2,3\}$ and $B = \{4,5,6\}$, both have the exact number of elements, `3`. So, are they equal?? No since they dont have the exact elements too. in the case of $Y = \{1,2,3\}$ and $X = \{1,2,3\}$ they contain the exact elements, `1, 2, 3` so they ARE equal. 

so we can say that:
`if every element of A is also an element of B and if every element of B is also an element of A, then the sets A and B are said to be equal.`

>[!Note]
>Equality is represented using: $$A = B$$
>and inequality is represented using: $$A \neq B$$
## Subsets

subset are sets that are `part of` or `belong to` another set. if every element of set `A` is present in set `B`, then we may say that A is subset of B.

>[!Note]
>we denote this mathematically with  $\subset$, like if $$A = \{1,2\}$$ and $$B = \{1,2,3,4,5,6\}$$
>then we can say that `A` $\subset$ `B`
>here A is proper subset of B since A $\neq$ B.

empty sets are subsets of every set set since empty set has no element that can violate this condition. thus 
$$\varnothing \subset \text{every set in mathematic}$$
#### Proper and equal subset/improper ;)
let expand on the term proper subset. when a set is just a subset/ a part of set only and not the set itself then, it is a proper subset. in the bookish language we might say: `A is subset of B, but A is not equal to B.`
$$A \subset B$$ $$A \neq B$$
on the other hand equal subset or improper subset means that, not only A is subset of B, but it is B, if you think about it... so the definition will be: `A is subset of B, and A is equal to B.`
$$A \subset B$$
$$A = B$$
thus:
$$A \subseteq B$$

## 

## Try it yourself

**Problem 1:** Is $A = \{x,y,z\} \subset B = \{x, y, c\}$ ??

> [!tip] Solution
> Since element `c` is not in A and element `z` is not in B we will say that: $$A = \{x,y,z\} \not\subset B = \{x, y, c\}$$
> 

## Common mistakes

their can be confusion between elements and subset. Here are few common ones.
##### Elements
when an element `belongs to` a set we denote it as 
$$1 \in \{1,2,3,4,5,6\}$$

but what if the element is not like this `1` but more like this `{1}`. if the element is a set itself then what. 
$$\{1\} \in \{1,2,3,4,5,6\}$$

will this be correct??? the answer is not, since when using the $\in$ we mean elements or sets that belong to another set, but here their is not element/set `{1}` in the set `{1,2,3,4,5,6}`.  you might be tempted to say but if we like compress this or remove every element of the set other than one we might be able to say that, right??

$$\{1\} \in \{1\}$$
yeah.... NO! this is not correct, we are not saying that, is the set `{1}` subset of `{1}`. which will be very correct, but that's not what we are saying. we are saying if element `{1}` is in set `{1}`, which it is not. here is why. 

let me first give a small example: 

>[!Reminder]
>we talked about the fact the 
>$$\varnothing \in \text{every set}$$
>$$\varnothing \text{ is same as \{\}}$$

thus, taking from previous example we can say that $\{1, \varnothing\}$ which can be represented as $\{1, \{\}\}$. You can see curly braces `{}` inside curly braces. What this means is that we have to write that as 

$$\{1\} \in \{\{1\}\}$$

and the other one be: 
$$\{1\} \in \{\{1\},2,3,4,5,6\}$$

## Power set

By Power set we mean that we write all the possible subsets of a particular set. So for example $A = \{1,2\}$ we have to list all its subset. it would be $\{\varnothing , \{1\}, \{2\}, \{1,2\}\}$. As you can see all of these are subset of A. 

_`Definition:`_  The collection of all subsets of a set A is called the power set of A. it is denoted by P(A).

> n(some set) means number of elements in that set.
> so for example n(A) here would be `2`

>[!Note]
> $$\text{P(A)} =  \{\varnothing , \{1\}, \{2\}, \{1,2\}\}$$
> since P(A) would be a set itself, $\text{n[P(A)]}$ would mean that number of subsets of set A.
> $$\text{n[P(A)]} = 4 = 2^2$$

In general, if A is a set with n(A) = m, then it can be shown that $\text{n[P(A)]} = 2^m$

Try it yourself — type any set and hit Compute (or press Enter):

<iframe src="/static/power-set.html"
  width="100%"
  height="520"
  frameborder="0"
  style="border-radius: 12px; border: 1px solid var(--m-border);">
</iframe>

## Universal set

A **universal set** is the set that contains **all objects being discussed** in a particular problem. It is usually denoted by `U`.

>[!Example]
> suppose we have two sets `A` and `B`. 
> $$A = \{1,3,4\}$$
> $$B = \{1,5,2\}$$
> the Universal set here will be `N` set of all natural numbers, since every number here is natural number.

every set discussion is a subset two Universal set `U`. so $A \subset U$ and $B \subset U$.

also note that universal set depends on context, for example if we talk about natural numbers then the universal set will be `N` set of natural number, or if we talk about real numbers then our universal set will be `R` set of real numbers.

## Related posts

[[Why-Sets]]
[[set-representation]]
[[Venn-Diagram]]

---

*These notes are for understanding concepts only and are not a replacement for your textbook or school classes.*