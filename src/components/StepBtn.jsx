import React from "react";

function StepBtn({ name }) {
  return (
    <button className="py-3 px-9 rounded-md border" type="submit">
      {name}
    </button>
  );
}

export default StepBtn;
