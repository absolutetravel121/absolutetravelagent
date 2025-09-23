"use client";
import React, { Suspense, useRef, useState } from "react";
import styles from "./AgentRegisterationForm.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import Loading from "@/app/loading";
import { message, Spin } from "antd";
import { publicRequest } from "@/utils/axios-utils";
import { states } from "@/constants/StateData";

const AgentRegisterationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    businessName: "",
    gstNumber: "",
    experience: "",
    state: "",
    city: "",
    mainProducts: "",
    seasonalAvailability: "",
    supplyCapacity: "",
    idProof: null,
    license: null,
    agreement: false,
  });

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryDescriptions, setCategoryDescriptions] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const idProofRef = useRef(null);
  const licenseRef = useRef(null);

  const categoriesList = [
    "Bus",
    "Taxi",
    "Hotel",
    "Fruits",
    "Spices",
    "Handicrafts",
    "Beverages",
    "Dry Fruits",
    "Adventure Activities ( Camping, Trekking, Rafting )",
    "Others",
  ];

  const validationRules = {
    fullName: (v) => (!v.trim() ? "Full Name is required" : ""),
    mobile: (v) =>
      !v.trim()
        ? "Mobile Number is required"
        : !/^\d{10}$/.test(v.trim())
        ? "Mobile Number must be 10 digits"
        : "",
    email: (v) =>
      !v.trim()
        ? "Email is required"
        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v.trim())
        ? "Enter a valid Email"
        : "",
    address: (v) => (!v.trim() ? "Address is required" : ""),
    state: (v) => (!v.trim() ? "State is required" : ""),
    city: (v) => (!v.trim() ? "City / District is required" : ""),
    agreement: (v) => (!v ? "You must agree to the terms & conditions" : ""),
    idProof: (v) => (!v ? "Please upload ID Proof (Aadhar / PAN)" : ""),
  };

  const validateField = (name, value) => {
    if (validationRules[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: validationRules[name](value),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

  const handleCategoryToggle = (cat) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        const updated = prev.filter((c) => c !== cat);

         if (cat === "Fruits") {
          setFormData((prevData) => ({
            ...prevData,
            seasonalAvailability: "",
            supplyCapacity: "",
          }));
        }

        const { [cat]: _, ...rest } = categoryDescriptions;
        setCategoryDescriptions(rest);
        return updated;
      } else {
        return [...prev, cat];
      }
    });
  };

  const handleCategoryDescriptionChange = (cat, value) => {
    setCategoryDescriptions((prev) => ({ ...prev, [cat]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = {};
    Object.keys(validationRules).forEach((key) => {
      const error = validationRules[key](formData[key]);
      if (error) hasError = true;
      newErrors[key] = error;
    });
    setFormErrors(newErrors);
    if (hasError)
    return message.error("Please fix the errors before submitting");
    setLoader(true);

    try {
      const submissionData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "idProof" || key === "license") {
          if (formData[key]) submissionData.append(key, formData[key]);
        } else {
          submissionData.append(key, formData[key]);
        }
      });

      selectedCategories.forEach((cat, idx) => {
        submissionData.append(`categories[${idx}][name]`, cat);
        submissionData.append(
          `categories[${idx}][description]`,
          categoryDescriptions[cat] || ""
        );
      });

      const response = await publicRequest({
        method: "post",
        url: "/agents/register",
        data: submissionData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      message.success(response.data.message);
      setLoader(false);
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        businessName: "",
        gstNumber: "",
        experience: "",
        state: "",
        city: "",
        mainProducts: "",
        seasonalAvailability: "",
        supplyCapacity: "",
        idProof: null,
        license: null,
        agreement: false,
      });
      setSelectedCategories([]);
      setCategoryDescriptions({});
      setFormErrors({});
      if (idProofRef.current) idProofRef.current.value = null;
      if (licenseRef.current) licenseRef.current.value = null;
    } catch (error) {
      message.error(error.response?.data?.message || "Something went wrong");
      console.error(error);
      setLoader(false);
    }
  };

 
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.AgentRegisterationForm}>
        <div className={styles.form_container}>
          <HeadingText
            textTitle="Welcome, Absolute Travel Partners"
            level={2}
            className={styles.heading}
          />
          <ParaText
            text="Manage Travel & Tours and expand into State Specialties – Fruits, Spices, Handicrafts & More. One platform, endless opportunities."
            className={styles.para}
          />

          <form onSubmit={handleSubmit} className={styles.agentFormContainer}>
            <h2>Register as an Agent !</h2>
            <PrimaryInput
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {formErrors.fullName && (
              <span className={styles.error}>{formErrors.fullName}</span>
            )}

            <PrimaryInput
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              maxLength={10}
            />
            {formErrors.mobile && (
              <span className={styles.error}>{formErrors.mobile}</span>
            )}

            <PrimaryInput
              type="email"
              placeholder="Email ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className={styles.error}>{formErrors.email}</span>
            )}

            <PrimaryInput
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <span className={styles.error}>{formErrors.address}</span>
            )}

            <PrimaryInput
              type="text"
              placeholder="Business / Shop Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
            />
            <PrimaryInput
              type="text"
              placeholder="GST Number (optional)"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
            />
            <PrimaryInput
              type="text"
              placeholder="Years of Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />

            <label>Select Categories (You can select multiple)</label>
            <div className={styles.checkboxGroup}>
              {categoriesList.map((cat) => (
                <label key={cat}>
                  <input
                    type="checkbox"
                    value={cat}
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            {selectedCategories.map((cat) => (
              <div key={cat} className={styles.categoryDetails}>
                <label>Describe your {cat} offerings</label>
                <textarea
                  className={styles.textarea}
                  placeholder={`Enter details for ${cat}`}
                  value={categoryDescriptions[cat] || ""}
                  onChange={(e) =>
                    handleCategoryDescriptionChange(cat, e.target.value)
                  }
                />
              </div>
            ))}

             {selectedCategories.includes("Fruits") && (
              <>
                <label>Seasonal Availability</label>
                <div className={styles.checkboxGroup}>
                  {["summer", "winter", "allYear"].map((season) => (
                    <label key={season}>
                      <input
                        type="radio"
                        name="seasonalAvailability"
                        value={season}
                        checked={formData.seasonalAvailability === season}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            seasonalAvailability: e.target.value,
                          }))
                        }
                      />
                      {season.charAt(0).toUpperCase() + season.slice(1)}
                    </label>
                  ))}
                </div>

                <PrimaryInput
                  type="text"
                  placeholder="Approx. Supply Capacity (per month eg 50kg/month)"
                  name="supplyCapacity"
                  value={formData.supplyCapacity}
                  onChange={handleChange}
  
                />
              </>
            )}

            <label>State</label>
            <select
              className={styles.selectInput}
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {formErrors.state && (
              <span className={styles.error}>{formErrors.state}</span>
            )}

            <PrimaryInput
              type="text"
              placeholder="City / District"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && (
              <span className={styles.error}>{formErrors.city}</span>
            )}

            <PrimaryInput
              type="text"
              placeholder="Main Products (optional)"
              name="mainProducts"
              value={formData.mainProducts}
              onChange={handleChange}
            />

            <label>ID Proof (Aadhar / PAN)</label>
            <input
              type="file"
              name="idProof"
              className={styles.fileInput}
              onChange={handleChange}
              ref={idProofRef}
            />
            {formErrors.idProof && (
              <span className={styles.error}>{formErrors.idProof}</span>
            )}

            <label>Business License / GST Certificate (optional)</label>
            <input
              type="file"
              name="license"
              className={styles.fileInput}
              onChange={handleChange}
              ref={licenseRef}
            />

            <label className={styles.agreement}>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />{" "}
              I agree to the terms & conditions of Absolute Travel marketplace.
            </label>
            {formErrors.agreement && (
              <span className={styles.error}>{formErrors.agreement}</span>
            )}

            <button type="submit" className={styles.submitBtn}>
              {loader ? <Spin size="small" /> : "Register as Agent"}
            </button>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default AgentRegisterationForm;
