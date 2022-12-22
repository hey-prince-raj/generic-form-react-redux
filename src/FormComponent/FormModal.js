export const formValuesSchema = {
  firstName: {
    id: "firstName",
    name: "firstName",
    type: "text",
    label: "First Name",
    value: "",
    presence: true,
    validations: {
      length: {
        min: 5,
        errorMessage: ({ min }) => `Min ${min} character required`
      }
    }
  },
  lastName: {
    id: "lastName",
    name: "lastName",
    type: "text",
    label: "Last Name",
    value: "",
    presence: false,
    validations: {
      length: {
        min: 5,
        errorMessage: ({ min }) => `Min ${min} character required`
      }
    }
  },
  dob: {
    id: "dob",
    name: "dob",
    label: "DOB",
    type: "date",
    value: "",
    presence: true,
    validations: {
      year: {
        min: 1988,
        errorMessage: ({ min }) => `year must be greater than ${min}`
      }
    }
  },
  password: {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    value: "",
    presence: false,
    validations: {
      length: {
        min: 10,
        errorMessage: ({ min }) => `Min ${min} character required`
      }
    }
  },
  organisation: {
    id: "organisation",
    name: "organisation",
    label: "Organisation",
    type: "select",
    value: "Vinsol",
    presence: false,
    options: [
      { value: "Vinsol", name: "vinsol" },
      { value: "others", name: "other" }
    ]
  },
  textarea: {
    dependsOn: (organisation) => organisation === "others",
    id: "textarea",
    name: "textarea",
    label: "Organisation Name",
    type: "textarea",
    value: "",
    presence: (organisation) => organisation === "others",
    validations: {
      length: {
        min: 5,
        max: 30,
        errorMessage: ({ min, max }) =>
          `Min ${min} and max ${max} character required`
      }
    }
  },

  email: {
    id: "email",
    name: "email",
    label: "Email",
    type: "text",
    value: "",
    presence: true

    /*
    validations: {
      pattern: {
        test: /abc/i,
        errorMessage: (match) => (match ? "" : "")
      }
      
    }
    */
  }
  /*
  confirmPassword: {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    value: "",
    presence: true,
    validations: {
      dependsOn: ["password", "firstName"],
      validate: ({ password, confirmPassword}) =>
        password.value === confirmPassword.value,
        errorMessage: (match) =>match?'':'' ,
    }
  },
  sex:{
    id:'sex'
    name: 'sex',
    label: 'Sex',
    type: 'radio',
    presence:false
    options: [
        { value: 'male', name: 'Male' },
        { value: 'female', name: 'Female' }
    ],
}
tnc:{
    id:"terms"
    name: 'terms',
    label: 'Agree to terms and conditions',
    type: 'checkbox',
    presence:true
}
  */
};
