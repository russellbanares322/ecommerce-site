import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  handleFetchProducts: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_FS_API_BASE_URL}/products`
    );
    const jsonResponse = await response.json();
    await set({ products: jsonResponse });
  },
}));

export default useProductStore;
