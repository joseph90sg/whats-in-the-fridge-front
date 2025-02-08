"use client";

import { useState } from "react";
import Cell from "./Cell";

export default function TableRow({ rowData, details }: { rowData: string[], details: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr className="cursor-pointer hover:bg-gray-100" onClick={() => setIsExpanded(!isExpanded)}>
        {rowData.map((value, index) => (
          <Cell key={index}>{value}</Cell>
        ))}
      </tr>

      {isExpanded && (
        <tr>
          <Cell colSpan={rowData.length} className="p-4 border-t">{details}</Cell>
        </tr>
      )}
    </>
  );
}