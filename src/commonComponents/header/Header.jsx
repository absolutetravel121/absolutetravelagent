"use client";
import headerlogo from "./../../assets/icons/headerlogo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.scss";
import ImageWrapper from "../uikit/ImageWrapper";
import useCheckDeviceView from "@/hooks/useCheckDeviceView";
import PrimaryButton from "../uikit/PrimaryButton";

const headerTabContent = [
  // {
  //   text: "My Account",
  //   href: "/travel-store",
  //   popoverelement: false,
  // },
];

const Header = () => {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const isMobile = useCheckDeviceView();
  const { push } = useRouter();

  const openLogin = () => {
    setOpenLoginForm(true);
  };

  const modalClose = () => {
    setOpenLoginForm(false);
  };

  const handleLoginAgent = () => {
    push("/login");
  };

  return (
    <>
      <div className={styles.headerContainer}>
        {/* Left side logo */}
        <div>
          <ImageWrapper
            onClick={() => push("/")}
            height={isMobile ? 40 : 60}
            width={isMobile ? 40 : 60}
            src={headerlogo}
            alt="headerLogo"
            className={`cursor-pointer ${styles.headerLogo}`}
          />
        </div>

        {/* Right side menu */}
        <div className={styles.header_menu}>
          {headerTabContent?.map((item, index) => {
            return item?.popoverelement ? (
              <div className={styles.popOverContainer} key={index}></div>
            ) : (
              <span
                key={index}
                className={styles.headermenu_text}
                onClick={() => push(item?.href)}
              >
                {item?.text}
              </span>
            );
          })}

          <span
            className={`${styles.headermenu_text} cursor-pointer`}
            onClick={openLogin}
          >
            Already Registered?{" "}
            <PrimaryButton
              className={styles.primaryButton}
              label={"Login"}
              onClick={handleLoginAgent}
            />
          </span>
        </div>
      </div>

       {openLoginForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={modalClose} className={styles.closeBtn}>
              ✕
            </button>
            <h2>Login Form</h2>
           </div>
        </div>
      )}
    </>
  );
};

export default Header;
