"use client";
import React, { useState } from "react";
import { Pagination } from "antd";
import styles from "./BookList.module.scss";
import BookingCard from "./BookingCard";

const BookingList = ({ bookings, style }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate current page data
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = bookings.slice(startIndex, startIndex + pageSize);

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {currentData.map((item, index) => (
          <BookingCard key={index} data={item} />
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={bookings.length}
        onChange={handlePageChange}
        size="small"
        className={styles.pagination}
      />
    </div>
  );
};

export default BookingList;
