import React from "react";
import travelAgent2 from "../../assets/images/travelAgent2.png";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
import styles from "./ForgotPassword.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import PrimaryButton from "@/commonComponents/uikit/PrimaryButton";
const ForgotPassword = () => {
  return (
    <div className={styles.forgetPasswordContainer}>
      <div className={styles.imageContainer}>
        <ImageWrapper
          src={travelAgent2}
          fill={true}
          className={styles.image}
          alt="img"
        />
      </div>
      <div className={styles.form_container}>
        <div className={styles.formTitle}>
          <HeadingText
            textTitle={"Forgot Password"}
            level={2}
            className={styles.heading}
          />
          <ParaText
            text={`Don’t worry, we’ll assist you resetting you password.`}
            className={styles.para}
          />
        </div>
        <form action="" className={styles.formBody}>
          <div className={styles.inputBox}>
            <label htmlFor="Email" className={styles.label}>
              Enter Registered Email
            </label>
            <PrimaryInput
              placeholder={"example@gmail.com"}
              type={"text"}
              className={styles.input}
            />
          </div>
          <PrimaryButton
            label={"Enter"}
            className={styles.primaryBtn}
            href="./one"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
