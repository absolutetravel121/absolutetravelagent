"use client";
import React, { useState } from "react";
import { Pagination } from "antd";
import styles from "./CustomTable.module.scss";
import CustomModal from "../customModal/CustomModal";
import handshake from "../../assets/icons/thankyou-icon.svg";
const CustomTable = ({ columns = [], data = [], rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [actionModalType, setActionModalType] = useState(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleActionModalOpen = (type) => {
    setActionModalType(type);
  };

  const handleActionModalClose = () => {
    setActionModalType(null);
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
                <button className={styles.acceptBtn} onClick={()=>handleActionModalOpen("accept")}>
                  Accept
                </button>
                <button className={styles.denyBtn} onClick={()=>handleActionModalOpen("deny")}>
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {actionModalType && (
        <CustomModal
          open={() => handleActionModalOpen(actionModalType)}
          onCancel={handleActionModalClose}
          title={
            actionModalType === "accept" ? "Thank You!" : "Sorry to hear that"
          }
          desc={
            actionModalType === "accept"
              ? "Our team will contact you within 4 to 9 hrs with the payment links."
              : "We hope you will find future deals enticing."
          }
          image={handshake}

        />
      )}

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
