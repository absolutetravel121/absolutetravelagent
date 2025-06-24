"use client"
import React from "react";
import { Button, Table, Space } from "antd";
import styles from "./DynamicAgent.module.scss";

const data = [
  {
    key: "1",
    clientName: "Karan Joshi",
    from: "India",
    destination: "Canada",
    departureDate: "30 June 2025",
    cost: "17,000 INR",
  },
  {
    key: "2",
    clientName: "Rahul Sharma",
    from: "India",
    destination: "Singapore",
    departureDate: "1 July 2025",
    cost: "22,000 INR",
  },
  {
    key: "3",
    clientName: "Priya Singh",
    from: "India",
    destination: "Japan",
    departureDate: "25 Sept 2025",
    cost: "13,000 INR",
  },
  {
    key: "4",
    clientName: "Amit Verma",
    from: "India",
    destination: "Hong Kong",
    departureDate: "20 July 2025",
    cost: "9,000 INR",
  },
  {
    key: "5",
    clientName: "Vikram Rao",
    from: "India",
    destination: "Indonesia",
    departureDate: "25 July 2025",
    cost: "7,000 INR",
  },
  {
    key: "6",
    clientName: "Sneha Iyer",
    from: "India",
    destination: "America",
    departureDate: "26 July 2025",
    cost: "24,000 INR",
  },
];

const columns = [
  {
    title: "Client Name",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "Destination",
    dataIndex: "destination",
    key: "destination",
  },
  {
    title: "Departure Date",
    dataIndex: "departureDate",
    key: "departureDate",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space>
        <Button className={styles.acceptBtn}>Accept</Button>
        <Button className={styles.denyBtn}>Deny</Button>
      </Space>
    ),
  },
];

const DynamicAgent = () => {
  return (
    <div className={styles.agentTableWrapper}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        className={styles.agentTable}
      />
    </div>
  );
};

export default DynamicAgent;













