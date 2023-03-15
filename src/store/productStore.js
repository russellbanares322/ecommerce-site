import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  handleFetchProducts: async () => {
    set({ isLoading: true });
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_FS_API_BASE_URL}/products`
    );
    const jsonResponse = await response.json();
    const check = localStorage.getItem("products");

    if (check) {
      await set({ products: JSON.parse(check) });
      set({ isLoading: false });
    } else {
      await set({ products: jsonResponse });
      localStorage.setItem("products", JSON.stringify(jsonResponse));
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
