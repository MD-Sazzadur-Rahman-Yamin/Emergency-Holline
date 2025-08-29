# Emergency-Holline

**Qustion-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Answer: There is the difarence between getElementByID, getElementsByClassName and querySelector / querySelectorAll :
**getElementById**
It select one element using one unique ID.
**getElementsByClassName**
It select all element by a spasific class name.
**querySelector**
It select the first element using CSS selector.
**querySelectorAll**
It select all element using CSS selector.

**Qustion-2: How do you create and insert a new element into the DOM?**
Answer:

//Select the parent node
const parent = document.getElementById(idName);

//Create the child node. For example I create a paragraph element. And add contant on it.
const newParagraph = document.createElament('p');
newParagraph.innerText = 'This is a new paragraph';

//append the chile node to parent node.
parent.appendChild(newParagraph);

**Qustion-3: What is Event Bubbling and how does it work?**
Answer: Event Bubbiling is a concept in the DOM. It says where an event starts at the target element and then bubbles upward and target parentNode.

**Qustion-4: What is Event Delegation in JavaScript? Why is it useful?**
Answer: Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements.

Why is it useful?
1. Performance: Fewer event listeners = better performance, especially with many child elements.
2. Dynamic Elements: Works even if new children are added later (no need to reattach listeners).
3. Cleaner Code: One listener instead of many is easier to manage and debug.

**Qustion-5: What is the difference between preventDefault() and stopPropagation() methods?**
Answer:
preventDefault() stops the browser's default behavior
stopPropagation() stops the event from bubbling up to parent elements.