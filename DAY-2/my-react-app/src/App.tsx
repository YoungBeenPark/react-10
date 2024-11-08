import React, { useState } from 'react';

// 자식 컴포넌트: CategorySelect
const CategorySelect = ({ categories, selected, onSelect }) => {
  return (
    <select value={selected} onChange={(e) => onSelect(e.target.value)} style={{ padding: '10px', width: '200px' }}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

// 자식 컴포넌트: ProductList
const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px', justifyContent:'center' }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #999', padding: '10px', margin: '10px', width: '150px', textAlign: 'center' }}>
          <h4>{product.name}</h4>
          <p>가격: {product.price}원</p>
        </div>
      ))}
    </div>
  );
};

// 부모 컴포넌트: ProductFilterApp
const ProductFilterApp = () => {
  const categories = ['전체', '전자제품', '의류', '식품', '오잉'];
  const [selectedCategory, setSelectedCategory] = useState('전체');


  const products = [
    { id: 1, name: '스마트폰', category: '전자제품', price: 700000 },
    { id: 2, name: '노트북', category: '전자제품', price: 1500000 },
    { id: 3, name: '티셔츠', category: '의류', price: 20000 },
    { id: 4, name: '청바지', category: '의류', price: 50000 },
    { id: 5, name: '과일 세트', category: '식품', price: 30000 },
    { id: 6, name: '스낵', category: '식품', price: 10000 },
  ];

  // 필터링된 상품 리스트
  const filteredProducts =
    selectedCategory === '전체' ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div style={{ width: '100%', margin: '50px auto', textAlign: 'center' }}>
      {/* 화면 중심에 맞는 너비 수정 */}
      <h2>상품 목록 필터링</h2>
      <CategorySelect categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductFilterApp;