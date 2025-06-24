"use client";
import headerlogo from "./../../assets/icons/headerlogo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.scss";
import ImageWrapper from "../uikit/ImageWrapper";
import useCheckDeviceView from "@/hooks/useCheckDeviceView";

const headerTabContent = [
  {
    text: "Dashboard",
    href: "/",
    popoverelement: false,
  },
  {
    text: "My Account",
    href: "/travel-store",
    popoverelement: false,
  },
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

  return (
    <>
      <div className={styles.headerContainer}>
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
        </div>
      </div>
    </>
  );
};

export default Header;
