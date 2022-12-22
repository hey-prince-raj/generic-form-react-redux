export const checkAtLeastLength = (expression, length) => {
  if (expression) {
    return expression.trim().length >= length;
  }
  return true;
};
export const checkAtMaxLength = (expression, length) => {
  if (expression) {
    return expression.trim().length <= length;
  }
  return true;
};

export const checkIsfilled = (expression) =>
  expression && expression.length > 0;

export const checkMinyear = (expression, year) => {
  if (expression) {
    let newdate = new Date(expression);
    let nyear = newdate.getFullYear();
    return nyear > year;
  }
  return true;
};
export const checkMinMaxLength = (expression, l1, l2) => {
  if (expression) {
    return expression.trim().length >= l1 && expression.trim().length <= l2;
  }
  return true;
};

/*
export const checkIsTrue = (expression) => expression;

export const checkEmailPattern = (mail) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(mail);
};*/
