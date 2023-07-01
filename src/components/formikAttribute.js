import swal from "sweetalert";
import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phone: "",
  confirmPassword: "",
  auth_mode: "email",
  booleanTest: true,
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("It is required")
    .matches(/^[a-z ,.'-]+$/i, "Use only letters"),

  lastName: Yup.string()
    .required("It is required")
    .matches(/^[a-z ,.'-]+$/i, "Use only letters"),

  username: Yup.string()
    .required("It is required")
    .matches(/^[a-z ,.'-]+$/i, "Use only letters"),

  email: Yup.string()
    .required("It is required")
    .email("Format example: aaa@example.bbb"),
 
  phone: Yup.number()
    .positive("It can't start with a minus")
    .integer("It can't include a decimal point ")
    .min(8)
    .required("It is required"),

  password: Yup.string()
    .required("It is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/,
      "For example: XPp1@c5"
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("It is required"),
});

export const onSubmit = (value) => {
  const result = { submit: "Done", value: { value } };
  console.log(result);
  console.log("Registration was successful");
  swal("", "Your registration was successful!", "success");
};
