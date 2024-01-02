import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  color: "var(--color-2)",
  padding: "0.2rem .90rem",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  borderWidth: "1px",
  borderColor: "var(--color-1)",
  borderStyle:"solid",
  fontFamily: "monospace",
  backgroundColor: "var(--color-3)",
  color: "var(--color-2)",
  borderRadius: "var(--gap)",
  padding: "var(--gap-s) .90rem",
  ...generalStyle,
};

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DateInput;
