"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useActiveTab = (tabs, defaultIndex = 0) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const matchedTab = tabs.find((tab) => tab.href === pathname);
    setActiveTab(matchedTab ? matchedTab.label : tabs[defaultIndex]?.label);
  }, [pathname, tabs, defaultIndex]);

  return activeTab;
};

export default useActiveTab;
