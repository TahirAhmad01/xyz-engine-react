import React from "react";

function StepInputTxt({ value, name, valName, onChange}) {
  

  return (
    <div className="pb-3">
      <label
        htmlFor="name"
        className="block pb-1 text-sm capitalize font-semibold text-gray-500"
      >
        {valName || "Name"}
      </label>
      <input
        type="text"
        className="w-full p-2 rounded-md border border-gray-300"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={valName}
        required
      />
    </div>
  );
}

export default StepInputTxt;
