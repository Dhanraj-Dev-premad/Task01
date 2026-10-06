
import React, {createContext, useContext, useState} from 'react';

// 1. Create Context
const ProductContext = createContext();

// 2. Create Provider
export const ProductProvider = ({children}) => {

const [products, setProducts] = useState([
  // ==================== PHONES ====================

  {
    id: 'phone-001',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '20%',
    productName: 'iPhone 11 64GB',
    companyName: 'Apple',
    color: 'Black',
    storage: '64GB',
    size: '6.1 inch',
    price: '$399',
    originalPrice: '$499',
    stock: 12,
    rating: 4.5,
    reviews: 245,
    description:
      'Apple iPhone 11 with 64GB storage, powerful performance and an excellent camera.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-002',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '15%',
    productName: 'iPhone 13 128GB',
    companyName: 'Apple',
    color: 'Blue',
    storage: '128GB',
    size: '6.1 inch',
    price: '$599',
    originalPrice: '$699',
    stock: 18,
    rating: 4.7,
    reviews: 532,
    description:
      'iPhone 13 with 128GB storage, Super Retina display and advanced camera system.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-003',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '12%',
    productName: 'iPhone 14 256GB',
    companyName: 'Apple',
    color: 'Purple',
    storage: '256GB',
    size: '6.1 inch',
    price: '$749',
    originalPrice: '$849',
    stock: 10,
    rating: 4.8,
    reviews: 421,
    description:
      'iPhone 14 with 256GB storage and a powerful dual-camera system.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-004',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '10%',
    productName: 'iPhone 15 128GB',
    companyName: 'Apple',
    color: 'Pink',
    storage: '128GB',
    size: '6.1 inch',
    price: '$799',
    originalPrice: '$899',
    stock: 15,
    rating: 4.8,
    reviews: 685,
    description:
      'iPhone 15 featuring USB-C, Dynamic Island and an advanced camera.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-005',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '8%',
    productName: 'iPhone 15 Pro 256GB',
    companyName: 'Apple',
    color: 'Titanium',
    storage: '256GB',
    size: '6.1 inch',
    price: '$999',
    originalPrice: '$1099',
    stock: 8,
    rating: 4.9,
    reviews: 812,
    description:
      'Premium iPhone 15 Pro with titanium design, powerful processor and 256GB storage.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-006',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '5%',
    productName: 'iPhone 17 512GB',
    companyName: 'Apple',
    color: 'Black',
    storage: '512GB',
    size: '6.3 inch',
    price: '$1199',
    originalPrice: '$1260',
    stock: 6,
    rating: 4.9,
    reviews: 312,
    description:
      'High-end iPhone with 512GB storage, premium design and powerful performance.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-007',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '18%',
    productName: 'Samsung Galaxy S24',
    companyName: 'Samsung',
    color: 'Black',
    storage: '256GB',
    size: '6.2 inch',
    price: '$699',
    originalPrice: '$849',
    stock: 14,
    rating: 4.7,
    reviews: 734,
    description:
      'Samsung Galaxy flagship phone with 256GB storage and premium AMOLED display.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-008',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '15%',
    productName: 'Samsung Galaxy S24 Ultra',
    companyName: 'Samsung',
    color: 'Gray',
    storage: '512GB',
    size: '6.8 inch',
    price: '$1099',
    originalPrice: '$1299',
    stock: 7,
    rating: 4.9,
    reviews: 924,
    description:
      'Galaxy S24 Ultra with 512GB storage, large display and professional camera system.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  // ==================== SHOES ====================

  {
    id: 'shoe-001',
    category: 'Shoes',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '25%',
    productName: 'Nike Air Max',
    companyName: 'Nike',
    color: 'Black',
    size: '8',
    availableSizes: ['7', '8', '9', '10', '11'],
    price: '$89',
    originalPrice: '$119',
    stock: 20,
    rating: 4.6,
    reviews: 321,
    description:
      'Comfortable Nike Air Max shoes designed for everyday wear and running.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'shoe-002',
    category: 'Shoes',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '20%',
    productName: 'Nike Revolution 7',
    companyName: 'Nike',
    color: 'White',
    size: '9',
    availableSizes: ['7', '8', '9', '10', '11'],
    price: '$79',
    originalPrice: '$99',
    stock: 16,
    rating: 4.5,
    reviews: 198,
    description:
      'Lightweight Nike running shoes with soft cushioning and breathable material.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'shoe-003',
    category: 'Shoes',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '30%',
    productName: 'Bata Casual Shoes',
    companyName: 'Bata',
    color: 'Brown',
    size: '9',
    availableSizes: ['6', '7', '8', '9', '10'],
    price: '$49',
    originalPrice: '$69',
    stock: 25,
    rating: 4.3,
    reviews: 156,
    description:
      'Stylish Bata casual shoes suitable for office and everyday use.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'shoe-004',
    category: 'Shoes',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '18%',
    productName: 'Adidas Ultraboost',
    companyName: 'Adidas',
    color: 'White',
    size: '10',
    availableSizes: ['7', '8', '9', '10', '11'],
    price: '$129',
    originalPrice: '$159',
    stock: 11,
    rating: 4.8,
    reviews: 487,
    description:
      'Premium Adidas running shoes with responsive cushioning and comfortable fit.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'shoe-005',
    category: 'Shoes',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '22%',
    productName: 'Puma Sports Runner',
    companyName: 'Puma',
    color: 'Blue',
    size: '8',
    availableSizes: ['7', '8', '9', '10'],
    price: '$69',
    originalPrice: '$89',
    stock: 19,
    rating: 4.4,
    reviews: 276,
    description:
      'Puma sports shoes designed for comfortable workouts and daily activities.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  // ==================== MORE PRODUCTS ====================

  {
    id: 'shoe-006',
    category: 'Shoes',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '28%',
    productName: 'Nike Air Force 1',
    companyName: 'Nike',
    color: 'White',
    size: '10',
    availableSizes: ['7', '8', '9', '10', '11'],
    price: '$99',
    originalPrice: '$139',
    stock: 13,
    rating: 4.8,
    reviews: 645,
    description:
      'Classic Nike Air Force 1 sneakers with a clean design and comfortable sole.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-009',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '20%',
    productName: 'Google Pixel 9',
    companyName: 'Google',
    color: 'Green',
    storage: '256GB',
    size: '6.3 inch',
    price: '$699',
    originalPrice: '$799',
    stock: 9,
    rating: 4.7,
    reviews: 365,
    description:
      'Google Pixel with excellent camera quality and smooth Android performance.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },

  {
    id: 'phone-010',
    category: 'Phone',
    image: require('../AssetsE/Img/ComponentImg/Phone.png'),
    discount: '15%',
    productName: 'OnePlus 13',
    companyName: 'OnePlus',
    color: 'Black',
    storage: '256GB',
    size: '6.8 inch',
    price: '$649',
    originalPrice: '$749',
    stock: 17,
    rating: 4.6,
    reviews: 291,
    description:
      'Powerful OnePlus smartphone with high performance and 256GB storage.',
    isFavorite: false,
    quantity: 1,
    inCart: false,
  },
]);



  // Function
  const addProduct = product => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  const getProductById = (id) => {
  return products.find(product => product.id === id);
};

const getProductsByCategory = (category) => {
  return products.filter(
    product => product.category === category
  );
};
const searchProducts = (text) => {
  return products.filter(product =>
    product.productName
      .toLowerCase()
      .includes(text.toLowerCase())
  );
  
};
const getProductsByCompany = (company) => {
  return products.filter(
    product => product.companyName === company
  );
};

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        getProductById,
        getProductsByCategory,
        searchProducts,
        getProductsByCompany,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

// 3. Custom Hook
export const useProduct = () => {
  return useContext(ProductContext);
};

  