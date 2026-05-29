import React, { useState, useEffect } from "react";

function App() {
  const products = [
    { id: 1, name: "iPhone", category: "Mobile" },
    { id: 2, name: "Samsung", category: "Mobile" },
    { id: 3, name: "HP Laptop", category: "Laptop" },
    { id: 4, name: "MacBook", category: "Laptop" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = products;

    // Search Filter
    result = result.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Category Filter
    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(result);
  }, [search, category]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg bg-red-500">
      <h1 className="text-3xl font-bold text-center mb-6">Product Filter App</h1>

      <input
        type="text"
        placeholder="Search "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <br /><br />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="All">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
      </select>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;