import React from "react";
import FormErrors from "./form-errors.component";
import LabelComponent from "./label.component";

type Props = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (value: any) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  InputProps?: any;
  errors?: any;
  disabled?: boolean;
};

const InputField: React.FC<Props> = ({
  label,
  type,
  placeholder,
  onChange,
  startIcon,
  InputProps,
  errors,
  endIcon,
  name,
  className,
  value,
  disabled,
}) => {
  return (
    <div className={`flex w-full pb-1 ${className ? className : ""}`}>
      <div className="w-full ">
        {label ? <LabelComponent label={label} errors={errors} /> : null}
        <div className="flex">
          {startIcon ? startIcon : null}
          <input
            type={type}
            name={name}
            value={value}
            disabled={disabled}
            className={`w-full 
            ${startIcon ? " -ml-10  pl-10" : "pl-2"} 
            pr-3 py-1 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500 dark:text-black
            ${endIcon ? "-mr-10" : ""}
             ${errors ? "border-red-400" : ""}`}
            placeholder={placeholder}
            onChange={onChange}
            {...InputProps}
          />
          {endIcon ? endIcon : null}
        </div>
        <FormErrors label={label} errors={errors} />
      </div>
    </div>
  );
};

export default InputField;
