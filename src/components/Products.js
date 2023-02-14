import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
  query {
    products(first: 2) {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.products.edges);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>
            <h3>{product.node.title}</h3>
            <img src={product.node.images.edges[0].node.originalSrc} alt={product.node.title} />
            <p>{product.node.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;