export function useDebounce() {
  const debounce = (fn: () => void, delay = 500) => {
    let timeoutId: NodeJS.Timeout;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(), delay);
  };

  return { debounce };
}
