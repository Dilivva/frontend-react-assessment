import { useGetSingleProduct } from "@/api/fetchProductApi";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { product, isError, isLoading } = useGetSingleProduct(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-red-500">
          Unable to fetch product details. Please try again later.
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="mt-[80px] lg:ml-[250px] p-10">
      <div className="max-w-4xl mx-auto    overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-6"
            />
          </div>
          {/* Product Details */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold text-primary">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-700">
                Rating: {product.rating.rate} / 5
              </p>
              <p className="text-sm text-gray-500">
                ({product.rating.count} reviews)
              </p>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
