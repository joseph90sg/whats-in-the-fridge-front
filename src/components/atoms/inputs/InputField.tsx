<<<<<<< HEAD
import { TextInputProps } from "@/components/types/inputTypes";

interface InputFieldProps extends TextInputProps {
  minLength?: number;
  maxLength?: number;
}


export default function InputField({ id, value, onChange, type = "text", isRequired = false, minLength = 0, maxLength }: InputFieldProps) {
  return (
      <input id={id} type={type} minLength={minLength} 
            maxLength={maxLength} required={isRequired}
            value={value}
            onChange={onChange} />
  );
}
||||||| parent of 7401202 (feat(inputs): add inputField component)
=======
interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
}

export default function InputField({ id, label, type = "text", isRequired = false, minLength = 0, maxLength }: InputFieldProps) {
  return (
    <>
      <label htmlFor={id}>{label} { isRequired && <span className="text-red-500">*</span> }</label>
      <input id={id} type={type} minLength={minLength} maxLength={maxLength} required={isRequired}></input>
    </>
  );
}
>>>>>>> 7401202 (feat(inputs): add inputField component)
