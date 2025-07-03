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
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import React, { Suspense } from "react";
import "../../assets/styles/styles.scss";
import PrimaryInput from "@/commonComponents/uikit/PrimaryInput";
import Loading from "../loading";
const tabsList = [
  { label: "Flights", href: "/flights" },
  { label: "Haj&Umrah", href: "/haj&umrah" },
  { label: "Visas", href: "/visas" },
  { label: "Hotels", href: "/hotels" },
];
const fieldsData = [
  { label: "Name", placeholder: "Name"},
  {
    label: "Date of Birth",
    placeholder: "Date of Birth",
    suffixIcon: <CalendarOutlined />,
  },
  { label: "From", placeholder: "From"},
  { label: "Class", placeholder: "Class", },
  { label: "Destination", placeholder: "Destination", },
  {
    label: "Purpose of visit",
    placeholder: "Purpose of visit",
  },
  {
    label: "Departure Date",
    placeholder: "Departure Date",
    suffixIcon: <CalendarOutlined />,
  },
];

const Flights = () => {
  const { columns, data } = TAB_CONTENT["Flights"];
  const isMobile = useCheckDeviceView();
  return (
    <Suspense fallback={<Loading/>}>
      <Header />
      <div className={`${isMobile ? "mobile-container" : "container"}`}>
        <div className={`${isMobile ? "center-y":"space-between" }`}>
          <NavigationTab tabsList={tabsList} />
          <PrimaryInput placeholder={"Search"} suffix={<SearchOutlined className="icon"/>} className={"search-input"}/>
        </div>
        <div>
          {isMobile? (
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
    </Suspense>
  );
};

export default Flights;
