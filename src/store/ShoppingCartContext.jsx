import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
  epmtyShoppingCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });

  function handleEmptyShoppingCart() {
    setShoppingCart({ items: [] });
  }

  function handleAddItemToCart(product) {
    setShoppingCart((prevShoppingCart) => {
      const updateShoppingCart = [...prevShoppingCart.items];

      const existingProductIndex = updateShoppingCart.findIndex(
        (p) => p.id === product.id
      );
      const existingProduct = updateShoppingCart[existingProductIndex];
      if (existingProduct) {
        // توی لیست موجود هست بیایم به کوآنتیتی اون یکی اضافه کنیم
        const newProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        updateShoppingCart[existingProduct] = newProduct;
      } else {
        // توی لیست موجود نیست
        // بیایم به لیست اضافه اش کنیم و کلید کوآنتیتی با مقدار یک رو بهش اضافه کنیم
        updateShoppingCart.push({ ...product, quantity: 1 });
      }
      return { items: updateShoppingCart };
    });
  }
  function handleUpdateCartItemQuantity(id, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updateShoppingCart = [...prevShoppingCart.items];

      const productIndex = updateShoppingCart.findIndex((p) => p.id === id);
      const product = { ...updateShoppingCart[productIndex] };
      product.quantity += amount;

      if (product.quantity < 1) {
        // از لیست باید حذف بشه دیگه
        updateShoppingCart.splice(productIndex, 1); // همین رو حذف کن
      } else {
        updateShoppingCart[productIndex] = product;
      }
      return { items: updateShoppingCart };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
    epmtyShoppingCart: handleEmptyShoppingCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
