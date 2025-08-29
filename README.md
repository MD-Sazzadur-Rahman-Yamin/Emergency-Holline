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

**Qustion-3: How do you create and insert a new element into the DOM?**