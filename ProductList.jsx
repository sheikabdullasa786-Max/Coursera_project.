function ProductList() {
  const products = [
    { id: 1, name: "Aloe Vera", price: 250 },
    { id: 2, name: "Snake Plant", price: 300 },
    { id: 3, name: "Money Plant", price: 200 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
