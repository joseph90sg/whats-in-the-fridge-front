import { CheckboxInputProps } from "@/components/types/inputTypes";

export default function CheckboxField({ id, onChange, checked = false, isRequired = false }: CheckboxInputProps) {
    return (
        <input 
            id={id}
            type='checkbox'
            checked={checked}
            required={isRequired}
            onChange={() => onChange(!checked)}
        />
    );
}
