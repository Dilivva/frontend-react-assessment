import { useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://fakestoreapi.com/products";

export const useGetAllProducts = () => {
  const getProductsRequest = async () => {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("fetchProducts", getProductsRequest, {
    onError: () => {
      toast.error("Failed to fetch products");
    },
  });

  return {
    products,
    isLoading,
    isError,
  };
};
export const useGetSingleProduct = (id?: string) => {
  const getProductRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  };

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["fetchSingleProduct", id], getProductRequest, {
    enabled: !!id,
    onError: () => {
      toast.error("Failed to fetch product");
    },
  });

  return {
    product,
    isLoading,
    isError,
  };
};
