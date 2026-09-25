# Dev Stack Builder

Dev Stack Builder is a modern, responsive web application that enables developers to explore, compare, and organize their ideal frontend, backend, database, and tooling technologies side by side.

## Live Project

- **GitHub Repository:** [https://github.com/your-username/A-5-Dev-Stack-Builder](https://github.com/your-username/A-5-Dev-Stack-Builder)
- **Live Site:** [https://your-live-site.netlify.app](https://your-live-site.netlify.app)

---

## Technologies Used

- **React.js** (v18+)
- **TypeScript**
- **Vite**
- **CSS3**
- **JSON** (Asynchronous data fetching via `fetch` API & Vite URL assets)
- **React-Toastify**
- **Git & GitHub**

---

## Main Features

1. **Technology Collection:** Explore categorized technologies featuring icons, ratings, categories, badges, and difficulty indicators.
2. **Personal Development Stack:** Dynamically add technologies to a persistent sidebar with duplicate detection and single-click mass or individual removals.
3. **Responsive Design:** Mobile-friendly sticky navigation with menu drawer, fluid flex/grid layouts, and responsive desktop sidebar.

---

## Core React Concepts (Assignment Questions)

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like structures directly inside JavaScript code. It is used in React because it makes building UI structures intuitive and declarative, combining component rendering logic directly with display structure.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from a parent component to a child component. The child component cannot mutate props directly.
- **State:** Mutable, managed data created within a component using hooks like `useState`. When state changes, React re-renders the component.

### 3. What does `useState` do, and where did you use it?
`useState` is a React Hook that declares a state variable in a functional component. It returns the current state value and a function to update it. In this project, `useState` is used in `App.tsx` to manage `stack` (selected items) and `isLoading`, and in `Navbar.tsx` for `mobileMenuOpen`.

### 4. What does `useEffect` do, and why did you need it to load JSON?
`useEffect` allows side effects in functional components. We used `useEffect` in `App.tsx` to perform asynchronous data fetching from `./data/technologies.json` when the app first mounts, preventing infinite render loops.

### 5. Why does every `.map()` item need a unique `key`?
React uses `key` props during its Virtual DOM diffing process to identify which items have changed, been added, or removed. Unique keys ensure optimal re-rendering performance and preserve state stability across list updates.

### 6. What is conditional rendering? Show one place used.
Conditional rendering displays specific UI elements based on runtime conditions.
*Example from `YourStack.tsx`:*
```tsx
{count === 0 ? (
  <div className="empty-stack-state">
    <p className="empty-title">No technologies selected yet.</p>
  </div>
) : (
  <ul className="stack-item-list">...</ul>
)}