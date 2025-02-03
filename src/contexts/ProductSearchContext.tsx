import React, { createContext, useState, ReactNode, useContext } from "react";

interface ProductSearchContextType {
  productSearch: string;
  setProductSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSearchContext = createContext<
  ProductSearchContextType | undefined
>(undefined);

interface ProductSearchProviderProps {
  children: ReactNode;
}

export const ProductSearchProvider: React.FC<ProductSearchProviderProps> = ({
  children,
}) => {
  const [productSearch, setProductSearch] = useState<string>("");

  return (
    <ProductSearchContext.Provider value={{ productSearch, setProductSearch }}>
      {children}
    </ProductSearchContext.Provider>
  );
};

export const useProductSearch = (): ProductSearchContextType => {
  const context = useContext(ProductSearchContext);
  if (!context) {
    throw new Error(
      "useProductSearch must be used within a useProductSearchProvider"
    );
  }
  return context;
};
