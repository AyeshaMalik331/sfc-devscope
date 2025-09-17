import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react';
import petProductsData from '../../data/petProducts.json';

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    // Flatten all products from different categories
    const allProducts = [
      ...petProductsData.dogFood,
      ...petProductsData.catFood,
      ...petProductsData.toys,
      ...petProductsData.grooming,
      ...petProductsData.bedding,
      ...petProductsData.supplements
    ];
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);

  const categories = [
    { id: 'all', label: 'All Products', icon: '🛍️' },
    { id: 'dog', label: 'Dog Food', icon: '🐕' },
    { id: 'cat', label: 'Cat Food', icon: '🐱' },
    { id: 'toys', label: 'Toys', icon: '🎾' },
    { id: 'grooming', label: 'Grooming', icon: '🧴' },
    { id: 'bedding', label: 'Bedding & Apparel', icon: '🛏️' },
    { id: 'health', label: 'Health Supplements', icon: '💊' }
  ];

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <ShoppingBag className="w-8 h-8 text-orange-500" />
          Pet Product Showcase
        </h2>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-orange-50 rounded-lg px-4 py-3">
              <span className="text-orange-800 font-medium">
                {filteredProducts.length} products found
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-orange-500 bg-orange-50 text-orange-800'
                    : 'border-gray-200 hover:border-orange-300 text-gray-700'
                }`}
              >
                <div className="text-lg mb-1">{category.icon}</div>
                <span className="text-xs font-medium">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-colors ${
                    favorites.has(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                </motion.button>
                <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 rounded-full px-2 py-1">
                  <span className="text-xs font-medium text-gray-700">{product.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-orange-600">{product.price}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 btn-animate"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Product Categories Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Premium Pet Food",
                description: "High-quality nutrition for dogs and cats of all ages",
                icon: "🍽️",
                count: petProductsData.dogFood.length + petProductsData.catFood.length
              },
              {
                category: "Interactive Toys",
                description: "Engaging toys for mental stimulation and physical activity",
                icon: "🎾",
                count: petProductsData.toys.length
              },
              {
                category: "Grooming Essentials",
                description: "Professional-grade tools for at-home pet grooming",
                icon: "🧴",
                count: petProductsData.grooming.length
              },
              {
                category: "Comfort & Apparel",
                description: "Cozy beds, blankets, and weather protection",
                icon: "🛏️",
                count: petProductsData.bedding.length
              },
              {
                category: "Health Supplements",
                description: "Vitamins and supplements for optimal pet health",
                icon: "💊",
                count: petProductsData.supplements.length
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{info.category}</h4>
                <p className="text-sm text-gray-600 mb-3">{info.description}</p>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                  {info.count} products
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductShowcase;
