import TableRow from "../atoms/TableRow";

export default function TableBody({ data }: { data: { [key: string]: string }[] }) {
    return (
        <tbody>
            {data.map((row, index) => {
                const rowData = Object.values(row).slice(0, -1);
                const details = row.details;

                return (
                    <TableRow key={index} rowData={rowData} details={details}></TableRow>
                )
            })}
        </tbody>
    );
}