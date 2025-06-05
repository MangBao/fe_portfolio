import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="form-line relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input w-full p-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:border-primary-02"
        placeholder=" "
      />
      <label
        className={`absolute left-3 transition-all duration-300 text-gray-400 ${
          value ? "top-[-1.25rem] text-sm text-primary_02" : "top-3"
        }`}
      >
        {label}
      </label>
      <div className="check-label hidden"></div>
    </div>
  );
};

export default InputField;
