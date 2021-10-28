import React from 'react';
import PropTypes from 'prop-types';
import GridImages from '../GridImages/GridImages';
import iconClose from '../../images/icon-close.svg';

import './ModalImages.scss';

const ModalImages = ({ viewModal, modalState, setModalState }) => {
  const handleCloseModal = () => setModalState(false);
  return (
    <>
      {modalState && (
        <div className="container-modal">
          <div className="modal-images">
            <a href="#!" onClick={() => handleCloseModal()}>
              <img
                className="iconClose"
                src={iconClose}
                alt=""
              />
            </a>
            <GridImages
              viewModal={viewModal}
              modalState={modalState}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalImages;

ModalImages.propTypes = {
  viewModal: PropTypes.bool.isRequired,
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};
