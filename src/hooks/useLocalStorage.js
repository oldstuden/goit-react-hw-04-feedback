import { useEffect, useState } from 'react';

export const useLocalStorage = (initialValue, key) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
  return [data, setData];
};
