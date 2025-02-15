import { useParams } from "react-router-dom";
import Data from "../data/Data.json";
import { ArrowLeft, ShoppingCart } from "react-feather"; // You'll need to install react-icons

export default function PCInfos({ onHandlePanier }) {
  const { id } = useParams();
  const pc = Data.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    onHandlePanier({
      id: pc.id,
      image: pc.img,
      name: pc.name,
      description: pc.description,
      price: pc.price,
    });
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={pc.img}
                alt={pc.name}
                className="w-full h-96 object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {pc.name}
                </h1>
                <p className="text-4xl font-bold text-indigo-600 mb-6">
                  {pc.price.toLocaleString()} DH
                </p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Features
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pc.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold
                    hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <a
                  href="/"
                  className="w-full border-2 border-gray-200 text-gray-600 py-3 px-6 rounded-lg font-semibold
                    hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">Category</span>
                <p className="font-medium text-gray-900">Gaming PC</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">Warranty</span>
                <p className="font-medium text-gray-900">2 Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
