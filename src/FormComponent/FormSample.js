import { useSelector } from "react-redux";
import useForm from "../CustomHook/FormValidator";
import FormTextInput from "./FormInput/FormTextInput";
import FormTextareaInput from "./FormInput/FormTextareaInput";
import FormSelectInput from "./FormInput/FormSelectInput";
import FormPasswordInput from "./FormInput/FormPasswordInput";
import FormDateInput from "./FormInput/FormDateInput";

const FormSample = ({ title, btnName, submitCallback }) => {
  const formValue = useSelector((state) => state.form);
  const { formError, handleInputChange, handleSubmit } = useForm(
    submitCallback
  );
  const Components = {
    FormTextInput,
    FormSelectInput,
    FormTextareaInput,
    FormPasswordInput,
    FormDateInput
  };
  const capitalize = (expression) =>
    expression.charAt(0).toUpperCase() + expression.slice(1);
  const renderInput = (input) => {
    const Component = Components["Form" + capitalize(input.type) + "Input"];
    return input.type === "textarea" ? (
      input.dependsOn(formValue.organisation.value) && (
        <Component
          key={input.name}
          error={formError[input.name]}
          handleInputChange={handleInputChange}
          {...input}
        />
      )
    ) : (
      <Component
        key={input.name}
        error={formError[input.name]}
        handleInputChange={handleInputChange}
        {...input}
      />
    );
  };
  const disableVal = () => {
    return Object.values(formValue).some(({ type, presence, value }) =>
      type === "textarea"
        ? presence(formValue.organisation.value) && !value
        : presence && !value
    );
  };
  return (
    <section>
      <h1 className="title">{title}</h1>
      <form>
        {Object.values(formValue)?.map((input) => renderInput(input))}
        <div className="submit-wrapper">
          <div className="form-input-wrapper submit">
            <input
              type="submit"
              onClick={handleSubmit}
              value={btnName}
              disabled={disableVal()}
              className="submt-bitton"
            />
          </div>
        </div>
      </form>
    </section>
  );
};
export default FormSample;
