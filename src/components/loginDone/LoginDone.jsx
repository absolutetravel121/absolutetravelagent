import React from "react";
import travelAgent2 from "../../assets/images/travelAgent2.png";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
import styles from "./LoginDone.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import likeIcon from "@/assets/icons/likeIcon.png";

const LoginDone = () => {
  return (
    <div className={styles.LoginDoneContainer}>
      <div className={styles.imageContainer}>
        <ImageWrapper
          src={travelAgent2}
          fill={true}
          className={styles.image}
          alt="img"
        />
      </div>
      <div className={styles.data_container}>
        <div className={styles.data}>
          <HeadingText
            textTitle={"All Done !"}
            level={2}
            className={styles.heading}
          />
          <ParaText
            text={`We have sent a link to your registered email ID to reset your password.`}
            className={styles.para}
          />
        </div>
        <ImageWrapper
          src={likeIcon}
          width={160}
          className={styles.icon}
          alt="img"
        />
      </div>
    </div>
  );
};

export default LoginDone;
