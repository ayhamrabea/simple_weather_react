import type { FC, ReactNode } from "react";



interface IFormFieldProps {
    children: ReactNode;
    errorMessage?: string | null;
}

export const FormField: FC<IFormFieldProps> = ({
    
    children,
    errorMessage,
}) => {
    return (
        <div className={`form-field ${errorMessage ? "form-field--error" : ""}`}>
            <div className="form-field__input-wrapper">
                {children}
            </div>
            {errorMessage && (
                <span className="form-field__error-text">{errorMessage}</span>
            )}
        </div>
    );
};