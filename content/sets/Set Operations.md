
---
title: Set Operations
description: learning to use union, intersection and others...
tags:
  - operations on set
  - sets
  - venn diagram
draft: false
---
##  are Operations on sets possible??

Yes, operations on sets are very much possible. just as you can add or subtract number, similarly you can use particular operations on set, such as union, or intersection. 
#### Union
the `union` operation is like adding two numbers, 7 plus 2 would be 9. similarly  union of two sets would be sum of both of the sets.

let their be two sets: 
$A = \{1,2,3,4,5\}$ and $B = \{1,7,8,9,3\}$ now the union of both will be $\{1,1,2,3,3,4,5,7,8,9\}$
but since sets dont have no repetition, it will be $\{1,2,3,4,5,7,8,9\}$.

>[!Note]
>the symbol for Union is $\cup$ 

`The union A ∪ B is the set of all elements that belong to A or B`

$$\text{x ∈ A ∪ B if and only if x ∈ A or x ∈ B}$$

### Intersection
the `Intersection` is taking the common of both sets. so like if we say intersection of two cars would be that they all have four tires or that they all contain an engine, and so on.

taking from two set used above $A = \{1,2,3,4,5\}$ and $B = \{1,7,8,9,3\}$  their intersection will be $\{1,3\}$ since only `1` and `3` are the only common elements.

>[!Note] 
>the symbol for intersection is $\cap$

`The intersection A ∩ B of two sets A, B is the set of all elements that belong to both A and B`.

$$\text{x ∈ A ∩ B if and only if x ∈ A and x ∈ B}$$
### Difference
the `Difference` is just as subtracting two numbers but no negative numbers.

again taking from first example  $A = \{1,2,3,4,5\}$ and $B = \{1,7,8,9,3\}$, A \ B would be like taking a intersection and then returning what ever is left. so the answer will be  $\{2,4,5\}$

>[!Note]
>the difference of two sets can be represent in two ways. either `A - B` or `A \ B`

<iframe src="/static/set-operations.html"
  width="100%"
  height="580"
  frameborder="0"
  style="border-radius:12px;border:1px solid #E3D9D1;">
</iframe>


$$S −T ={x:x∈(S∩(T^c))},$$
Notice how intersection and complementation can be used together to create the difference operation.

let $S = \{1,2,3,4,5,6\}$ and $T = \{3,5,6,8,9,13\}$. their difference will be $S-T = \{1,2,4\}$. Now lets find $T^c$  so we can verify if the above equation is correct. 

$T^c = U - T$ and U is equal to $\{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15\}$ so the answer to  $T^c$  would be $\{1,2,4,7,10,11,12,14,15\}$. now $S \cap T^c$  is equal to `{1, 2, 4}`. 

thus we proved that the equation given above is very much true.

### Operator Precedence Rules

1. Other things being equal, operations are per formed left-to-right.
2. Operations between parenthesis are done first, starting with the innermost of nested parenthesis. 
3. All complementation's are computed next. (iv) All intersections are done next. 
4. All unions are performed next. 
5. Tests of set membership and computations, equality or inequality are performed last.

Special operations like the set difference or the symmetric difference, defined below, are not included in the precedence rules and thus always use paren thesis.

##### Operator precedence
_`Since complementation is done before intersection the symbolic definition of the difference of sets can be rewritten:`_
$$S −T =\{x:x∈S∩T^c\}$$
If we were to take the set operations
$$A∪B∩C^c$$

and put in the parenthesis we would get
$$(A∪(B ∩(C^c)))$$

##### Symmetric difference
`_The symmetric difference of two sets S and T is the set of objects that are in one and only one of the sets. The symmetric difference is written S∆T. In curly brace notation:_`
$$S∆T ={(S−T)∪(T −S)}$$

## Related posts

[[Why-Sets]]
[[set-representation]]
[[Venn-Diagram]]

---

*These notes are for understanding concepts only and are not a replacement for your textbook or school classes.*