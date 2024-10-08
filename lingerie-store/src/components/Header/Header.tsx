import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Lingerie Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
