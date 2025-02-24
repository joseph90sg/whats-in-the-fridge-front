import { FormRowProps } from "@/components/types/formRowTypes";

export default function FormRow({ id, label, isRequired = false, children }: FormRowProps) {
    return (
        <>
            <label htmlFor={id}>{label} { isRequired && <span className="text-red-500">*</span> }</label>
            {children}
        </>
    )
}
