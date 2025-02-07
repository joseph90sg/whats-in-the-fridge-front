import TableFooter from "../atoms/TableFooter";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table({ data }: { data: { [key: string]: string }[] }) {
    const columns = Object.keys(data[0]);
    return (
        <table className="w-full border-collapse border">
            <TableHeader columns={columns}></TableHeader>
            <TableBody data={data}></TableBody>
            <TableFooter>
                <tr>
                    <td colSpan={columns.length} className="text-center">
                        Total Items: {data.length}
                    </td>
                </tr>
            </TableFooter>
        </table>
    );
}