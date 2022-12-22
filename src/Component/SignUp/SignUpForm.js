import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRouteAuthValue } from "../../Redux-Toolkit/Slices/routeSlice";
import FormSample from "../../FormComponent/FormSample";
export const SignUPForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitCallback = () => {
    dispatch(setRouteAuthValue(["preview", true]));
    navigate("/signup/preview");
  };
  return (
    <>
      <div className="form-Element">
        <FormSample
          title="SignUp Form"
          btnName="Preview"
          submitCallback={submitCallback}
        />
      </div>
    </>
  );
};
