import HeadCell from "../../atoms/table/HeadCell";

export default function TableHeader({ columns }: { columns: string[] }) {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <HeadCell key={column}>{column}</HeadCell>
                ))}
            </tr>
        </thead>
    );
}