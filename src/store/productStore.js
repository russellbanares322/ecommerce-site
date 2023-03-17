import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  handleFetchProducts: async () => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_FS_API_BASE_URL}/products`
    );
    const jsonResponse = await response.json();
    const check = localStorage.getItem("products");

    if (check) {
      await set({ isLoading: false, products: JSON.parse(check) });
    } else {
      await set({ isLoading: false, products: jsonResponse });
      localStorage.setItem("products", JSON.stringify(jsonResponse));
    }
  },
}));

export default useProductStore;
