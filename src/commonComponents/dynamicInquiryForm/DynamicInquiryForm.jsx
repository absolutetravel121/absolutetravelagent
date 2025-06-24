import React from "react";
import HeadingText from "../uikit/HeadingText";
import PrimaryInput from "../uikit/PrimaryInput";
import PrimaryButton from "../uikit/PrimaryButton";
import styles from "./DynamicInquiryForm.module.scss";
import { CalendarOutlined } from "@ant-design/icons";

/**
 * @param {{
 *   heading: string,
 *   fields: Array<{ label: string, type?: string, suffixIcon?: boolean }>
 * }} props
 */
const DynamicInquiryForm = ({ heading = "New Inquiry", fields = [] }) => {
  return (
    <div className={styles.inquiryFormContainer}>
      <HeadingText textTitle={heading} level={5} className={styles.heading} />
      <form className={styles.inquiryForm}>
        {fields.map(({ label, type = "text", suffixIcon, placeholder }) => (
          <div key={label} className={styles.inputBox}>
            <label htmlFor={label}>{label}</label>
            <PrimaryInput
              type={type}
              className={styles.input}
              placeholder={placeholder}
              suffix={suffixIcon ? <CalendarOutlined /> : null}
            />
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <PrimaryButton label="Send Inquiry" className={styles.btn} />
        </div>
      </form>
    </div>
  );
};

export default DynamicInquiryForm;
