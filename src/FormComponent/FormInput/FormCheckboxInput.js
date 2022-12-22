import InputError from "../InputError";
const FormCheckboxInput = ({
  name,
  label,
  type,
  handleInputChange,
  value,
  error
}) => {
  return (
    <div className="form-input-wrapper">
      <input
        id={name}
        name={name}
        checked={value || false}
        type={type}
        onChange={handleInputChange}
        className="form-input text-area"
      />
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <InputError content={error} />
    </div>
  );
};
export default FormCheckboxInput;
