import InputError from "../InputError";
const FormDateInput = ({
  name,
  label,
  type,
  error,
  handleInputChange,
  value
}) => {
  return (
    <div className="form-input-wrapper">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-input"
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={handleInputChange}
      />
      <InputError content={error} />
    </div>
  );
};
export default FormDateInput;
