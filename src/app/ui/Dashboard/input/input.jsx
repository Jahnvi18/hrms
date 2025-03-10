import React from "react";
import "@/app/globals.css";

function Input({
  type,
  placeholder,
  name,
  value = "",
  onchange,
  className,
  id,
  error,
  accept,
  ...props
}) {
  // console.log("className:", className);
  return (
    <>
      <div className="flex flex-col w-full">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          accept={accept}
          onChange={onchange}
          className={`p-3 ${className} ${
            error ? "border-red-500" : "border-gray-600"
          }`}
          id={id}
          {...props}
        />
        {error ? (
          <p className="text-sm text-red-500 visible">{error}</p>
        ) : (
          <p className="text-sm text-red-500 invisible">.</p>
        )}
      </div>
    </>
  );
}

export default Input;
