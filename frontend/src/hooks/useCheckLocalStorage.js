export const useCheckLocalStorage = () => {
  const checkLocalStorage = (id) => {
    const item = localStorage.getItem(id) !== null;
    if (item) {
      return localStorage.getItem(id);
    }
  };
  return { checkLocalStorage };
};
