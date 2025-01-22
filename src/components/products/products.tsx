import { useGetAllProducts } from "@/api/fetchProductApi";
import LoadingSkeleton from "../loading-skeleton/loading-skeleton";

type ProductData = {
  id: number;
  price: number;
  title: string;
  image: string;
  description: string;
};

const Products = () => {
  const { products, isLoading } = useGetAllProducts();
  console.log(products);
  return isLoading ? (
    <LoadingSkeleton />
  ) : products ? (
    <div className="mt-[80px] lg:ml-[250px] p-10">
      <div className="w-full min-h-screen">
        <h2 className="text-4xl font-bold text-primary-dark lg:my-10">
          Products
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px]">
          {products.map((product: ProductData) => (
            <div
              className="flex flex-col space-y-3 w-full hover:bg-gray-50 p-3 transition-all"
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
                <div className="h-[50px] w-[250px] px-2">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
};

export default Products;
