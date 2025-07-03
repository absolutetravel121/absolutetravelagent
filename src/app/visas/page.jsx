"use client";
import CustomTable from "@/commonComponents/customtable/CustomTable";
import DynamicInquiryForm from "@/commonComponents/dynamicInquiryForm/DynamicInquiryForm";
import Footer from "@/commonComponents/footer/Footer";
import Header from "@/commonComponents/header/Header";
import NavigationTab from "@/commonComponents/navigationTab/NavigationTab";
import OffersCard from "@/commonComponents/offers/OffersCard";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import { MobileTabData, TAB_CONTENT } from "@/constants/tabData";
import useCheckDeviceView from "@/hooks/useCheckDeviceView";
import BookingList from "@/mobileResponsive/BookList";
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import "../../assets/styles/styles.scss";
const tabsList = [
  { label: "Flights", href: "/flights" },
  { label: "Haj&Umrah", href: "/haj&umrah" },
  { label: "Visas", href: "/visas" },
  { label: "Hotels", href: "/hotels" },
];
const fieldsData = [
  { placeholder: "Name", label: "Name", suffixIcon: "" },
  {
    placeholder: "Date of Birth",
    label: "Date of Birth",
    suffixIcon: <CalendarOutlined />,
  },
  { placeholder: "From", label: "From", suffixIcon: <CalendarOutlined /> },
  { placeholder: "Marital Status", label: "Marital Status", suffixIcon: "" },
  { placeholder: "Destination", label: "Destination", suffixIcon: "" },
  {
    placeholder: "Purpose of visit",
    label: "Purpose of visit",
    suffixIcon: "",
  },
  { placeholder: "Departure Date", label: "Departure Date", suffixIcon: "" },
];

const page = () => {
  const { columns, data } = TAB_CONTENT["Visas"];
  const isMobile = useCheckDeviceView();
  return (
    <>
      <Header />
       <div className={`${isMobile ? "mobile-container" : "container"}`}>
        <div className={`${isMobile ? "center-y":"space-between" }`}>
          <NavigationTab tabsList={tabsList} />
          <PrimaryInput placeholder={"Search"} suffix={<SearchOutlined className="icon"/>} className={"search-input"}/>
        </div>
        <div>
          {isMobile ? (
            <BookingList bookings={MobileTabData} className={"order"} />
          ) : (
            <CustomTable columns={columns} data={data} />
          )}
        </div>
        {isMobile ? (
          <div className="center-x">
            <OffersCard />
            <DynamicInquiryForm
              heading={"New Visa Inquire"}
              fields={fieldsData}
            />
          </div>
        ) : (
          <div className="center-x">
            <OffersCard />
            <DynamicInquiryForm
              heading={"New Visa Inquire"}
              fields={fieldsData}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default page;
