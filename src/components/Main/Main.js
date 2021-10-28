import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GridImages from '../GridImages/GridImages';
import useCountProduct from '../../hooks/useCountProduct';

// Assets
import './Main.scss';

const Main = ({ onHandleOpenImages, setCounts }) => {
  const [counts, CounterProduct] = useCountProduct();

  useEffect(() => {
    setCounts(counts);
  });

  return (
    <div className="main">
      <section className="section-images">
        <GridImages onHandleOpenImages={onHandleOpenImages} />
      </section>
      <section className="product-info">
        <span className="company">SNEAKER COMPANY</span>
        <h2 className="product-title">Fall Limited Sneakers</h2>
        <p className="description">
          These low-profile sneakers are you perfect casual wear companion. Featuring a durable
          rubber outer sole, they'll withstand evertything the weather can offer.
        </p>
        <span className="price"> $125.00</span>
        <span className="discount">$250.00</span>
        <CounterProduct />
      </section>
    </div>
  );
};

export default Main;

Main.displayName = 'Main';

Main.propTypes = {
  onHandleOpenImages: PropTypes.func.isRequired,
  // setCounter: PropTypes.func.isRequired,
};
