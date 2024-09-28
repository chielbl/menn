export const setLocalStorage = (key: string, Value: any) =>
  localStorage.setItem(key, JSON.stringify(Value));

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
};
