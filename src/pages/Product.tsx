import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowBigLeft, Heart, ShoppingCartIcon, Star } from "lucide-react";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ThreeDot } from "react-loading-indicators";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import Swiper styles





interface KidsProps {
  display_cart: (id: string) => void; // Use a specific type for display_cart
  productID: string; // Assuming productID is a string
  addToCart: (product: any) => void; // Define this type based on your product structure
}

interface Product {
  _id: string;
  name: string;
  price: number;
  main_image: string;
  additional_images: string[];
  color: string;
  size: string;
  category: string;
  country: string;
  id: string;
}

export const Product: React.FC<KidsProps> = ({ addToCart, productID, display_cart }) => {
  
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("");
  const [added, setAdded] = useState("ADD TO CART");
  const [emblaRef] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fashorabe26.onrender.com/getbyID/${productID}`
        );
        if (response.data) {
          setProductData(response.data);
          setCategory(response.data.category);
        } else {
          console.log("No product found.");
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    if (productID) {
      fetchProduct();
    }
  }, [productID]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      if (!category) return; // Don't fetch if no category is set
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fashorabe26.onrender.com/getbycategory/${category}`
        );
        if (response.data) {
          setFeatured(response.data);
        } else {
          console.log("No featured products found.");
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
       
      }
    };

    fetchFeaturedProducts();
  }, [category]);

  const galleryImages =
    productData?.additional_images && productData.main_image
      ? [
          { original: productData.main_image, thumbnail: productData.main_image },
          ...productData.additional_images.map((img) => ({
            original: img,
            thumbnail: img,
          })),
        ]
      : [];

  const handleAddToCart = () => {
    if(added=="ITEM ADDED"){
        return;
    }
    if (productData) {
      const { _id, name, price, color, size, main_image } = productData;
      const productToAdd = {
        id: _id,
        name,
        price,
        color,
        size,
        
        image: main_image,
      };
      addToCart(productToAdd);
      setAdded("ITEM ADDED");
    }
  };

  if (loading) {
    return (
      <div className="mt-20 w-screen md:max-w-[160vh] mx-auto max-w-[80%] flex justify-center items-center h-[80vh]">
        <ThreeDot variant="pulsate" color="#FF6900" size="large" text="" textColor="" speedPlus={0} />
      </div>
    );
  }

  return (
    <div className="md:mt-20 flex flex-col w-screen mt-20 max-w-[80%] mx-auto">
      <div className="flex gap-2 text-xl w-fit mb-3"><ArrowBigLeft size={28} color={"Red"}/>Go Back</div>
      <div className="flex md:p-3 md:mx-auto md:max-w-[150vh]">
        <div className="md:w-screen w-screen md:flex md:flex-row md:gap-9 md:justify-evenly ">
          
          <div className="flex flex-col">
            {galleryImages.length > 0 ? (
              <div className="md:max-w-[100vh] ">
                <ImageGallery
                  items={galleryImages}
                  showPlayButton={false}
                  showNav={false}
                  autoPlay={true}
                  slideInterval={3000}
                  renderItem={({ original }) => (
                    <div className="flex justify-center">
                      <img src={original} alt="Gallery Image" className="object-cover h-[60vh]" />
                    </div>
                  )}
                />
              </div>
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="flex flex-col md:w-[50%] items-start md:p-6 p-3">
            <div className="font-mono md:text-5xl text-3xl text-gray-700 font-bold md:my-6 mt-3">
              {productData?.name}
            </div>
            <div className="md:flex md:flex-row flex-row md:gap-10 md:my-10 my-4">
              <div className="text-2xl items-center flex md:flex-row title_paragraph">Size</div>
            </div>
            <div className="md:flex md:flex-row md:gap-10 mb-4 mt-4">
              <div className="text-2xl items-center flex flex-row title_paragraph mb-3">Color</div>
              <div
                className="w-9 h-9 rounded-full flex items-center flex-col border-4 border-gray-400"
                style={{ backgroundColor: productData?.color }}
              ></div>
            </div>
            <div className="my-4 flex flex-row border-b-2 w-full border-black"></div>
            <div className="text-4xl text-gray-600 font-bold item_prize my-9">
              $ {productData?.price}
            </div>
            <div className="my-8 flex flex-row border-2 border-black w-fit">
              <div className="px-5 py-2 border-r-2 text-lg">-</div>
              <div className="px-10 py-2 border-r-2 text-lg">{}</div>
              <div className="px-5 py-2 text-lg">+</div>
            </div>
            <div className="flex md:flex-row md:w-[100%] justify-between gap-4 flex-col my-9">
              <div className="flex md:flex-row">
                <button
                  onClick={handleAddToCart}
                  className={`md:py-3 py-4 px-4 text-xl md:px-12 md:text-2xl flex border-4 border-black text-center ${
                    added === "ITEM ADDED" ? "bg-orange-600 hover:brightness-160 text-white rounded-xl border-white" : ""
                  }`}
                >
                  <ShoppingCartIcon size={28} style={{ marginRight: 8 }} />
                  {added}
                </button>
              </div>
              <div>
                <button className="md:py-3 py-4 px-4 text-xl md:px-12 md:text-2xl flex border-black text-center hover:brightness-160 rounded-xl">
                  <Heart size={28} style={{ marginRight: 8 }} className="transition duration-300 hover:fill-orange-500 hover:stroke-orange-500" />
                  add to Wishlist
                </button>
              </div>
            </div>
            <div className="md:my-4 flex flex-row border-b-2 w-full border-black"></div>
            <div className="text-gray-450 item_desc md:text-lg flex items-center mt-10">
              <Star size={15} style={{ marginRight: 3 }} color="black" fill="gray" />
              Made In {productData?.country}
            </div>
            <div className="text-gray-450 item_desc md:text-lg flex items-center">
              <Star size={15} style={{ marginRight: 3 }} color="black" fill="gray" className="" />
              Product ID: {productData?.id}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-screen mt-30 max-w-[80%] md:mx-auto border-t-2 border-gray-500 pt-10 mb-20 p-4 ml-9">
        <div className="md:text-5xl pt-5 pb-10 item_name flex text-3xl justify-center">Featured Products</div>
        {/* <div className="overflow-x-scroll  flex  w-[120vh]">
        
        <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex space-x-4">
        {featured.map((product) => (
          <div key={product._id} onClick={() => display_cart(product._id)} className="min-w-[30vh]">
            <img
              src={product.main_image}
              alt={product.name}
              className="object-cover w-[30vh] h-[30vh] rounded-lg"
            />
            <p className="text-center mt-2 text-lg">{product.name}</p>
            <p className="text-center mt-2 text-2xl font-bold">$ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
        
        </div> */}
      </div>
    </div>
  );
};
