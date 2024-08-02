import styles from './App.css';
import React, { useState } from 'react';
import CartProductList from './components/CartProductList';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import DevButton from './components/DevButton';
import ProductList from './components/ProductList'
import AddButton from './components/AddButton';
import Cart from './components/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import perfume from './images/perfume.png';
import gelDucha from './images/gel_de_ducha.png';
import serumCapilar from './images/serum_capilar.png';
import SummerGloss from './images/Summer_Gloss.png';
import correctorBarra from './images/corrector_barra.png';
import cremafacial from './images/crema_facial.png';
import contornoOjos from './images/contorno_ojos.png';
import exfoliante from './images/exfoliante.png';
import greaterMujer from './images/greater_mujer.png';
import jabon from './images/jabon.png';
import perfumeSoul from './images/perfume_soul.png';
import limpiadorFacial from './images/limpiador_facial.png';


const products = [
  {
    id: 1,
    name: 'Oh! Sweet Gelato Vibes',
    brand: 'Oriflame',
    line: 'Perfumería',
    description: 'Aroma con notas de mango, vainilla y acorde gelato. Efecto frescura veraniega.',
    price: 299.90,
    image: perfume,
    style: { width: '180px', height: '300px' }
},
{
  id: 2,
  name: 'North For Men Sensitive Protect',
  brand: 'Oriflame',
  line: 'Linea: North For Men',
  description: 'Gel de ducha ideal para limpiar piel y cabello.',
  price: 169.90,
  image: gelDucha,
  style: { width: '150px', height: '300px' }
},
{
  id: 3,
  name: 'Sérum Capilar Duologi',
  brand: 'Oriflame',
  line: 'Capilar Duologi',
  description: 'Sérum capilar sellador para reducir puntas abiertas.',
  price: 139.90,
  image: serumCapilar,
  style: { width: '150px', height: '320px' }
},
{
  id: 4,
  name: 'Oh! Sweet Gloss',
  brand: 'Oriflame',
  line: 'Maquillaje On Colour',
  description: 'Gloss para labios en 8 aromas y sabores distintos. Labios hermosos y humectados.',
  price: 49.90,
  image: SummerGloss,
  style: { width: '180px', height: '400px' }
},
{
  id: 5,
  name: 'Perfecting Concealer Stick',
  brand: 'Oriflame',
  line: 'Maquillaje On Colour',
  description: 'Mini corrector en barra de textura cremosa. Práctico tamaño para llevarlo contigo.',
  price: 49.90,
  image: correctorBarra,
  style: { width: '180px', height: '400px' }
},
{
  id: 6,
  name: 'Pure Skin Paso 3',
  brand: 'Oriflame',
  line: 'Pure Skin',
  description: 'Crema matificante para imperfecciones. Usala para tu rutina de skincare.',
  price: 89.90,
  image: cremafacial,
  style: { width: '180px', height: '400px' }
},
{
  id: 7,
  name: 'Oh! Sweet Gelato Vibes',
  brand: 'Oriflame',
  line: 'Cremas Age Revive',
  description: 'Crema para contorno de ojos, para todo tipo de piel. Minimiza la aparición de arrugas y ojeras.',
  price: 229.90,
  image: contornoOjos,
  style: { width: '180px', height: '400px' }
},
{
  id: 8,
  name: 'Energising Exfoliating Shower Gel',
  brand: 'Oriflame',
  line: 'Love Nature',
  description: 'Aroma frambuesa con menta para una ducha exfoliante y energizante.',
  price: 119.90,
  image: exfoliante,
  style: { width: '180px', height: '400px' }
},
{
  id: 9,
  name: 'Greater for Her',
  brand: 'Oriflame',
  line: 'Perfumería',
  description: 'Aroma con notas de mandarina, nardo y ámbar blanco.',
  price: 299.90,
  image: greaterMujer,
  style: { width: '180px', height: '400px' }
},
{
  id: 10,
  name: 'Jabon Refrescante Love Nature',
  brand: 'Oriflame',
  line: 'Love Nature',
  description: 'Jabón para una ducha refrescante con agua de coco y melón.',
  price: 29.90,
  image: jabon,
},
{
  id: 11,
  name: 'Soul Focus',
  brand: 'Oriflame',
  line: 'Perfumería',
  description: 'Aroma con notas de pimienta negra, flores de violeta y ámbar ahumado.',
  price: 369.90,
  image: perfumeSoul,
  style: { width: '190px', height: '360px' }
},
{
  id: 12,
  name: 'Pure Skin Paso 1',
  brand: 'Oriflame',
  line: 'Pure Skin',
  description: 'Limpiador facial para imperfecciones primer paso.',
  price: 109.90,
  image: limpiadorFacial,
  style: { width: '180px', height: '400px' }
},
];
const App = () => {
  
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
 
  const handleSearch = (searchTerm) => {
    const filteredProducts = products.filter((product) =>
      
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    console.log('Productos encontrados:', filteredProducts);
  };
  
  const handleDevButtonClick = (productId) => {
    console.log(`Producto ${productId} devuelto`);
    setCart(cart.filter(product => product.id !== productId));
  };

  const handleAddButtonClick = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
      console.log(`Producto ${productId} agregado`);
    }
  };

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some(cartItem => cartItem.id == product.id);
    if (!isProductInCart) { 
      setCart([...cart, product]);
    }
};

const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
};

const toggleCartVisibility = () => {
  setIsCartVisible(!isCartVisible);
};
  
return (
  <div className={styles.App}>
    <Login />
    <Navbar />
    <SearchBar onSearch={handleSearch} /> 
    <button className="cart-button" onClick={toggleCartVisibility}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{cart.length}</span>
    </button> 
    {isCartVisible && (
        <CartProductList products={cart} onRemoveFromCart={handleRemoveFromCart} />
      )}
    <Header />
    <ProductList products={products} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
  <Footer />
  </div>
);
};

export default App;
