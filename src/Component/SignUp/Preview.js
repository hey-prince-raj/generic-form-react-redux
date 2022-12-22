import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRouteAuthValue } from "../../Redux-Toolkit/Slices/routeSlice";
export const Preview = () => {
  const formValue = useSelector((state) => state.form);
  let inputValues = {};
  Object.values(formValue).forEach((inp) => {
    inputValues = { ...inputValues, [inp.name]: inp.value };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkboxBool, setCheckboxBool] = useState(false);
  const {
    firstName,
    lastName,
    dob,
    organisation,
    textarea,
    email
  } = inputValues;
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckboxBool(true);
      return;
    }
    setCheckboxBool(false);
  };
  const SubmitHandler = () => {
    dispatch(setRouteAuthValue(["success", true]));
    navigate("/signup/success", {
      replace: "/"
    });
  };

  return (
    <>
      <div>firstName:{firstName}</div>
      {lastName && <div>lastName:{lastName}</div>}
      <div>DOB:{dob}</div>
      <div>Email:{email}</div>
      <div>
        Organisation:{organisation === "others" ? textarea : organisation}
      </div>
      <div className="form-input-wrapper">
        <input
          className="form-input checkbox"
          type="checkbox"
          id="form-tnc"
          data-form="form"
          name="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="form-tnc" className="form-label">
          I have verified the data
        </label>
      </div>

      {checkboxBool && <button onClick={SubmitHandler}>Submit</button>}
    </>
  );
};
