import { useEffect, useRef, useState, useCallback } from 'react';

export default function useSafeAsyncState(initalState) {
  const [state, setState] = useState(initalState);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted.current) {
      setState(data);
    }
  }, []);

  return [state, setSafeAsyncState];
}
