# Sprint 10 - Routing

## Overview
This sprint introduces the core concepts of **Routing** in modern frontend applications.  
The goal is to understand how to build Single Page Applications (SPAs) by managing navigation without reloading the page using **React Router v6**, how to implement complex UI layouts using nested routes, and how to transition to the modern, file-system-based routing architecture provided by **Next.js**.

---

# Learning Materials

## React Router v6 Basics

- Introduction to **Client-Side Routing**
- How routing works in Single Page Applications (SPAs)
- Difference between:
    - traditional browser navigation (full page reload)
    - client-side routing (component swapping)
- Setting up the router context with `BrowserRouter`
- Defining route paths and mapping them to components using:
    - `Routes`
    - `Route`
- Declarative navigation using the `Link` and `NavLink` components
- Programmatic navigation using the `useNavigate` hook
- Creating dynamic route paths (e.g., `/users/:id`)
- Extracting path parameters with `useParams`
- Working with query strings using `useSearchParams` and `useLocation`
- Implementing guards to restrict access to certain routes
- Redirecting users using the `Navigate` component

---

## React Router v6 Nested Routing

- Introduction to **Nested Routes**
- Why nested routes are useful for complex applications
- Sharing common UI (layouts, sidebars, headers) across multiple child pages
- Defining child routes inside a parent `<Route>`
- Using the `Outlet` component to specify where child components should render
- Understanding Index routes for default child views

---

## Next.js Routing

- Introduction to **File-System Based Routing**
- Difference between:
    - React Router (declarative, code-based routing)
    - Next.js (convention-based, file-system routing)
- How the `app/` directory defines application routes
- Creating pages using `page.js` / `page.tsx`
- Creating shared UI wrappers using `layout.js` / `layout.tsx`
- Using folder names with square brackets (e.g., `[id]`) for dynamic parameters
- Accessing `params` and `searchParams` via server component props
- Using the Next.js optimized `<Link>` component (`next/link`)
- Programmatic navigation with the `useRouter` hook (`next/navigation`)

---

# Notes

- **React Router v6** is the standard library for adding client-side routing to traditional React SPAs, requiring you to define paths manually in your code.
- **Nested Routing** is a powerful pattern that allows developers to persist layout components (like navigation bars) while only re-rendering the inner content.
- **Next.js** takes a different approach by using the project's folder structure to automatically generate routes, offering built-in optimizations like Server Components and prefetching.