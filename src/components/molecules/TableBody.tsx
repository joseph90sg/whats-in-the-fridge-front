import Cell from "../atoms/Cell";

export default function TableBody({ data }: { data: { [key: string]: string }[] }) {
    return (
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.values(row).map((value, valueIndex) => (
                        <Cell key={valueIndex}>{value}</Cell>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}