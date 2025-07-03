import React from "react";
import ImageWrapper from "../uikit/ImageWrapper";
import styles from "./DynamicForm.module.scss";
import PrimaryInput from "../uikit/PrimaryInput";
import ParaText from "../uikit/ParaText";
import HeadingText from "../uikit/HeadingText";
import CheckBox from "../uikit/CheckBox";
import PrimaryButton, { SecondaryBtn } from "../uikit/PrimaryButton";
import AntdDivider from "../uikit/PrimaryDivider";
import google from "../../assets/icons/google.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Link from "next/link";
const DynamicForm = ({ href }) => {
  return (
    <div className={styles.form_container}>
      <HeadingText
        textTitle={"Welcome, Travel Partners!"}
        level={2}
        className={styles.heading}
      />
      <ParaText
        text={`Access your dashboard to manage bookings, check commission status, and explore exclusive deals for flights, hotels, visas, Haj & Umrah, and more.`}
        className={styles.para}
      />
      <form action="" className={styles.formBody}>
        <div className={styles.inputBox}>
          <label htmlFor="Email" className={styles.label}>
            Email
          </label>
          <PrimaryInput
            placeholder={"example@gmail.com"}
            type={"text"}
            className={styles.input}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="Password" className={styles.label}>
            Password
          </label>
          <PrimaryInput type={"password"} className={styles.input} />
        </div>
        <div className={styles.forgotPassword}>
          <CheckBox label={"Remember me"} className={styles.checkbox} />
          <Link href="./forgotPassword" className={styles.link}>
            Forgot Password
          </Link>
        </div>
        <div className={styles.btn}>
          <PrimaryButton label={"Login"} className={styles.primaryBtn} />
          <AntdDivider text={"OR"} className={styles.divider} />
          <SecondaryBtn
            label={"Google"}
            className={styles.secondaryBtn}
            icon={
              <ImageWrapper
                src={google}
                alt="Google"
                width={24}
                height={24}
                style={styles.icon}
              />
            }
          />
          <SecondaryBtn
            label={"Facebook"}
            className={styles.secondaryBtn}
            icon={
              <ImageWrapper
                src={Facebook}
                alt="Facebook"
                width={24}
                height={24}
                style={styles.icon}
              />
            }
          />
        </div>
        <div className={styles.footerLink}>
          Don’t have an account ?
          <Link href={href} className={styles.link}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
