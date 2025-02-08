import TableFooter from "../atoms/TableFooter";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
    columns: string[];
    values: { [key: string]: string}[]
};

const Table: React.FC<TableProps> = ({ columns, values }) => {
    return (
        <table className="w-full border-collapse border">
            <TableHeader columns={columns}></TableHeader>
            <TableBody data={values}></TableBody>
            <TableFooter>
                <tr>
                    <td colSpan={columns.length} className="text-center">
                        Total Items: {values.length}
                    </td>
                </tr>
            </TableFooter>
        </table>
    );
};

export default Table;
