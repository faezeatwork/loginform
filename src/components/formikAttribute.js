import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phone: "",
  confirmPassword: "",
  auth_mode: "phone",
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("You must fill this field")
    .matches(/^[a-z ,.'-]+$/i, "Use only letters"),
  lastName: Yup.string()
    .required("You must fill this field")
    .matches(/^[a-z ,.'-]+$/i, "Use only letters"),
  username: Yup.string()
    .required("You must fill this field")
    .matches(/^[a-z ,.'-]+$/i, "Use only letters"),
  email: Yup.string()
    .required("You must fill this field")
    .email("Format example: aaa@example.bbb"),
  password: Yup.string()
    .required("You must fill this field")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/,
      "For example: XPp1@c5"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("You must fill this field"),
});

export const onSubmit = (value) => {
  const result = { submit: "Done", value: { value } };
  console.log(result);
};
