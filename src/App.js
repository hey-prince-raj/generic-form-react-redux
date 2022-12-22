import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { SignUPIndex } from "./Component/SignUp/index";
import { SignUPForm } from "./Component/SignUp/SignUpForm";
import { Preview } from "./Component/SignUp/Preview";
import { Success } from "./Component/SignUp/Success";
import "./styles.css";
const App = () => {
  const authenticState = useSelector((state) => state.route);
  return (
    <Routes>
      <Route path="/" element={<SignUPIndex />} />
      <Route path="signup">
        <Route index element={<SignUPForm />} />
        <Route path="form" element={<SignUPForm />} />
        {authenticState.preview && <Route path="preview" element=<Preview /> />}
        {authenticState.success && <Route path="success" element=<Success /> />}
        <Route path="*" element={<Navigate to="/signup/form" />} />
      </Route>
    </Routes>
  );
};
export default App;
