import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { add } from "../store/pracSlice";
import { addCart } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const { num, array } = useSelector((state) => state.prac);

  const handleAdd = (productId, product) => {
    dispatch(add(productId));
    dispatch(addCart(product));
  };

  useEffect(() => {
    dispatch(fetchProducts(array));
  }, [dispatch, array]);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>{num}</h1>
      <div className='productsWrapper'>
        {products.map((product) => (
          <div
            className='card'
            key={product.id}>
            <img
              src={product.image}
              alt=''
            />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              onClick={() => handleAdd(product.id, product)}
              className='btn'>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
