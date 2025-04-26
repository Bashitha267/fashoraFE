import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { Heart, ShoppingCartIcon, Star } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ThreeDot } from 'react-loading-indicators';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';

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

export const Product: React.FC<KidsProps> = ({ addToCart, display_cart }) => {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('');
  const [added, setAdded] = useState('ADD TO CART');
  const [qty, setQty] = useState(1);
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });
  const [cartFullModal, setCartFullModal] = useState(false);
  console.log(display_cart)
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://fashorabe26.onrender.com/getbyID/${id}`
        );
        if (res.data) {
          setProductData(res.data);
          setCategory(res.data.category);
          setAdded('ADD TO CART');
          setQty(1);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchFeatured = async () => {
      if (!category) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `https://fashorabe26.onrender.com/getbycategory/${category}`
        );
        if (res.data) {
          setFeatured(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, [category]);

  const galleryImages = productData?.additional_images
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
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    if (cartItems.length >= 4) {
      setCartFullModal(true);
      return;
    }

    if (productData) {
      const { _id, name, price, color, size, main_image } = productData;
      const newProduct = {
        id: _id,
        name,
        price,
        color,
        size,
        qty,
        image: main_image,
      };
      addToCart(newProduct);
      setAdded('ITEM ADDED');
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const closeCartFullModal = () => {
    setCartFullModal(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <ThreeDot variant="pulsate" color="#FF6900" size="large" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen mt-20 md:mt-55">
      {/* Cart Full Modal */}
      <Transition appear show={cartFullModal} as={Fragment}>
  <Dialog as="div" className="relative z-50" onClose={closeCartFullModal}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md" />
    </Transition.Child>

    {/* MODAL */}
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-full p-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
            <Dialog.Title className="text-lg font-bold text-gray-900">
              Cart Limit Reached
            </Dialog.Title>
            <div className="mt-2 text-sm text-gray-600">
              You can only add up to 4 items to your cart. Please remove some items or proceed to checkout before adding more.
            </div>
            <div className="mx-auto w-[30vh] gap-5  mt-4 flex justify-center">
              <button
                onClick={closeCartFullModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800"
              >
                OK
              </button>
              <button
                onClick={closeCartFullModal}
                className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-700"
              >
               <a href="/checkout">Checkout</a>
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>

      {/* Main Product Section */}
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div>
            {galleryImages.length > 0 ? (
              <ImageGallery
                items={galleryImages}
                showPlayButton={false}
                showNav={true}
                showFullscreenButton={false}
                slideInterval={3000}
                renderItem={({ original }) => (
                  <div className="flex items-center justify-center bg-gray-50">
                    <img
                      src={original}
                      alt="Product"
                      className="object-contain w-full h-[500px]"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                )}
                renderThumbInner={(item) => (
                  <div className="flex items-center justify-center bg-gray-100">
                    <img
                      src={item.thumbnail}
                      alt="Thumbnail"
                      className="object-cover w-20 h-20"
                    />
                  </div>
                )}
              />
            ) : (
              <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-lg">
                No Images Available
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">{productData?.name}</h1>

            <div className="flex items-center mb-6">
              <div className="text-lg font-medium mr-2">Color:</div>
              <div
                className="w-8 h-8 rounded-full border"
                style={{ backgroundColor: productData?.color }}
              />
            </div>

            <div className="my-6 border-t" />

            <div className="mb-6 text-2xl font-bold text-gray-900">
              ${productData?.price.toFixed(2)}
            </div>

            <div className="flex items-center mb-8">
              <div className="text-lg font-medium mr-4">Quantity:</div>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-4 py-2 text-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 text-lg">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 text-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center px-8 py-3 font-medium text-lg text-white ${
                  added === 'ITEM ADDED'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-black hover:bg-gray-800'
                } rounded-md`}
              >
                <ShoppingCartIcon size={20} className="mr-2" />
                {added}
              </button>

              <button className="flex items-center justify-center px-8 py-3 font-medium text-lg text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50">
                <Heart size={20} className="mr-2" />
                Wishlist
              </button>
            </div>

            <div className="my-6 border-t" />

            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <Star size={16} className="mr-2" />
                Made in {productData?.country}
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-2" />
                Product ID: {productData?.id}
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-2" />
                Size: {productData?.size}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-bold text-center text-gray-900">
            You May Also Like
          </h2>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {featured.map((product) => (
                <div
                  key={product._id}
                  className="w-64 flex-none bg-white rounded-lg overflow-hidden shadow hover:shadow-lg"
                >
                  <Link to={`/product/${product._id}`} className="block">
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={product.main_image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 text-lg font-medium truncate">{product.name}</h3>
                      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
