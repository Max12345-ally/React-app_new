import React from 'react';
import {Modal, BG, Close} from './styles';

function ModalComponent({toggleModal}) {
  return (
    <div>
      <Modal>
        <Close />
      </Modal>
      <BG onClick={toggleModal} />
    </div>
  );
}

export default ModalComponent;
