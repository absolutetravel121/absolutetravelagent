"use client";
import React, { useState } from "react";
import HeadingText from "../uikit/HeadingText";
import PrimaryInput from "../uikit/PrimaryInput";
import PrimaryButton from "../uikit/PrimaryButton";
import inquiry from "../../assets/icons/inquiry.svg";
import styles from "./DynamicInquiryForm.module.scss";
import { CalendarOutlined } from "@ant-design/icons";
import CustomModal from "../customModal/CustomModal";
import MobileCalender from "@/mobileResponsive/mobileCalendar/MobileCalendar";

const DynamicInquiryForm = ({ heading = "New Inquiry", fields = [] }) => {
  const [formData, setFormData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [activeLabel, setActiveLabel] = useState("");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenCalendar = (label) => {
    setActiveLabel(label);
    setOpenCalendar(true);
  };

  const handleCloseCalendar = () => {
    setOpenCalendar(false);
    setActiveLabel("");
  };

  const onSelectDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      [activeLabel]: date,
    }));
    handleCloseCalendar();
  };

  const handleInputChange = (label, value) => {
    setFormData((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  return (
    <div className={styles.inquiryFormContainer}>
      <HeadingText textTitle={heading} level={5} className={styles.heading} />
      <form className={styles.inquiryForm}>
        {fields.map(({ label, type, suffixIcon, placeholder }) => (
          <div key={label} className={styles.inputBox}>
            <label htmlFor={label}>{label}</label>
            <PrimaryInput
              type={type}
              className={styles.input}
              placeholder={placeholder}
              value={formData[label] || ""}
              onChange={(e) =>
                type !== "date" && handleInputChange(label, e.target.value)
              }
              suffix={
                suffixIcon ? (
                  <span onClick={() => handleOpenCalendar(label)} style={{ cursor: "pointer" }}>
                    <CalendarOutlined />
                  </span>
                ) : null
              }
              readOnly={type === "date"}
            />
          </div>
        ))}

        <div className={styles.buttonWrapper}>
          <PrimaryButton
            label="Send Inquiry"
            className={styles.btn}
            onClick={handleOpenModal}
          />
        </div>

        {openCalendar && (
          <MobileCalender
            title={activeLabel}
            visible={true}
            handleCloseCalendar={handleCloseCalendar}
            onSelectDate={onSelectDate}
          />
        )}

        {openModal && (
          <CustomModal
            open={openModal}
            onCancel={handleCloseModal}
            title="Inquiry has been sent"
            desc="Our team will give you a quote in the next 4-9 hours."
            image={inquiry}
          />
        )}
      </form>
    </div>
  );
};

export default DynamicInquiryForm;

