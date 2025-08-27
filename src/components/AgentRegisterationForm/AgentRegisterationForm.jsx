"use client";
import React, { Suspense, useState } from "react";
import styles from "./AgentRegisterationForm.module.scss";
import HeadingText from "@/commonComponents/uikit/HeadingText";
import ParaText from "@/commonComponents/uikit/ParaText";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import Loading from "@/app/loading";
import { message } from "antd";
import { publicRequest } from "@/utils/axios-utils";

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
    seasonalAvailability: [],
    supplyCapacity: "",
    idProof: null,
    license: null,
    agreement: false,
  });

  // Categories state
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryDescriptions, setCategoryDescriptions] = useState({}); // extra detail per category

  // Handle inputs
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  // Category dropdown select
  const handleCategoryChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCategories(values);

    // Remove descriptions of unselected categories
    setCategoryDescriptions((prev) => {
      const updated = {};
      values.forEach((cat) => {
        updated[cat] = prev[cat] || "";
      });
      return updated;
    });
  };

  const handleCategoryDescriptionChange = (cat, value) => {
    setCategoryDescriptions((prev) => ({
      ...prev,
      [cat]: value,
    }));
  };

  const handleSeasonalChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev.seasonalAvailability, value]
        : prev.seasonalAvailability.filter((v) => v !== value);
      return { ...prev, seasonalAvailability: updated };
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobile || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    const submissionData = {
      ...formData,
      categories: selectedCategories.map((cat) => ({
        name: cat,
        description: categoryDescriptions[cat] || "",
      })),
    };

    try {
      const response = await publicRequest({
        method: "post",
        url: "/agents/register",
        data: submissionData,
      });

      console.log(response.data.message, "response");
      message.success(response.data.message);
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
        seasonalAvailability: [],
        supplyCapacity: "",
        idProof: null,
        license: null,
        agreement: false,
      });

      setSelectedCategories([]);
      setCategoryDescriptions({});
    } catch (error) {
      message.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.AgentRegisterationForm}>
        <div className={styles.form_container}>
          <HeadingText
            textTitle={"Welcome, Absolute Travel Partners"}
            level={2}
            className={styles.heading}
          />
          <ParaText
            text={`Manage Travel & Tours and expand into State Specialties – Fruits, Spices, Handicrafts & More. One platform, endless opportunities.`}
            className={styles.para}
          />

          <form onSubmit={handleSubmit} className={styles.agentFormContainer}>
            <h2>Register as an Agent</h2>

            {/* Inputs */}
            <PrimaryInput
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <PrimaryInput
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <PrimaryInput
              type="email"
              placeholder="Email ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <PrimaryInput
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
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

            {/* Experience */}
            <PrimaryInput
              type="text"
              placeholder="Years of Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />

            {/* Category Dropdown */}
            <label>Category Selection</label>
            <select
              multiple
              className={styles.selectInput}
              value={selectedCategories}
              onChange={handleCategoryChange}
            >
              <option value="Bus">Bus</option>
              <option value="Taxi">Taxi</option>
              <option value="Hotel">Hotel</option>
              <option value="fruits">Fruits</option>
              <option value="spices">Spices</option>
              <option value="handicrafts">Handicrafts</option>
              <option value="beverages">Beverages</option>
              <option value="dryFruits">Dry Fruits</option>
              <option value="others">Others</option>
            </select>

            {/* Extra Inputs for each selected category */}
            {selectedCategories.map((cat) => (
              <div key={cat} className={styles.categoryDetails}>
                <label>Describe your {cat} offerings</label>
                <textarea
                  className={styles.textarea}
                  placeholder={`Enter details for ${cat} (e.g. Fruits → Apples, Mangoes)`}
                  value={categoryDescriptions[cat] || ""}
                  onChange={(e) =>
                    handleCategoryDescriptionChange(cat, e.target.value)
                  }
                />
              </div>
            ))}

            {/* State & City */}
            <label>State</label>
            <select
              className={styles.selectInput}
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="kashmir">Kashmir</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="assam">Assam</option>
            </select>

            <PrimaryInput
              type="text"
              placeholder="City / District"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <PrimaryInput
              type="text"
              placeholder="Main Products"
              name="mainProducts"
              value={formData.mainProducts}
              onChange={handleChange}
            />

            {/* Seasonal Availability */}
            <label>Seasonal Availability</label>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="summer"
                  checked={formData.seasonalAvailability.includes("summer")}
                  onChange={handleSeasonalChange}
                />{" "}
                Summer
              </label>
              <label>
                <input
                  type="checkbox"
                  value="winter"
                  checked={formData.seasonalAvailability.includes("winter")}
                  onChange={handleSeasonalChange}
                />{" "}
                Winter
              </label>
              <label>
                <input
                  type="checkbox"
                  value="allYear"
                  checked={formData.seasonalAvailability.includes("allYear")}
                  onChange={handleSeasonalChange}
                />{" "}
                All Year
              </label>
            </div>

            <PrimaryInput
              type="number"
              placeholder="Approx. Supply Capacity (per month)"
              name="supplyCapacity"
              value={formData.supplyCapacity}
              onChange={handleChange}
            />

            {/* File Upload */}
            <label>ID Proof (Aadhar / PAN)</label>
            <input
              type="file"
              name="idProof"
              className={styles.fileInput}
              onChange={handleChange}
            />

            <label>Business License / GST Certificate (optional)</label>
            <input
              type="file"
              name="license"
              className={styles.fileInput}
              onChange={handleChange}
            />

            {/* Agreement */}
            <label className={styles.agreement}>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />{" "}
              I agree to the terms & conditions of Absolute Travel marketplace.
            </label>

            <button type="submit" className={styles.submitBtn}>
              Register as Agent
            </button>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default AgentRegisterationForm;
