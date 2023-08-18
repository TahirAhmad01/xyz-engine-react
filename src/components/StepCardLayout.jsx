import React from "react";

function StepCardLayout({ children, title }) {
  return (
    <div className="w-full md:w-[600px] bg-red-200 rounded-lg overflow-hidden shadow-md">
      <div className="px-5 py-4 w-full bg-green-500 text-white font-semibold text-md capitalize">{title}</div>
      <div className="bg-white p-3 ">{children}</div>
    </div>
  );
}

export default StepCardLayout;
