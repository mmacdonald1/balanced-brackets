# balanced-brackets

Today we are going to introduce a new multipurpose data structure. A stack is an Array. When we interact with this array, we will only use the .push and .pop methods.


let stack = [];

stack.push("{") // [{]

stack.push("(") // [{,(]

stack.pop(")") // [{]


This last-in-first-out paradigm does not come up in everyday programming, but can be very helpful for specific use cases such as the following problem.


Given a string containing (), [], and/or {} write a program that returns true or false if the string is balanced. Balanced is defined as having no unmatched brackets and if there are brackets inside the current brackets, those brackets are an opening and closing pair.


Example:
{[()]} - Balanced
{[(])} - Not Balanced
{adf}() - Balanced
)( - Not Balanced
