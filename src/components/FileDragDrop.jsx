import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileDragDrop({ setOutputVal, setFileUploaded }) {
  const [wrongFile, setWrongFile] = useState(false);
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      setFileUploaded(true);
      setFileName(acceptedFiles[0].name);

      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      const response = await fetch(fileUrl);
      const text = await response.text();
      const lines = text.split("\n");
      const data = lines.map((line) => line.split(","));

      setOutputVal(data);
      // console.log(lines);

      setWrongFile && setWrongFile(false);
    } else {
      setWrongFile(true);
      setFileName("")
    }
    // console.log(acceptedFiles);
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
  });

  return (
    <div className="mb-3">
      <div
        className="flex justify-center items-center w-full"
        {...getRootProps({ className: "dropzone" })}
        accept="text/csv"
      >
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col justify-center items-center w-full h-36 bg-gray-50 rounded-lg border-2 ${
            wrongFile ? "border-red-500 text-red-600" : "border-gray-300"
          } border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p
              className={`mb-2 text-sm ${
                wrongFile ? "text-red-500" : "text-gray-500"
              } dark:text-gray-400`}
            >
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className={`text-xs ${
                wrongFile ? "text-red-500" : "text-gray-500"
              } dark:text-gray-400`}>
              Select your CSV file
            </p>

            {wrongFile && (
              <p className="text-xs text-red-500 dark:text-red-400 font-semibold">
                Wrong file select
              </p>
            )}
          </div>
          <input {...getInputProps()} />
        </label>
      </div>

      {fileName && (
        <div className="font-semibold text-sm text-center">
          File Name: <span className="text-gray-500">{fileName}</span>
        </div>
      )}
    </div>
  );
}
