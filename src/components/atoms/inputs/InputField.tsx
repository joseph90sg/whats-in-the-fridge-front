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