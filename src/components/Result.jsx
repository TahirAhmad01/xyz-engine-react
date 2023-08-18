import React from "react";
import StepCardLayout from "./StepCardLayout";
import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
import PdfGenerator from "./PdfGenarator";
import ResultTable from "./ResultTable";

function Result({ stepData }) {
  return (
    <StepCardLayout title="result">
      <PdfGenerator stepData={stepData} />
      <ResultTable stepData={stepData} />
    </StepCardLayout>
  );
}

export default Result;
