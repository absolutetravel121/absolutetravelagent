"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import moment from "moment";
import dayLocaleData from "dayjs/plugin/localeData";
import {
  Calendar,
  Col,
  Modal,
  Row,
  Select,
  Typography,
} from "antd";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
import PrimaryButton from "@/commonComponents/uikit/PrimaryButton";
import leftmove from "../../assets/Icons/chevron-left.svg";
import chevrondown from "../../assets/icons/chevron-down.svg";
import chevronright from "../../assets/icons/chevron-right.svg";
import "./MobileCalendar.scss";

dayjs.extend(dayLocaleData);

const MobileCalender = ({
  visible,
  handleCloseCalendar,
  title,
  onSelectDate,
  disabledStartDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [tempDate, setTempDate] = useState(null); // <-- temp store selected date

  const onPanelChange = (value) => {
    setCurrentMonth(value.month());
    setCurrentYear(value.year());
  };

  const handleMonthMove = (direction) => {
    const newMonth = direction === "prev" ? currentMonth - 1 : currentMonth + 1;
    setCurrentMonth(newMonth);
    if (newMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (newMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  };

  const onSelectChange = (value) => {
    const formattedDate = value.format("YYYY-MM-DD");
    setCurrentMonth(value.month());
    setCurrentYear(value.year());
    setTempDate(formattedDate); // ✅ only store it
  };

  const disabledDate = (current) => {
    return current && current < moment(disabledStartDate).startOf("day");
  };

  const handleDone = () => {
    if (tempDate) {
      onSelectDate(tempDate); // ✅ only now call it
    }
    handleCloseCalendar();
  };

  return (
    <Modal
      open={visible}
      footer={null}
      onCancel={handleCloseCalendar}
      closeIcon={null}
      className="modal-container"
    >
      <Calendar
        className="calendar-container"
        fullscreen={false}
        headerRender={({ value, onChange }) => {
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            months.push(localeData.monthsShort(value.month(i)));
          }

          return (
            <div
              style={{
                paddingBottom: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="calendar_title">
                <ImageWrapper
                  src={chevrondown}
                  className={"cursor-pointer"}
                  onClick={handleCloseCalendar}
                  alt="close"
                />
                <Typography.Title level={4}>{title}</Typography.Title>
              </div>

              <Row gutter={8}>
                <Col className="monthyr_col">
                  <ImageWrapper
                    src={leftmove}
                    alt="arrow"
                    className={"cursor-pointer"}
                    onClick={() => {
                      handleMonthMove("prev");
                      const now = value.clone().subtract(1, "month");
                      onChange(now);
                    }}
                  />
                  <div className="moontyr_title">
                    <Typography.Title level={4}>
                      {months[currentMonth]}
                    </Typography.Title>
                    <Typography.Title level={4}>
                      {currentYear}
                    </Typography.Title>
                  </div>
                  <ImageWrapper
                    src={chevronright}
                    alt="arrow"
                    className={"cursor-pointer"}
                    onClick={() => {
                      handleMonthMove("next");
                      const now = value.clone().add(1, "month");
                      onChange(now);
                    }}
                  />
                </Col>
              </Row>
            </div>
          );
        }}
        onSelect={onSelectChange}
        onPanelChange={onPanelChange}
        disabledDate={disabledDate}
      />

      <div className="footer-container">
        <PrimaryButton
          className="Donebutton"
          onClick={handleDone} // ✅ done = final apply
          label={"Done"}
        />
      </div>
    </Modal>
  );
};

export default MobileCalender;
