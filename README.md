# factorial-tail-call-optimisation

#### Application Overview ?
It's a console based application to find factorial of any **integer number** and it is based on a concept of **Tail call optimisation**. It allows you to get factorial until you press **Q/q** to exit. 
The app is capable to calculate factorial of any large number and will never give any **stack overflow error**. If the answer is out of range, then it will return **Infinity**.

#### How to run this application ? 
- Install dependencies. Run `npm install`.
- Once dependencies installed then, Run `npm start`.

#### How to test this application ? 
Run `npm test`.

#### **What is Tail Call Optimisation ?**
>[StackOverFlow](http://stackoverflow.com/a/310980) : Tail-call optimization is where you are able to avoid allocating a new stack frame for a function because the calling function will simply return the value that it gets from the called function. The most common use is tail-recursion, where a recursive function written to take advantage of tail-call optimization can use constant stack space.
>As per [Wikipedia](https://en.wikipedia.org/wiki/Tail_call) In computer science, a tail call is a subroutine call performed as the final action of a procedure. If a tail call might lead to the same subroutine being called again later in the call chain, the subroutine is said to be tail-recursive, which is a special case of recursion. Tail recursion (or tail-end recursion) is particularly useful, and often easy to handle in implementations.