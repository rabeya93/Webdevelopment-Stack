DevStack — Build Your Ideal Development Stack

An interactive web application that helps developers explore different technologies and build their ideal development stack. Discover frontend, backend, database, and development tools in one place.

Features
1. Technologies with different description rating and their categories
2. Identify difficulty level and key information of specific technology.
3. Organize your preferred development stack in one place

Technology Used
1. React.js
2. TypeScript
3. TailwindCss
4. JavaScript
5. JSON
6. React-Toastify (NPM Package)
7. Vite(build tool)

FAQ
1.What is JSX, and why is it used in React?
ans: JSX is a syntax used to write HTML code inside js and used in react to make components easier to write and understand.

2. What is the difference between props and state?
ans : props is data that passed fro parent to child like argument in function and State is how a data managed inside a component(can change)

3. What does the useState hook do, and where did you use it in this project?
ans: useState is a hook that use to store changing data , In this project i used it on Navbar to track the active link and control the menu to open and close.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
ans: After rendering a component, useEffect runs as side effect.It requires while fetching the JSON data when a components load and update the state the data arrives.

5. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs side effects after a component renders. It can be used to fetch JSON data when a component loads and update the state when the data arrives.

5. Why does every item in a .map() list need a unique key prop?
ans: A unique key helps to identify each item efficiently while items change during updating.

6. What is conditional rendering? Show one place you used it.
ans: conditional rendering is showing something only when it's true. For example, the stack area can show an empty-stack message when no technologies have been selected.

{stack.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <StackItems items={stack} />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ans: By using props we can send data from parent to child and to send info back , parent pass a callback function as props and child can call that function. 
For example, a parent can pass an onAdd function to a technology card. When the user clicks Add to Stack, the child calls onAdd(tech), allowing the parent to update the selected stack.
