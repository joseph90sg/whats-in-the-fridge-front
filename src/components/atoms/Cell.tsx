export default function Cell({children}: { children: React.ReactNode }) {
    return <td className="p-2 border">{children}</td>;
}