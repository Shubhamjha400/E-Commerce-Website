import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductsData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductsData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="product"
                onClick={() => setImage(item)}
                className="cursor-pointer w-[24%]  sm:w-full sm:mb-3 flex-shrink-0  object-cover"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="product"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">{productsData.description}</p>
          <br />
          <button
            onClick={() => addToCart(productsData._id)}
            className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>100% Original product </p>
            <p>Minimum Order Quantity: 20 Piece</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex">
          <b className="px-5 py-3 text-sm border">Description</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>
          Z.P. Bag House is a trusted manufacturer, supplier, and exporter of premium-quality bags, T-shirts, caps, and corporate gift items. With a focus on customization, they provide tailored branding solutions to meet promotional and business needs. Their products are designed for durability, style, and effective brand representation.
          </p>
        </div>
      </div>
      <RelatedProducts category={productsData.category} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
