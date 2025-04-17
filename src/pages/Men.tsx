import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Link } from "react-router-dom";

interface KidsProps {
  display_cart: any; // You can specify the actual type of display_cart if possible
}
interface Product {
  _id: string;
  name: string;
  price: number;
  main_image:any;
  additional_images:string;
  color:string;
  sizes:any
  // other properties
}
export const Men:React.FC<KidsProps>= ({display_cart}) => {
  // 
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingColors, setLoadingColors] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
  const [filteredProducts, setfilteredProducts] = useState(productData);
  const [SizeDes, setSizeDes] = useState<string>("");
  useEffect(() => {
    const fetchColors = async () => {
      setLoadingColors(true);
      try {
        const response = await axios.get(
          "https://fashorabe26.onrender.com/getMenColors"
        );
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
        const response = await axios.get(
          "https://fashorabe26.onrender.com/getMen"
        );
        setProductData(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    setfilteredProducts(productData);
  }, [productData]);
  const handleColor = (color: string) => {
    const newProducts = productData.filter((item) => item.color === color);
    setfilteredProducts(newProducts);
  };
  const handleSize = (size: string) => {
    const newProducts = productData.filter((item) => item.sizes.includes(size));
    setfilteredProducts(newProducts);
  };




  if (loading || loadingColors) {
    return (
      <div className="mt-55 w-full md:max-w-[160vh] mx-auto flex justify-center items-center h-[80vh]">
        <ThreeDot variant="pulsate" color="#FF6900" size="large" />
      </div>
    );
  }

  return (
    <div className="md:mt-55 mt-38 w-full md:max-w-[160vh] mx-auto px-4">
      {/* Filters Section */}
      <div className="w-full flex flex-row border-2 border-[#6F6F6F] gap-2">
        <div className="p-6 md:w-[40vh]">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold">SIZE</div>
            <div className="flex flex-row gap-2 ">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  className={`border px-3 py-1 text-sm md:text-lg hover:bg-gray-200 transition ${SizeDes === size ? "bg-gray-300" : ""}`}
                  onClick={()=>{
                    handleSize(size)
                    setSizeDes(size)
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
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
                  className="w-5 h-5 md:w-10 md:h-10 border-2 border-[#3F3F3D] cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={`Color ${index + 1}`}
                  onClick={() => {
                    handleColor(color);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
        {filteredProducts.map((item) => (
          <Link
            to={`/product/${item._id}`}
            key={item._id}
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => display_cart(item._id)}
          >
           <div className="relative md:w-[40vh] md:h-[40vh] w-[18vh] h-[25vh] overflow-hidden group">
  {/* Main Image */}
  <img
    src={item.main_image}
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
      item.additional_images.length > 0 && item.additional_images[0]?.trim() !== "" ? "group-hover:opacity-0" : ""
    }`}
    alt={item.name}
    onError={(e) => {
      e.currentTarget.src =
        "https://via.placeholder.com/400x400?text=Image+Not+Available";
    }}
  />

  {/* Hover Image */}
  {item.additional_images.length > 0 && item.additional_images[0]?.trim() !== "" && (
    <img
      src={item.additional_images[0]}
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
      alt={item.name}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
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
          </Link>
        ))}
      </div>
    </div>
  );
}
