import CheckboxField from "@/components/atoms/inputs/CheckboxField";
import { FormRowProps } from "@/components/types/formRowTypes";

interface ChecklistItemProps extends Omit<FormRowProps, "type" | "value" | "onChange"> {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function ChecklistItem({ id, label, checked, isRequired = false, children, onChange }: ChecklistItemProps) {
    return (
        <div className="flex items-center gap-2">
            <CheckboxField 
                id={id}
                checked={checked}
                isRequired={isRequired}
                onChange={() => onChange(!checked)}
            />
            <label htmlFor={id} className="cursor-pointer">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            {children && <div className="ml-auto">{children}</div>}
        </div>
    );
}
