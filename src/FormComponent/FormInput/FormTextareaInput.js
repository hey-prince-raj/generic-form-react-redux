import InputError from "../InputError";
const FormTextareaInput = ({
  name,
  label,
  type,
  handleInputChange,
  value,
  error
}) => {
  return (
    <div className="form-input-wrapper">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value || ""}
        type={type}
        onChange={handleInputChange}
        className="form-input text-area"
      ></textarea>
      <InputError content={error} />
    </div>
  );
};
export default FormTextareaInput;
