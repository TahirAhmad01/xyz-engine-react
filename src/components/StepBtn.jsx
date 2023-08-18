import React from "react";

function StepBtn({ name, onClick }) {
  return (
    <button
      type="submit"
      className={`text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 btn-sm `}
      onClick={onClick || ""}
    >
      {name}
    </button>
  );
}

export default StepBtn;
