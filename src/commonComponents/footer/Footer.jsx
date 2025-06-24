"use client";
import React from "react";
import styles from "./Footer.module.scss";
import linkedin from "../../assets/Icons/linkedin.svg";
// import facebook from "../../assets/Icons/facebookIcon.svg";
import whatsapp from "../../assets/Icons/whatsapp.svg";
import phone from "../../assets/Icons/phone.svg";
import mail from "../../assets/Icons/mail.svg";
import { usePathname, useRouter } from "next/navigation";
import HeadingText from "../uikit/HeadingText";
import ImageWrapper from "../uikit/ImageWrapper";
import useCheckDeviceView from "@/hooks/useCheckDeviceView";
const Footer = () => {
  const pathname = usePathname();
  const isMobile = useCheckDeviceView();
  const { push } = useRouter();

  return (
    <div
      className={`${styles.footerContainer} ${
        isMobile ? "spacing-btwSection-mobile" : "spacing-btwItems-desktop"
      }`}
      style={{
        marginTop: pathname === "/stories" && 0,
      }}
    >
      <div className={styles.innerContainer}>
        <div className={styles.footerLinks}>
          <span
            onClick={() => push("/about")}
            className={styles.footerPageLinks}
          >
            About Us
          </span>
          <span
            onClick={() => push("/jobopening")}
            className={styles.footerPageLinks}
          >
            Careers
          </span>
          <span
            onClick={() => push("/help")}
            className={styles.footerPageLinks}
          >
            Help Centre
          </span>
          <span
            onClick={() => push("/review")}
            className={styles.footerPageLinks}
          >
            Write a review
          </span>
          <span
            onClick={() => push("/terms&condition")}
            className={styles.footerPageLinks}
          >
            {isMobile ? "T&C" : "Terms &Conditions"}
          </span>
          <span
            onClick={() => push("/privacy")}
            className={styles.footerPageLinks}
          >
            Privacy Policy
          </span>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footer_content}>
            <HeadingText textTitle={"Corporate Office:"} level={2} />
            <div className={styles.officeInfo}>
              <HeadingText
                textTitle={"Om vihar Uttam nagar West Delhi"}
                level={4}
              />
              <HeadingText textTitle={"New Delhi - 59,"} level={4} />
              <HeadingText textTitle={" Phone +91 9958544930"} level={4} />
              <HeadingText
                textTitle={"Email-contactus@absolutetravel.co.in"}
                level={4}
              />
            </div>
          </div>
          <div className={styles.footer_content}>
            <HeadingText textTitle={isMobile ? "" : "Follow us"} level={2} />
            <div className={styles.social_images}>
              <ImageWrapper
                src={linkedin}
                alt="likedin"
                width={isMobile ? 21 : 41}
                height={isMobile ? 21 : 41}
              />
              {/* <ImageWrapper
                src={facebook}
                alt="facebook"
                width={isMobile ? 21 : 41}
                height={isMobile ? 21 : 41}
              /> */}
              <ImageWrapper
                src={whatsapp}
                alt="whatsapp"
                width={isMobile ? 21 : 41}
                height={isMobile ? 21 : 41}
              />
            </div>
          </div>
          <div className={styles.footer_content}>
            <div className={styles.footer_contactUs}>
              <ImageWrapper
                src={phone}
                alt="phone"
                width={isMobile ? 21 : 41}
                height={isMobile ? 21 : 41}
              />
              <HeadingText textTitle={"+91 9958544930"} level={4} />
            </div>
            <div className={styles.footer_contactUs}>
              <ImageWrapper
                src={mail}
                alt="mail"
                width={isMobile ? 21 : 41}
                height={isMobile ? 21 : 41}
              />
              <HeadingText
                textTitle={"contactus@absolutetravel.co.in"}
                level={4}
              />
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <HeadingText
            textTitle={"All rights reserved @2024"}
            level={4}
            className={styles.rightsText}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
