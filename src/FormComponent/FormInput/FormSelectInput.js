import InputError from "../InputError";
const FormSelectInput = ({
  name,
  label,
  type,
  options,
  handleInputChange,
  value,
  error
}) => {
  return (
    <div className="form-input-wrapper">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-input"
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={handleInputChange}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      <InputError content={error} />
    </div>
  );
};
export default FormSelectInput;
