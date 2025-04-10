export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginProps {
    GoBack: () => void;
    onLoginSuccess: () => void;
}
