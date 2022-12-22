import {
  checkAtLeastLength,
  checkAtMaxLength,
  checkMinyear,
  checkMinMaxLength
} from "./FormUtils/FunctionUtils";
export const validateInputValue = (key, validator, inputVal) => {
  let errormsg = null;
  let validateResult = null;
  switch (key) {
    case "length":
      const { min, max, errorMessage } = validator;
      validateResult =
        min & max
          ? checkMinMaxLength(inputVal, min, max)
          : min
          ? checkAtLeastLength(inputVal, min)
          : max
          ? checkAtMaxLength(inputVal, max)
          : "";
      errormsg = !validateResult
        ? min && max
          ? errorMessage({ min, max })
          : min
          ? errorMessage({ min })
          : max
          ? errorMessage({ max })
          : ""
        : "";
      break;
    case "year":
      validateResult = checkMinyear(inputVal, validator.min);
      errormsg = !validateResult
        ? validator.errorMessage({ min: validator.min })
        : "";
      break;
    default:
      break;
  }
  return errormsg;
};
