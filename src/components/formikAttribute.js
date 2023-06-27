import * as Yup from "yup";

export const initialValues = {
  firstName:"",
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  firstName:Yup.string().required("You must fill this field").matches(/^[a-z ,.'-]+$/i , 'Use only letters'),
  lastName:Yup.string().required("You must fill this field").matches(/^[a-z ,.'-]+$/i , 'Use only letters'),
  email: Yup.string()
    .required("You must fill this field")
    .email("Format example: aaa@example.bbb"),
  password: Yup.string()
    .required("You must fill this field")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
      "At least one cap letter and one small letter and numbers and special characters"
    ),
});

export const onSubmit = (value) => {
    const result = {submit : 'Done' , value :{value}}
  console.log(result);

};
