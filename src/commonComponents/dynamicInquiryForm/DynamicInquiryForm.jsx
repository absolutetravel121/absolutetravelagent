"use client";
import React, {  useState } from "react";
import HeadingText from "../uikit/HeadingText";
import PrimaryInput from "../uikit/PrimaryInput";
import PrimaryButton from "../uikit/PrimaryButton";
import inquiry from "../../assets/icons/inquiry.svg";
import styles from "./DynamicInquiryForm.module.scss";
import { CalendarOutlined } from "@ant-design/icons";
import CustomModal from "../customModal/CustomModal";
import CalendarWidget from "../uikit/Calendar";
const DynamicInquiryForm = ({ heading = "New Inquiry", fields = [] }) => {
const [openModal,setOpenModal]=useState(false);
const [openCalendar, setOpenCalendar] = useState(false);
const handleOpenModal = () => {
  setOpenModal(true);
}
const handleCloseModal = () => {
  setOpenModal(false);
}
const handleOpenCalendar = () => {
  setOpenCalendar(true);
}
  return (
    <div className={styles.inquiryFormContainer}>
      <HeadingText textTitle={heading} level={5} className={styles.heading} />
      <form className={styles.inquiryForm}>
        {fields.map(({ label, type = "text", suffixIcon, placeholder }) => (
          <div key={label} className={styles.inputBox}>
            <label htmlFor={label}>{label}</label>
            <PrimaryInput
              type={type}
              onChange={type === "date" ? handleOpenCalendar : null}
              className={styles.input}
              placeholder={placeholder}
              suffix={suffixIcon ? <CalendarOutlined /> : null}
            />
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <PrimaryButton label="Send Inquiry" className={styles.btn} onClick={handleOpenModal} />
        </div>
        {openCalendar && <CalendarWidget value={"hello"} onSelect={"hello"}/>}
          {openModal && (
        <CustomModal
          open={handleOpenModal}
          onCancel={handleCloseModal}
          title={"Inquiry has been sent"}
          desc={`Our team will give you a quote in the next 4-9 hours.`}
          image={inquiry}
        />
      )}
      </form>
    </div>
  );
};

export default DynamicInquiryForm
