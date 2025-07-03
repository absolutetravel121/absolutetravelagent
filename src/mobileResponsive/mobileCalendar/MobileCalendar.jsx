/* eslint-disable no-unused-vars */
"use client"
import React, { useState } from "react";
import dayjs, { localeData, months } from "dayjs";
import leftmove from "../../assets/Icons/chevron-left.svg";
import chevrondown from "../../assets/icons/chevron-down.svg";
import chevronright from "../../assets/icons/chevron-right.svg";
import "dayjs/locale/zh-cn";
import moment from "moment";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Col, Modal, Row, Select, Typography, theme } from "antd";
// import { PrimaryButton } from "@/commonComponents/UiKit/Button/Button";
import ImageWrapper from "@/commonComponents/uikit/ImageWrapper";
import PrimaryButton from "@/commonComponents/uikit/PrimaryButton";
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
    onSelectDate(formattedDate);
  };

  const disabledDate = (current) => {
    return current && current < moment(disabledStartDate).startOf("day");
  };

  return (
    <div>
      <Modal
        open={visible}
        footer={null}
        onCancel={handleCloseCalendar}
        closeIcon={null}
        className="modal-container"
      >
        <Calendar
          // defaultValue={currentDate}
          // mode="month"
          className="calendar-container"
          fullscreen={false}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];
            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current = current.month(i);
              months.push(localeData.monthsShort(current));
            }

            for (let i = start; i < end; i++) {
              monthOptions.push(
                <Select.Option key={i} value={i} className="month-item">
                  {months[i]}
                </Select.Option>
              );
            }

            const year = value.year();
            const month = value.month();

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
                    src={chevrondown} className={'cursor-pointer'}
                    onClick={handleCloseCalendar}
                    alt="close"
                  />
                  <Typography.Title level={4}>{title}</Typography.Title>
                </div>

                <Row gutter={8}>
                  <Col className="monthyr_col">
                    <ImageWrapper
                      src={leftmove}
                      alt="arrow" className={'cursor-pointer'}
                      onClick={() => {
                        handleMonthMove("prev");
                        const now = value.clone().subtract(1, "month");
                        onChange(now);
                      }}
                    />
                    <div className="moontyr_title">
                      <Typography.Title level={4}>
                        {
                          value.localeData().months()[
                            currentMonth !== null ? currentMonth : month
                          ]
                        }
                      </Typography.Title>
                      <Typography.Title level={4}>
                        {currentYear !== null ? currentYear : year}
                      </Typography.Title>
                    </div>
                    <ImageWrapper
                      src={chevronright}
                      alt="arrow" className={'cursor-pointer'}
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
            onClick={handleCloseCalendar}
            label={"Done"}
          />
        </div>
      </Modal>
    </div>
  );
};

export default MobileCalender;