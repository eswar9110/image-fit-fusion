
import React, { useState } from 'react';

interface ClothingItem {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
}

interface ClothingCatalogProps {
  onClothingSelect: (clothing: ClothingItem) => void;
  selectedClothing: ClothingItem | null;
}

const ClothingCatalog = ({ onClothingSelect, selectedClothing }: ClothingCatalogProps) => {
  const [activeCategory, setActiveCategory] = useState('shirts');

  const categories = [
    { id: 'shirts', name: 'Shirts', count: 12 },
    { id: 'hoodies', name: 'Hoodies', count: 8 },
    { id: 'sarees', name: 'Sarees', count: 15 },
    { id: 'dresses', name: 'Dresses', count: 10 },
  ];

  const clothingItems: ClothingItem[] = [
    {
      id: '1',
      name: 'Classic White Shirt',
      category: 'shirts',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
      price: '$49.99'
    },
    {
      id: '2',
      name: 'Denim Button-Up',
      category: 'shirts',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
      price: '$69.99'
    },
    {
      id: '3',
      name: 'Striped Casual Shirt',
      category: 'shirts',
      image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=400&fit=crop',
      price: '$55.99'
    },
    {
      id: '4',
      name: 'Casual Gray Hoodie',
      category: 'hoodies',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      price: '$79.99'
    },
    {
      id: '5',
      name: 'Black Pullover Hoodie',
      category: 'hoodies',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      price: '$89.99'
    },
    {
      id: '6',
      name: 'Designer Silk Saree',
      category: 'sarees',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop',
      price: '$129.99'
    },
    {
      id: '7',
      name: 'Traditional Red Saree',
      category: 'sarees',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
      price: '$149.99'
    },
    {
      id: '8',
      name: 'Elegant Blue Saree',
      category: 'sarees',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop',
      price: '$139.99'
    },
    {
      id: '9',
      name: 'Summer Floral Dress',
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
      price: '$89.99'
    },
    {
      id: '10',
      name: 'Elegant Black Dress',
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1566479179817-c0398156c2f7?w=400&h=400&fit=crop',
      price: '$109.99'
    },
    {
      id: '11',
      name: 'Casual Midi Dress',
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop',
      price: '$79.99'
    }
  ];

  const filteredItems = clothingItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {category.name} ({filteredItems.length})
          </button>
        ))}
      </div>

      {/* Clothing Grid */}
      <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onClothingSelect(item)}
            className={`cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
              selectedClothing?.id === item.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded-t-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm text-slate-800 truncate">{item.name}</h3>
              <p className="text-blue-600 font-bold text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedClothing && (
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Selected:</span> {selectedClothing.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClothingCatalog;
