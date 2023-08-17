import React, { Children } from "react";

function StepCardLayout({ children, title }) {
  return (
    <div className="w-[600px] bg-red-200 rounded-lg overflow-hidden shadow-md">
      <div className="p-3 w-full bg-blue-600 text-white">{title}</div>
      <div className="bg-white p-3 ">{children}</div>
    </div>
  );
}

export default StepCardLayout;
