"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./NavigationTab.module.scss";
import useActiveTab from "@/hooks/useActiveTab";
import PrimaryButton from "../uikit/PrimaryButton";

const NavigationTab = ({
  tabsList = [],
  className = "",
  usePath = true,
  defaultTabIndex = 0,
}) => {
  const router = useRouter();
  const currentTab = useActiveTab(tabsList, defaultTabIndex);

  const handleTabClick = (href) => {
    router.push(href);
  };

  return (
    <div className={`${styles.navigationTab_container} ${className}`}>
      <div className={styles.navigationTab}>
        {tabsList.map((tab, index) => (
          <PrimaryButton
            key={index}
            onClick={() => handleTabClick(tab.href)}
            label={tab.label}
            className={
              currentTab === tab.label
                ? styles.selectedTab
                : styles.nonSelectedTab
            }
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationTab;
