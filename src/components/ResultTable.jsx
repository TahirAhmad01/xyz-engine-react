import React from "react";
import TableTr from "./TableTr";

function ResultTable({ stepData }) {
  const {
    projectName,
    projectDes,
    client,
    contractor,
    max_x,
    min_x,
    max_y,
    min_y,
    max_z,
    min_z,
  } = stepData || {};
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Field
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <TableTr name="Project Name" value={projectName} />
          <TableTr name="Project Description" value={projectDes} />
          <TableTr name="Client" value={client} />
          <TableTr name="Contractor" value={contractor} />
          <TableTr name="Max X" value={max_x} />
          <TableTr name="Min X" value={min_x} />
          <TableTr name="Max Y" value={max_y} />
          <TableTr name="Min Y" value={min_y} />
          <TableTr name="Max Z" value={max_z} />
          <TableTr name="Min Z" value={min_z} />
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
