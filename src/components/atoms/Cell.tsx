export default function Cell({ children, colSpan, className }: { children: React.ReactNode, colSpan?: number, className?: string }) {
    return (
        <td colSpan={colSpan} className={`p-2 border + ${className || ""}`}>
            {children}
        </td>
    );
}