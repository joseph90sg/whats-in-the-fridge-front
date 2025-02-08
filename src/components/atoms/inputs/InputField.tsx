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