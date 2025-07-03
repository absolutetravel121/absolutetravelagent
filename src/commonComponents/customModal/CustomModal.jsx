"use client";
import React from "react";
import { Modal } from "antd";
import styles from "./CustomModal.module.scss";
import ImageWrapper from "../uikit/ImageWrapper";
import HeadingText from "../uikit/HeadingText";

const CustomModal = ({ open, onCancel, title, image, desc,alt }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      className={styles.customModal}
    >
      <div className={styles.modalContent}>
        <ImageWrapper src={image}  className={styles.image}/>
        <HeadingText level={3} textTitle={title} className={styles.title}/>
        <p className={styles.modalDesc}>{desc}</p>
      </div>
    </Modal>
  );
};

export default CustomModal;
