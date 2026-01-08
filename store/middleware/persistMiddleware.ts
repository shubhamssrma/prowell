import { Middleware } from '@reduxjs/toolkit';

// Keys for localStorage
const PERSIST_KEY = 'user_state';

// Load state from localStorage
export const loadState = (): unknown => {
  try {
    if (typeof window === 'undefined') return undefined;

    const serializedState = localStorage.getItem(PERSIST_KEY);
    if (serializedState === null) {
      return undefined;
    }

    const parsedState = JSON.parse(serializedState);
    // console.log('📦 Loaded persisted state from localStorage:', parsedState);
    return parsedState;
  } catch (err) {
    console.error('❌ Error loading state from localStorage:', err);
    return undefined;
  }
};

// Save state to localStorage
export const saveState = (state: Record<string, unknown>) => {
  try {
    if (typeof window === 'undefined') return;

    // Only persist specific slices (not landingPageEditor as it's temporary)
    const stateToPersist = {
      authReducer: state.auth,
    };

    const serializedState = JSON.stringify(stateToPersist);
    localStorage.setItem(PERSIST_KEY, serializedState);
  } catch (err) {
    console.error('❌ Error saving state to localStorage:', err);
  }
};

// Middleware to persist state on every action
export const persistMiddleware: Middleware<Record<string, never>, Record<string, unknown>> = (store) => (next) => (action) => {
  const result = next(action);

  // Save state after every action (debounced in practice by browser)
  saveState(store.getState());

  return result;
};
