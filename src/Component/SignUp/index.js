import { useNavigate } from "react-router-dom";
export const SignUPIndex = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/signup/form")}>SignUp</button>
    </>
  );
};
