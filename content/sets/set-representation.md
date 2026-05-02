
---
title: Can you **REPRESENT** sets in other ways too???
description: "Learn the two ways to write a set: roster form and set-builder form."tags:
  - sets
draft: true
---

> [!Reminder]
> a Set is a well-defined collection of objects, and it has similar pattern..
> $$A = \{1,2,3,4,5,6\}$$


their are two ways to represent a set. 
- ### Roster form
roster form is like attendance in school, name of every student is mentioned. similarly in math we do the same thing. we mention each and every element of that set. this is to be noted that this can not happen when:
- the length of set is small, meaning it can be written down in a feasible manner on the notebook.
     example of this would be like: "write down set of million natural numbers."
     here the numbers is finite, thus it is theoretically achievable to write down a million numbers, but is it actually do able and **sensible**?
- the set is infinite. 

example of class attendance call:

> $$class Attendence = \{James,William,Henry,Alexander,Benjamin,Charlotte\}$$


example of mathematical set with integers:

> $$X = \{-3,-2,-1, 0, 1,2,3\}$$
- ### Set-Builder form
the builder form is like mentioning a short description and properties of the set in one line while being very precise. In this all the elements in that set have common property, which is not possessed by any element outside the set. 

for example, let say set of vowels. now first, vowels are a, e, i, o, u. now no other letter in english is vowel other than these. so we know that by vowel we only mean this and nothing else in english letters.

> $$V = \{a, e, i, o, u\}$$

to represent this in builder form since the example above as you noticed is `roster form`. 


$$V = \{x \mid x \text{ is vowel in english language}\}$$
note that both are basically the same set `V` but their representation is totally different. you might ask why we should even you `set-builder form` since in the example i gave you this is bigger and more complex and confusing, this is so... in few cases where you can represent and write all the element of the set in the set, but in case of natural number `N` or real number `R` we cannot represent em all.

>[!Note]
>I will give you python code which you will copy and paste it in [Python Tutor code visualizer: Visualize code in Python, JavaScript, C, C++, and Java](https://pythontutor.com/visualize.html#mode=edit)
>this website will allow you to visualize how the sets might work and get deeper understanding of sets and conditioning.
 
```Python
sets = []
for number in range(101):
    sets.append(number)

print(sets)
```

>[!Note]
> `[]` is actually lists in python but since the real sets in python cannot be change we used list but it is doing the same thing.

```Python
sets = [number for number in range(101)]
```

This is how it will look in python `comprehension` / `set-builder`.
## Try it yourself

**Problem 1:**  Write the solution set of the equation  $x^2 + x - 2 = 0$ in roster form.
_i want you to see that sets are not isolated and connected to every math concept, eg quadratic equations_ 

> [!tip] Solution
> The given equation can be written as $$(x-1) (x + 2) = 0, \text{ thus }\ x = 1, -2 $$
> therefore the solution set will be `{1, -2}`
## Related posts

[[other-post-slug]]

---

*These notes are for understanding concepts only and are not a replacement for your textbook or school classes.*