import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

// ✅ Load initial state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('booksState');
    if (serializedState === null) {
      return undefined;
    }
    return { books: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;
  }
};

// ✅ Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.books);
    localStorage.setItem('booksState', serializedState);
  } catch {
    // ignore write errors
  }
};

const store = configureStore({
  reducer: {
    books: booksReducer
  },
  preloadedState: loadState(),
});

// ✅ Subscribe to store changes and persist to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export { store };
