import React from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function ExportPage({ tasks }) {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'task_list.xlsx');
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
