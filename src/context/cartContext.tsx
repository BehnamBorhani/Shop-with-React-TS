import { createContext, useEffect, useState } from "react";
import { Product } from "../components/Products.types";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  userCart: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAllProduct: (id: number) => void;
  shop: Product[];
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [userCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  const addProduct = (id: number) => {};
  const removeProduct = (id: number) => {
    setUserCart((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  const removeAllProduct = () => setUserCart([]);

  return (
    <CartContext.Provider
      value={{ userCart, addProduct, removeProduct, removeAllProduct, shop }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
