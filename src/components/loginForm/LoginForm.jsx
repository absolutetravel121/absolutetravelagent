"use client";
import React, { useState, Suspense } from "react";
import styles from "./LoginForm.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import Loading from "@/app/loading";
import { publicRequest } from "@/utils/axios-utils";
import { message } from "antd";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
  });
  const router = useRouter()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.emailOrMobile || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await publicRequest({
        method: "post",
        url: "/agents/login",
        data: {
          username: formData.emailOrMobile,
          password: formData.password,
        },
      });

      console.log(response, "response");
      localStorage.setItem("agentToken", response.data.token);
      router.push("/dashboard");
      message.success("Login successful!");

    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      message.error(error.response.data.message || "Login failed");
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.form_container}>
        <HeadingText
          textTitle={"Welcome Back, Absolute Travel Partners"}
          level={2}
          className={styles.heading}
        />
        <ParaText
          text={`Login to manage your travel & tours or explore state specialties.`}
          className={styles.para}
        />

        <form onSubmit={handleSubmit} className={styles.agentFormContainer}>
          <h2>Agent Login</h2>

          <PrimaryInput
            type="text"
            placeholder="Email or Mobile Number"
            name="emailOrMobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
            required
          />

          <PrimaryInput
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
