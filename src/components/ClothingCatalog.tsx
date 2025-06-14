
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
      image: '/placeholder.svg',
      price: '$49.99'
    },
    {
      id: '2',
      name: 'Denim Button-Up',
      category: 'shirts',
      image: '/placeholder.svg',
      price: '$69.99'
    },
    {
      id: '3',
      name: 'Casual Hoodie',
      category: 'hoodies',
      image: '/placeholder.svg',
      price: '$79.99'
    },
    {
      id: '4',
      name: 'Designer Saree',
      category: 'sarees',
      image: '/placeholder.svg',
      price: '$129.99'
    },
    {
      id: '5',
      name: 'Summer Dress',
      category: 'dresses',
      image: '/placeholder.svg',
      price: '$89.99'
    },
    {
      id: '6',
      name: 'Formal Shirt',
      category: 'shirts',
      image: '/placeholder.svg',
      price: '$59.99'
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
            {category.name} ({category.count})
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
