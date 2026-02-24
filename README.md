### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

1/ getElementById() → Selects one element by ID and returns a single element.

2/ getElementsByClassName() → Selects elements by class name and returns a live list (auto updates).

3/ querySelector() → Selects the first element using a CSS selector.

4/ querySelectorAll() → Selects all matching elements using a CSS selector and returns a static list.

---

### 2. How do you create and insert a new element into the DOM?

Create element using document.createElement().

Add content or attributes.

Insert it using appendChild() or append().

---

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is a process where an event starts from the clicked (target) element and then moves upward through its parent elements one by one.

How it works:
When you click an element, the event first runs on that element, then on its parent, then grandparent, and continues up to document.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding one event listener to a parent element instead of many child elements.

1/ Improves performance
2/ Works for dynamically added elements
3/ Less code

---

### 5. What is the difference between preventDefault() and stopPropagation()?

1/ preventDefault() => Stops the browser’s default action.

1/ stopPropagation() => Stops the event from moving to parent elements.
