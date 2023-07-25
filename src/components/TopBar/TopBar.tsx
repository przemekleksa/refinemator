import React, { useState } from 'react';
import RFT from '../../assets/RFT.png';
import styles from './TopBar.module.scss';
import { Button } from '../Button/Button';
import { AddSection } from '../Section/AddSection';
import { Modal } from '../Modal/Modal';

export const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        Refinemator
        <img src={RFT} alt="" />
      </div>
      TopBar
      <Button onClick={() => setOpenModal(true)}>Add section</Button>
      {openModal && (
        <Modal onClose={() => setOpenModal(!openModal)}>
          <AddSection />
        </Modal>
      )}
    </div>
  );
};
