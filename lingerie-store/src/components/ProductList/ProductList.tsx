import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Lingerie 1', price: 49.99, image: 'link_da_imagem' },
  { id: 2, name: 'Lingerie 2', price: 59.99, image: 'link_da_imagem' },
  // Mais produtos
];

const ProductList: React.FC = () => {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
