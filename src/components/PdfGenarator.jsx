import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PdfGenerator = ({ stepData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("XYZ Engine Result", 10, 10);

    doc.autoTable({
      startY: 20,
      head: [["Field", "Value"]],
      body: [
        ["Project Name", stepData.projectName],
        ["Project Description", stepData.projectDes],
        ["Client", stepData.client],
        ["Contractor", stepData.contractor],
        ["Max X", stepData.max_x],
        ["Min X", stepData.min_x],
        ["Max Y", stepData.max_y],
        ["Min Y", stepData.min_y],
        ["Max Z", stepData.max_z],
        ["Min Z", stepData.min_z],
      ],
    });

    doc.save("xyz_engine_result.pdf");
  };

  return (
    <div className="text-end my-3">
      <button
        type="button"
        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={generatePDF}
      >
        Download Pdf
      </button>
    </div>
  );
};

export default PdfGenerator;
