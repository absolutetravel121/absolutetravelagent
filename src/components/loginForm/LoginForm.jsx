"use client";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
import travelAgent from "../../assets/images/travelAgent.png";
import google from "../../assets/icons/google.svg";
import React, { Suspense, useState } from "react";
import styles from "./LoginForm.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import CheckBox from "@/commonComponents/uikit/CheckBox";
import PrimaryButton, {
  SecondaryBtn,
} from "@/commonComponents/uikit/PrimaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PrimaryDivider from "@/commonComponents/uikit/PrimaryDivider";
import Loading from "@/app/loading";
const LoginForm = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/flights");
  };
  return (
    <Suspense fallback={<Loading/>}>
      <div className={styles.loginFormContainer}>
        <div className={styles.imageContainer}>
          <ImageWrapper
            src={travelAgent}
            fill={true}
            className={styles.image}
            alt="img"
          />
        </div>
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
              <PrimaryInput
                type={"password"}
                className={styles.input}
                placeholder={"Password"}
              />
            </div>
            <div className={styles.forgotPassword}>
              <CheckBox label={"Remember me"} className={styles.checkbox} />
              <Link href="./forgotPassword" className={styles.link}>
                Forgot Password
              </Link>
            </div>
            <div className={styles.btn}>
              <PrimaryButton
                label={"Login"}
                className={styles.primaryBtn}
                onClick={handleLogin}
              />
              <PrimaryDivider text={"OR"} className={styles.divider} />
              <SecondaryBtn
                label={"Google"}
                className={styles.secondaryBtn}
                icon={
                  <ImageWrapper
                    src={google}
                    alt="Google"
                    width={20}
                    height={20}
                    style={styles.icon}
                  />
                }
              />
            </div>
            <div className={styles.footerLink}>
              Don’t have an account ?
              <Link href="./signUp" className={styles.link}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default LoginForm;
