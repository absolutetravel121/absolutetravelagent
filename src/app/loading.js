import SpinLoader from "@/commonComponents/uikit/SpinnerLoader";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="spin-container">
        <SpinLoader />
      </div>
    </div>
  );
};

export default Loading;
