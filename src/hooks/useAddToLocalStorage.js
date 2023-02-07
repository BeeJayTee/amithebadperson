export const useAddToLocalStorage = () => {
  const addToLocalStorage = (id, rating) => {
    localStorage.setItem(id, rating);
  };
  return { addToLocalStorage };
};
