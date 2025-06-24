"use client";
import CustomTable from "@/commonComponents/customtable/CustomTable";
import DynamicInquiryForm from "@/commonComponents/dynamicInquiryForm/DynamicInquiryForm";
import Footer from "@/commonComponents/footer/Footer";
import Header from "@/commonComponents/header/Header";
import NavigationTab from "@/commonComponents/navigationTab/NavigationTab";
import OffersCard from "@/commonComponents/offers/OffersCard";
import { MobileTabData, TAB_CONTENT } from "@/constants/tabData";
import useCheckDeviceView from "@/hooks/useCheckDeviceView";
import BookingList from "@/mobileResponsive/BookList";
import { CalendarOutlined } from "@ant-design/icons";
import React from "react";
const tabsList = [
  { label: "Flights", href: "/tabs/flights" },
  { label: "Haj&Umrah", href: "/tabs/haj&umrah" },
  { label: "Visas", href: "/tabs/visas" },
  { label: "Hotels", href: "/tabs/hotels" },
];
const fieldsData = [
  { placeholder: "Name", label: "Name", suffixIcon: "" },
  { placeholder: "Hotel Name", label: "Hotel Name", suffixIcon: "" },
  { placeholder: "Destination", label: "Destination", suffixIcon: "" },
  { placeholder: "Room Type", label: "Room Type", suffixIcon: "" },
  {
    placeholder: "Stay Duration",
    label: "Stay Duration",
    suffixIcon: <CalendarOutlined />,
  },
  {
    placeholder: "Numbers of Guests",
    label: "Numbers of Guests",
    suffixIcon: "",
  },
];

const page = () => {
  const { columns, data } = TAB_CONTENT["Hotels"];
  const isMobile = useCheckDeviceView();
  return (
    <>
      <Header />
      <div style={{ padding: "4rem 0" }}>
        <div style={isMobile ? { padding: "0rem" } : { padding: "0rem 8rem" }}>
          <NavigationTab tabsList={tabsList} />
          {isMobile ? (
            <BookingList bookings={MobileTabData} />
          ) : (
            <CustomTable columns={columns} data={data} />
          )}
        </div>

        {isMobile ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              width: "100vw",
            }}
          >
            <OffersCard />
            <DynamicInquiryForm
              heading={"New Visa Inquire"}
              fields={fieldsData}
            />
          </div>
        ) : (
          <div style={{ display: "flex", gap: "1rem", padding: "1rem 8rem" }}>
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
