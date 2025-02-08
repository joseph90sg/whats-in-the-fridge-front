export default function HeadCell({children}: { children: React.ReactNode }) {
    return <th className="p-2 border bg-gray-200">{children}</th>;
}