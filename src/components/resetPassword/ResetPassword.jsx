import React, { Suspense } from "react";
import travelAgent2 from "../../assets/images/travelAgent2.png";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
import styles from "./ResetPassword.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import PrimaryButton from "@/commonComponents/uikit/PrimaryButton";
const ResetPassword = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className={styles.resetPasswordContainer}>
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
            textTitle={"Reset Password"}
            level={2}
            className={styles.heading}
          />
          <ParaText
            text={`Reset your current password.`}
            className={styles.para}
          />
        </div>
        <form action="" className={styles.formBody}>
          <div className={styles.inputBox}>
            <label htmlFor="New Password" className={styles.label}>
              New Password{" "}
            </label>
            <PrimaryInput
              type={"password"}
              className={styles.input}
              placeholder={"Password"}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="Re-Enter Password" className={styles.label}>
              Re-Enter Password{" "}
            </label>
            <PrimaryInput
              type={"password"}
              className={styles.input}
              placeholder={"Re-Enter Password"}
            />
          </div>
          <PrimaryButton label={"Confirm"} className={styles.primaryBtn} />
        </form>
      </div>
    </div>
    </Suspense>
  );
};

export default ResetPassword;
