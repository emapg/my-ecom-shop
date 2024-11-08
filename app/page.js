import { useState } from 'react';
import Product from '../components/Product';
import Cart from '../components/Cart';
import dbConnect from '../lib/dbConnect';
import ProductModel from '../models/Product';

export async function getServerSideProps() {
  await dbConnect();
  const products = await ProductModel.find({}).lean();
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}

const Home = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const checkout = () => {
    // Redirect to payment page
    window.location.href = '/payment';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product._id} product={product} addToCart={addToCart} />
      ))}
      <Cart cartItems={cart} checkout={checkout} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Home;
