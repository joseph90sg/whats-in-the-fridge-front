import TableFooter from "../../atoms/TableFooter";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
    columns: string[];
    values: { [key: string]: string}[]
};

export default function Table({ columns, values }: TableProps) {
    return (
        <table className="w-full border-collapse border">
            <TableHeader columns={columns}></TableHeader>
            <TableBody columns={columns} values={values}></TableBody>
            <TableFooter>
                <tr>
                    <td colSpan={columns.length} className="text-center">
                        Total Items: {values.length}
                    </td>
                </tr>
            </TableFooter>
        </table>
    );
}
