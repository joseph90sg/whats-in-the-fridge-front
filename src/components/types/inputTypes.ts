export interface BaseInputProps {
  id: string;
  label: string;
  isRequired?: boolean;
}

export interface TextInputProps extends BaseInputProps {
    type: 'text' | 'password' | 'email';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxInputProps extends Omit<BaseInputProps, "label">  {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface SelectInputProps extends BaseInputProps {
    type: 'select';
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
}