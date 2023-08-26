import React from "react";

function Navbar() {
  return (
    <div className="h-12 md:h-16 flex items-center justify-between px-5 md:px-32 py-3 md:py-7 bg-white shadow-sm ">
      <div className="text-2xl font-semibold font-mono">XYZ ENGINE</div>

      <button
        className="px-4 py-2 rounded-md hover:bg-gray-100"
        onClick={() => window.location.reload(true)}
      >
        Reset
      </button>
    </div>
  );
}

export default Navbar;
