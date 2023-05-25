import React from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';


function ExportPage({ tasks }) {
  const exportToExcel = () => {
    // Create a new Excel workbook
    const workbook = XLSX.utils.book_new();

    // Create a new worksheet
    const worksheet = XLSX.utils.json_to_sheet(tasks);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');

    // Generate an XLSX file
    XLSX.writeFile(workbook, 'task_list.xlsx');
  };

  return (
    <div>
      <h2>Export Page</h2>
      <button onClick={exportToExcel}>Export to Excel</button>
      <br />
      <Link to="/">Go back to Task List</Link>
    </div>
  );
}

export default ExportPage;
