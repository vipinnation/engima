import React from "react";
import LabelComponent from "./label.component";

type Props = {
  label: string;
  type?: string;
  className?: string;
  name: string;
  rows?: number;
  placeholder?: string;
  onChange?: any;
  startIcon?: React.ReactNode;
  InputProps?: any;
  errors?: any;
};

const TextAreaField: React.FC<Props> = ({
  label,
  placeholder,
  onChange,
  InputProps,
  errors,
  rows,
  name,
  className,
}) => {
  return (
    <div className={`flex w-full pb-1 ${className}`}>
      <div className="w-full ">
        {label ? <LabelComponent label={label} errors={errors} /> : null}
        <div className="flex">
          <textarea
            rows={rows || 3}
            name={name}
            className={`w-full pl-2 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500 text-black ${
              errors ? "border-red-400" : ""
            }`}
            onChange={onChange}
            placeholder={placeholder}
            {...InputProps}
          />
        </div>
        {errors && errors.type == "required" ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{label as any}</span> is required
          </p>
        ) : null}

        {errors && errors.type == "pattern" ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{errors.message}</span>
          </p>
        ) : null}
        {errors && errors.type == "validate" ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{errors.message}</span>
          </p>
        ) : null}
        {errors && errors.type == "minLength" ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{errors.message}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default TextAreaField;
