import InputField from "@/components/atoms/inputs/InputField";

interface InputRowProps {
    id: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    isRequired?: boolean;
    minLength?: number;
    maxLength?: number;
}

export default function FormRow({ id, label, value, onChange, type = "text", isRequired = false, minLength = 0, maxLength }: InputRowProps) {
    return (
        <>
            <label htmlFor={id}>{label} { isRequired && <span className="text-red-500">*</span> }</label>
            <InputField id={id} type={type} minLength={minLength} 
                maxLength={maxLength} isRequired={isRequired}
                value={value}
                onChange={onChange}/>
        </>
    )
}