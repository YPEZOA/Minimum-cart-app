import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';
import iconNext from '../../images/icon-next.svg';
import iconPrevious from '../../images/icon-previous.svg';

// Assets
import './GridImages.scss';

const GridImages = ({ viewModal, onHandleOpenImages, modalState }) => {
  const [image, setImage] = useState('');

  const onClickImage = ({ target: { attributes: { src: { value } } } }) => {
    const srcValue = value;
    setImage(srcValue);
  };

  const handleOpenImages = (e) => e.preventDefault();

  return (
    <div className="images">
      {viewModal ? (
        <img src={iconPrevious} alt="previous" className="previous" />
      ) : null}
      {viewModal ? <img src={iconNext} alt="next" className="next" /> : null}

      <div className="container-main_image">
        <a
          href="#!"
          onClick={
            modalState ? (e) => handleOpenImages(e) : () => onHandleOpenImages()
          }
        >
          <img
            src={image || image1}
            alt=""
          />
        </a>
      </div>
      <a href="#!" onClick={(e) => onClickImage(e)}>
        <img
          src={image1}
          alt=""
          className="child-image"
        />
      </a>
      <a href="#!" onClick={(e) => onClickImage(e)}>
        <img
          src={image2}
          alt=""
          className="child-image"
        />
      </a>
      <a href="#!" onClick={(e) => onClickImage(e)}>
        <img
          src={image3}
          alt=""
          className="child-image"
        />
      </a>
      <a href="#!" onClick={(e) => onClickImage(e)}>
        <img
          src={image4}
          alt=""
          className="child-image"
        />
      </a>

    </div>
  );
};

export default GridImages;
GridImages.defaultProps = {
  viewModal: false,
  modalState: false,
  onHandleOpenImages: null,
};

GridImages.propTypes = {
  viewModal: PropTypes.bool,
  onHandleOpenImages: PropTypes.func,
  modalState: PropTypes.bool,
};
