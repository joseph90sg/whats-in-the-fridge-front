"use client";

import { useState } from "react";
import Cell from "./Cell";

export default function TableRow({ rowData, children, expandable = false }: { rowData: string[], children?: React.ReactNode, expandable?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr className="cursor-pointer hover:bg-gray-100" onClick={() => setIsExpanded(!isExpanded)}>
        {rowData.map((value, index) => (
          <Cell key={index}>{value}</Cell>
        ))}
      </tr>

      {expandable && isExpanded && children && (
        <tr>
          <Cell colSpan={rowData.length} className="p-4 border-t">
            {children}
          </Cell>
        </tr>
      )}
    </>
  );
}