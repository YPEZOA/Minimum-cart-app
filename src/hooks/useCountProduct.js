import React, { useState } from 'react';
// Assets
import styled from '@emotion/styled';
import iconCart from '../images/icon-cart.svg';

const ContainerCounter = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Increment = styled.button`
  background-color: #f2f2f2;
  border: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 900;
  font-size: 25px;
  color: orange;
  border-bottom-left-radius: 5px;
  border-top-lefu-radius: 5px;
  &:focus {
  outline: none;
  }
`;
const Decrement = styled.button`
 background-color: #f2f2f2;
 border: none;
  font-weight: 900;
  font-size: 25px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: orange;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  &:focus {
   outline:none;
  }
`;
const ProductAmount = styled.input`
  width: 55px;
  text-align: center;
  background-color: #f2f2f2;
  padding: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const AddToCartButton = styled.button`
   display: flex;
    align-items: center;
    background-color: hsl(26, 100%, 55%);
    padding: 10px;
    padding-left: 60px;
    padding-right:60px;
    border: none;
    border-radius: 10px;
    color: #fff;
    margin-left: 10px;
    &:focus {
      outline: none;
    }
`;

const IconImage = styled.img`
  width: 20px;
  margin-right: 10px;
  text-align:center;
`;

const useCountProduct = () => {
  const [count, setCount] = useState(0);
  const [counts, setTotalCounts] = useState([]);

  const canDecrement = count > 0;
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(canDecrement ? count - 1 : 0);

  const handleAddCart = () => {
    setTotalCounts([...counts, count]);
    setCount(0);
  };

  const CounterProduct = () => (
    <ContainerCounter>
      <Increment onClick={() => increment()}>+</Increment>
      <ProductAmount value={count} disabled />
      <Decrement onClick={() => decrement()}>-</Decrement>
      <AddToCartButton onClick={() => handleAddCart()}>
        <IconImage src={iconCart} alt="icon" />
        Add to cart
      </AddToCartButton>
    </ContainerCounter>
  );
  return [counts, CounterProduct];
};

export default useCountProduct;
