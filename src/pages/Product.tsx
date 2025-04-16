import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { Heart, ShoppingCartIcon, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ThreeDot } from 'react-loading-indicators';
import { Link, useParams } from 'react-router-dom';

interface KidsProps {
  display_cart: (id: string) => void;
  addToCart: (product: any) => void;
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
  qty: number;
}

export const Product: React.FC<KidsProps> = ({
  addToCart,
  display_cart,
}) => {
  const { id } = useParams<{ id: string }>(); // Accessing 'id' from the URL
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('');
  const [added, setAdded] = useState('ADD TO CART');
  const [qty, setQty] = useState(1);
  const [emblaRef] = useEmblaCarousel({ loop: false });
  console.log(display_cart)
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fashorabe26.onrender.com/getbyID/${id}` // Using 'id' here to fetch product
        );
        if (response.data) {
          setProductData(response.data);
          setCategory(response.data.category);
          setAdded('ADD TO CART');
          setQty(1);
        } else {
          console.log('No product found.');
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      if (!category) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fashorabe26.onrender.com/getbycategory/${category}`
        );
        if (response.data) {
          setFeatured(response.data);
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
          {
            original: productData.main_image,
            thumbnail: productData.main_image,
          },
          ...productData.additional_images.map((img) => ({
            original: img,
            thumbnail: img,
          })),
        ]
      : [];

  const handleAddToCart = () => {
    if (added === 'ITEM ADDED') return;
    if (productData) {
      const { _id, name, price, color, size, main_image } = productData;
      const productToAdd = {
        id: _id,
        name,
        price,
        color,
        size,
        qty,
        image: main_image,
      };
      addToCart(productToAdd);
      setAdded('ITEM ADDED');
    }
  };

  if (loading) {
    return (
      <div className="mt-20 w-screen md:max-w-[160vh] mx-auto max-w-[80%] flex justify-center items-center h-[80vh]">
        <ThreeDot variant="pulsate" color="#FF6900" size="large" />
      </div>
    );
  }

  return (
    <div className="md:mt-55 flex flex-col w-screen mt-40 max-w-[80%] mx-auto">
      {/* Main Product Section */}
      <div className="flex md:p-3 md:mx-auto md:max-w-[150vh]">
        <div className="md:flex md:flex-row md:gap-9 md:justify-evenly w-full">
          {/* Image Gallery */}
          <div className="flex flex-col">
            {galleryImages.length > 0 ? (
              <div className="md:max-w-[100vh]">
                <ImageGallery
                  items={galleryImages}
                  showPlayButton={false}
                  showNav={false}
                  autoPlay={true}
                  slideInterval={3000}
                  renderItem={({ original }) => (
                    <div className="flex justify-center">
                      <img
                        src={original}
                        alt="Gallery"
                        className="object-cover h-[60vh]"
                      />
                    </div>
                  )}
                />
              </div>
            ) : (
              <p>No images available</p>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col md:w-[50%] items-start md:p-6 p-3">
            <div className="font-mono md:text-4xl text-2xl text-gray-700 font-semibold mb-2">
              {productData?.name}
            </div>

            <div className="md:flex md:flex-row md:gap-10 mb-2">
              <div className="text-2xl items-center flex flex-row title_paragraph mb-3">
                Color
              </div>
              <div
                className="w-9 h-9 rounded-full border-4 border-gray-400"
                style={{ backgroundColor: productData?.color }}
              ></div>
            </div>

            <div className="border-b-2 w-full border-black"></div>

            <div className="text-2xl text-gray-600 font-bold item_prize my-4">
              $ {productData?.price}
            </div>

            <div className="flex border-2 border-black w-fit mb-3">
              <div
                className="px-2 py-2 border-r-2 text-lg cursor-pointer"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </div>
              <div className="px-6 py-2 border-r-2 text-lg">{qty}</div>
              <div
                className="px-2 py-2 text-lg cursor-pointer"
                onClick={() => setQty(qty + 1)}
              >
                +
              </div>
            </div>

            <div className="flex md:flex-row w-full gap-4 mt-5 mb-5 flex-col">
              <button
                onClick={handleAddToCart}
                className={`py-2 px-4 text-xl md:px-12 md:text-2xl flex border-4 border-black text-center ${
                  added === 'ITEM ADDED'
                    ? 'bg-orange-600 text-white rounded-xl border-white'
                    : ''
                }`}
              >
                <ShoppingCartIcon size={28} className="mr-2" />
                {added}
              </button>

              <button className="py-2 px-4 text-xl md:px-12 md:text-2xl flex border-black hover:brightness-110 rounded-xl">
                <Heart
                  size={28}
                  className="mr-2 transition duration-300 hover:fill-orange-500 hover:stroke-orange-500"
                />
                Add to Wishlist
              </button>
            </div>

            <div className="border-b-2 w-full border-black"></div>

            <div className="text-gray-450 item_desc md:text-lg flex items-center mt-5">
              <Star size={15} className="mr-1" fill="gray" />
              Made In {productData?.country}
            </div>
            <div className="text-gray-450 item_desc md:text-lg flex items-center">
              <Star size={15} className="mr-1" fill="gray" />
              Product ID: {productData?.id}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col mt-10 max-w-[80%] mx-auto border-t-2 border-gray-500 pt-10 mb-20 p-4">
        <div className="md:text-5xl pt-5 pb-10 item_name text-3xl text-center">
          Featured Products
        </div>
        <div className="overflow-hidden max-w-[150vh]" ref={emblaRef}>
          <div className="flex space-x-4">
            {featured.map((product) => (
              <div
                key={product._id}
                
                className="min-w-[30vh] cursor-pointer"
              ><Link to={`/product/${product._id}`}>
                <img
                  src={product.main_image}
                  alt={product.name}
                  className="object-cover w-[30vh] h-[30vh] rounded-lg"
                />
                <p className="text-center mt-2 text-lg">{product.name}</p>
                <p className="text-center mt-2 text-2xl font-bold">
                  $ {product.price}
                </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
