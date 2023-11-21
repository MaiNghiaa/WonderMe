// import React from "react";
// import * as XLSX from "xlsx";

// const Read = () => {
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];

//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const data = new Uint8Array(event.target.result);
//       const workbook = XLSX.read(data, { type: "array" });

//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];

//       const excelData = XLSX.utils.sheet_to_json(sheet);
//       console.log(excelData); // In dữ liệu từ file Excel ra console
//       // Xử lý dữ liệu ở đây hoặc truyền dữ liệu ra ngoài component
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />
//     </div>
//   );
// };

// export default Read;
