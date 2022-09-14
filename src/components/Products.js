import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
