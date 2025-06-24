import React, { useState } from "react";
import { Button, Modal } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const PopupModal = ({ text, label,icon}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {label}
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>{icon}</span>
        
        <Paragraph>{text}</Paragraph>
      </Modal>
    </>
  );
};

export default PopupModal;
