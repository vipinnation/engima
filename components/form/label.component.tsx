import React from "react";

type Props = { label?: string; errors?: any };

const LabelComponent: React.FC<Props> = ({ label, errors }) => {
  return (
    <label
      htmlFor={label}
      className={`text-sm font-normal px-1 ${errors ? "text-red-600" : ""}`}
    >
      {label}
    </label>
  );
};

export default LabelComponent;
