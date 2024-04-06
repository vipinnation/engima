import React from "react";

type Props = {
  errors: any;
  label: any;
};

const FormErrors: React.FC<Props> = ({ errors, label }) => {
  return (
    <>
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
    </>
  );
};

export default FormErrors;
