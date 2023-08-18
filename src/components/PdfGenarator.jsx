import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import StepBtn from "./StepBtn";

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
      <StepBtn name="Download Pdf" onClick={generatePDF} />
    </div>
  );
};

export default PdfGenerator;
