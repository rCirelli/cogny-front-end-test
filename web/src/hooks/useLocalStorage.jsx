import { useState, useEffect, useRef } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [savedValue, setSavedValue] = useState('');
  const keyRef = useRef(key);
  const initialValueRef = useRef(initialValue);

  useEffect(() => {
    const savedItem = localStorage.getItem(keyRef.current);
    if (initialValueRef.current === undefined && savedItem === null) {
      setSavedValue(undefined);
      return;
    }
    if (savedItem === null) {
      localStorage.setItem(keyRef.current, JSON.stringify(initialValueRef.current));
      setSavedValue(initialValueRef.current);
      return;
    }
    setSavedValue(JSON.parse(savedItem));
  }, []);

  const setNewValue = (newValue) => {
    const savedItem = JSON.parse(localStorage.getItem(keyRef.current));

    if (newValue !== savedItem && (newValue !== '' && newValue !== null)) {
      localStorage.setItem(keyRef.current, JSON.stringify(newValue));
      setSavedValue(newValue);
    }
  };

  return [savedValue, setNewValue];
}