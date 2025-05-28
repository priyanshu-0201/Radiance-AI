import React from 'react';
import { Product } from '../types';
import { ExternalLink, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getStoreBadgeColor = (store: string) => {
    switch (store) {
      case 'Amazon':
        return 'bg-[#FF9900] text-white';
      case 'Nykaa':
        return 'bg-[#FC2779] text-white';
      case 'Sephora':
        return 'bg-black text-white';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="card hover:shadow-lg group overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-neutral-500 text-sm">{product.brand}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStoreBadgeColor(product.store)}`}>
            {product.store}
          </span>
        </div>
        
        <p className="text-neutral-600 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-yellow-400 mr-1" size={16} />
            <Star className="text-yellow-400 fill-yellow-400 mr-1" size={16} />
            <Star className="text-yellow-400 fill-yellow-400 mr-1" size={16} />
            <Star className="text-yellow-400 fill-yellow-400 mr-1" size={16} />
            <Star className="text-yellow-400" size={16} />
          </div>
          <span className="font-semibold">₹{product.price}</span>
        </div>
        
        <a 
          href={product.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary w-full mt-4 text-center flex items-center justify-center"
        >
          Buy Now <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;