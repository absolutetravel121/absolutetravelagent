import travelAgent from "../../assets/images/travelAgent.png";
import google from "../../assets/icons/google.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Link from "next/link";
import styles from "./SignUpForm.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import PrimaryButton, {
  SecondaryBtn,
} from "@/commonComponents/uikit/PrimaryButton";
import AntdDivider from "@/commonComponents/uikit/AntdDivider";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
const SignUpForm = () => {
  return (
    <div className={styles.travlePartnerContainer}>
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
          textTitle={"Join Our Travel Partner Program"}
          level={2}
          className={styles.heading}
        />
        <ParaText
          text={`Become an authorized agent and grow your travel business, No setup fees. Quick approval. Start earning today!.`}
          className={styles.para}
        />
        <form action="" className={styles.formBody}>
          <div className={styles.inputBox}>
            <label htmlFor="FullName" className={styles.label}>
              Full Name
            </label>
            <PrimaryInput
              placeholder={"Full Name"}
              type={"text"}
              className={styles.input}
            />
          </div>
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
          <div className={styles.inputBox}>
            <label htmlFor="Re-Enter Password" className={styles.label}>
              Re-Enter Password
            </label>
            <PrimaryInput
              placeholder={"Re-Enter Password"}
              type={"password"}
              className={styles.input}
            />
          </div>
          <PrimaryButton
            label={"Sign Up"}
            className={styles.primaryBtn}
            href="./login"
          />
          <AntdDivider text={"OR"} className={styles.divider} />
          <SecondaryBtn
            label={"Google"}
            className={styles.secondaryBtn}
            icon={
              <ImageWrapper
                src={google}
                alt="Google"
                width={21}
                height={21}
                style={styles.icon}
              />
            }
          />

          <div className={styles.footerLink}>
            Already have an account ?
            <Link href="./login" className={styles.link}>
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
