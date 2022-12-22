import InputError from "../InputError";
const FormRadioInput = ({
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
      {options &&
        options.map((option) => (
          <div key={option.value}>
            <input
              id={option.name}
              name={name}
              type={type}
              value={option.value}
              checked={value === option.value}
              onChange={handleInputChange}
            />
            <label htmlFor={option.name} className="form-label">
              {option.name}
            </label>
          </div>
        ))}
      <InputError content={error} />
    </div>
  );
};
export default FormRadioInput;
