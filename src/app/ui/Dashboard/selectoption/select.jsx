const SelectBox = ({
  defaultValue,
  onChange,
  options,
  className,
  error,
  ...props
}) => {
  console.log("error:", error);
  return (
    <div className="flex flex-col w-full">
      <select
        value={defaultValue}
        onChange={onChange}
        error={error}
        //   style={{ padding: "8px", width: "100%" }}
        className={`px-3 text-gray-400 ${className} ${
          error ? "border-red-500" : "border-gray-600"
        }`}
        {...props}
      >
        {/* <option value="" className="text-gray" disabled>
          Select an option
        </option> */}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-500"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p className="text-sm text-red-500 visible">{error}</p>
      ) : (
        <p className="text-sm text-red-500 invisible">.</p>
      )}
    </div>
  );
};

export default SelectBox;
