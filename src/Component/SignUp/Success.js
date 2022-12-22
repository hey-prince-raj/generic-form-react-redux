import { useSelector } from "react-redux";
export const Success = () => {
  const formValue = useSelector((state) => state.form);
  let inputValues = {};
  Object.values(formValue).forEach((inp) => {
    inputValues = { ...inputValues, [inp.name]: inp.value };
  });
  const { firstName, lastName } = inputValues;
  return (
    <>
      <div>
        {firstName} {lastName} - Your profile has been registered successfully!"
      </div>
    </>
  );
};
