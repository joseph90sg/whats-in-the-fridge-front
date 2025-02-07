import HeadCell from "../atoms/HeadCell";

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