import React from "react";

function StepInputTxt({
  value,
  name,
  type,
  inpName,
  onChange,
  className,
  ...rest
}) {
  return (
    <div className="pb-3">
      <label
        htmlFor="name"
        className="block pb-1 text-sm capitalize font-semibold text-gray-500"
      >
        {inpName || "Name"}
      </label>
      <input
        type={type || "text"}
        className={`w-full p-2 rounded-md border border-gray-300 focus:border-green-300 ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={inpName}
        required
        {...rest}
      />
    </div>
  );
}

export default StepInputTxt;
