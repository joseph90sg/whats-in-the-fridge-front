import FormRow from "../molecules/form/FormRow";

interface FormProps {
    formFields: {
        id: string;
        label: string;
        value: string;
        type?: string;
        isRequired?: boolean;
        minLength?: number;
        maxLength?: number;
    }[];
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({formFields, onInputChange}: FormProps) {
    return (
        <form>
            {formFields.map((field, index) => {
            return (
                <FormRow 
                key={index}
                id={field.id} 
                label={field.label}
                value={field.value}
                onChange={onInputChange} />
            )})}
        </form>
    )
}