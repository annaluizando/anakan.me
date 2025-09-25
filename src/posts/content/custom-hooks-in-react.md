---
title: "Custom Hooks in React"
description: "How to create reusable logic with custom React hooks"
date: "2025-03-10"
slug: "custom-hooks-in-react"
---

# Custom Hooks in React

Custom hooks are a powerful feature in React that allows you to extract component logic into reusable functions. They follow the same rules as regular hooks and can call other hooks.

## What are Custom Hooks?

A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks. They allow you to:

- Extract component logic into reusable functions
- Share stateful logic between components
- Keep your components clean and focused

## Rules of Hooks

When creating custom hooks, remember:
1. Only call hooks at the top level
2. Only call hooks from React functions
3. Always start the function name with "use"

## Example: useCounter Hook

Here's a simple custom hook for managing a counter:

```jsx
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using the custom hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Example: useLocalStorage Hook

Here's a more advanced custom hook for managing localStorage:

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
```

## Benefits of Custom Hooks

1. **Reusability**: Share logic between multiple components
2. **Separation of Concerns**: Keep components focused on rendering
3. **Testing**: Easier to test isolated logic
4. **Code Organization**: Better structure and readability

## Best Practices

- Keep custom hooks focused on a single responsibility
- Use descriptive names that start with "use"
- Document your custom hooks
- Consider the dependencies array in useEffect
- Handle edge cases and errors appropriately

## Common Custom Hooks

Some popular custom hooks you might want to create:
- `useFetch` - for API calls
- `useDebounce` - for debouncing values
- `useToggle` - for boolean state management
- `usePrevious` - for tracking previous values

Custom hooks are a great way to make your React code more modular and reusable. Start with simple hooks and gradually build more complex ones as you become comfortable with the pattern.
