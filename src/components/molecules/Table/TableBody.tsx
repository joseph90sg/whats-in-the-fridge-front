import TableRow from "../../atoms/TableRow";

interface TableBodyProps {
    columns: string[];
    values: { [key: string]: string }[];
}


export default function TableBody({ columns, values }: TableBodyProps) {
    return (
        <tbody>
            {values.map((row, index) => {
                return (
                    <TableRow
                        key={index}
                        rowData={columns.map(column => row[column])}
                        expandable={!!row.details}
                    >
                        {row.details && <p>{row.details}</p>}
                    </TableRow>
                )
            })}
        </tbody>
    );
}