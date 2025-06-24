"use client";
import React, { useState } from "react";
import { Pagination } from "antd";
import styles from "./CustomTable.module.scss";

const CustomTable = ({
  columns = [],
  data = [],
  rowsPerPage = 5,
  onAccept = () => {},
  onDeny = () => {},
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className={styles.agentTableWrapper}>
      <table className={styles.customTable}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>
                {col
                  .split(/(?=[A-Z])|[_\s]/)
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map((col, i) => (
                <td key={i}>{row[col]}</td>
              ))}
              <td>
                <button
                  className={styles.acceptBtn}
                  onClick={() => onAccept(row)}
                >
                  Accept
                </button>
                <button className={styles.denyBtn} onClick={() => onDeny(row)}>
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.paginationWrapper}>
        <Pagination
          current={currentPage}
          pageSize={rowsPerPage}
          total={data.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default CustomTable;
