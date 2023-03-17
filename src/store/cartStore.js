import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

//Todo: Add increment quantity feature

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
      handleAddToCart: (selectedProduct) => {
        const productIndex = cart.findIndex(
          (product) => product.id === selectedProduct.id
        );
        if (productIndex >= 0) {
          set((state) => ({
            ...state,
            cart: state.cart[productIndex].cartQuantity + 1,
          }));
        } else {
          const tempProduct = { ...selectedProduct, cartQuantity: 1 };
          set((state) => ({
            ...state,
            cart: [...state.cart, tempProduct],
          }));
          alert(`Successfully added ${selectedProduct.title} to cart`);
        }
      },

      handleRemoveProduct: (selectedProductID) => {
        set((state) => ({
          cart: state.cart.filter((val) => val.id !== selectedProductID),
        }));
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
