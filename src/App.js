import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import ModalImages from './components/ModalImages/ModalImages';
// Assets
import './App.scss';

const App = () => {
  const [viewModal, setViewModal] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [counter, setCounter] = useState(0);
  const [totalCounts, setCounts] = useState([]);

  const handleOpenImages = () => {
    setModalState(true);
    setViewModal(true);
  };

  const totalCountsForBadge = totalCounts.reduce((acc, el) => acc + el, 0);

  return (
    <div className="App">
      <Header totalCountsForBadge={totalCountsForBadge} />
      <Main
        onHandleOpenImages={handleOpenImages}
        setTotalCounts={setCounts}
        setCounts={setCounts}
      />
      <Cart />
      <ModalImages
        viewModal={viewModal}
        modalState={modalState}
        setModalState={setModalState}
      />
    </div>
  );
};

export default App;
