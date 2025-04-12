import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";

interface KidsProps {
  display_cart: (id: string) => void;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  main_image: string;
  additional_images: string[];
}

export const Women: React.FC<KidsProps> = ({ display_cart }) => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingColors, setLoadingColors] = useState(false);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const fetchColors = async () => {
      setLoadingColors(true);
      try {
        const response = await axios.get('https://fashorabe26.onrender.com/getWomenColors');
        setColors(response.data);
      } catch (e) {
        console.error("Error fetching colors:", e);
      } finally {
        setLoadingColors(false);
      }
    };
    fetchColors();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fashorabe26.onrender.com/getWomen`);
        setProductData(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading || loadingColors) {
    return (
      <div className="mt-20 w-screen md:max-w-[160vh] mx-auto max-w-[80%] flex justify-center items-center h-[80vh]">
        <ThreeDot variant="pulsate" color="#FF6900" size="large" />
      </div>
    );
  }

  return (
    <div className="mt-20 w-screen md:max-w-[160vh] mx-auto max-w-[80%]">
      {/* Filters Section */}
      <div className="w-screen max-w-[100%] md:max-w-[160vh] md:mx-auto flex flex-row border-2 border-[#6F6F6F] gap-2">
        <div className="p-6 md:w-[40vh]">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold">SIZE</div>
          </div>
        </div>
        <div className="border-l-2 border-[#E1E1E1] md:block hidden"></div>
        <div className="p-6">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold">COLOR</div>
            <div className="md:flex md:flex-row grid grid-cols-5 md:gap-4 gap-2">
              {colors.map((color, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#3F3F3D]"
                  style={{ backgroundColor: color }}
                  title={`Color ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-10 md:grid md:grid-cols-4 grid grid-cols-2 md:gap-8  gap-5">
        {productData.map((item) => (
          <div 
            key={item._id}
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => display_cart(item._id)}
          >
            <div className="relative md:w-[40vh] md:h-[40vh] w-[18vh] h-[20vh] overflow-hidden">
              {/* Main Image */}
              <img
                src={item.main_image}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available';
                }}
              />
              
              {/* Hover Image */}
              {item.additional_images && item.additional_images.length > 0 && (
                <img
                  src={item.additional_images[0]}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available';
                  }}
                />
              )}
            </div>
            <div className="flex justify-center font-semibold section_name text-lg text-[#2F2F2F]">
              {item.name}
            </div>
            <div className="flex justify-center section_name font-bold text-xl text-[#222222]">
              ${item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};