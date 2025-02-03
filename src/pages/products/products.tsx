import { useGetAllProducts } from "@/api/fetchProductApi";
import LoadingSkeleton from "../../components/loading-skeleton/loading-skeleton";
import { Link } from "react-router";
import { useProductSearch } from "@/contexts/ProductSearchContext";

type ProductData = {
  id: number;
  price: number;
  title: string;
  image: string;
  description: string;
};

const Products = () => {
  const { products, isLoading, isError } = useGetAllProducts();
  const { productSearch } = useProductSearch();

  const filteredProducts = products?.filter((product: ProductData) =>
    product.title.toLowerCase().includes(productSearch.toLowerCase())
  );
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return (
      <div className=" lg:ml-[250px]">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-500">
              Error Loading Products
            </h2>
            <p className="text-gray-500">
              Oops! Something went wrong while fetching the product data. Please
              try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return products ? (
    <div className="mt-[80px] lg:ml-[250px] p-10">
      <div className="w-full min-h-screen">
        <h2 className="text-4xl font-bold text-primary-dark my-5 lg:my-10">
          Products
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductData) => (
              <Link
                to={product.id.toString()}
                className="flex flex-col space-y-3 w-full hover:bg-gray-50 p-3 transition-all bg-gray-300/50 rounded-md"
                key={product.id}
              >
                <div className="h-[200px] w-[250px] rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="min-h-4 w-[250px] font-bold text-xs px-2">
                    {product.title}
                  </h1>
                  <div className="h-[50px] w-[250px] px-2">
                    ${product.price}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h3>No products found matching your search.</h3>
          )}
        </div>
      </div>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
};

export default Products;
