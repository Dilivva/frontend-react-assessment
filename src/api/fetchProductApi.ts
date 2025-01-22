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

  const { data: products, isLoading } = useQuery(
    "fetchCampaigns",
    getProductsRequest,
    {
      onError: () => {
        toast.error("Failed to fetch products");
      },
    }
  );

  return {
    products,
    isLoading,
  };
};
