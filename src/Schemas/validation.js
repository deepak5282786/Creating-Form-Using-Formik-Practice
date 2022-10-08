import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(4).max(20).required("Please enter your name"),
  email: Yup.string().email().required("Please Enter your email"),
  password: Yup.string().min(8).required("Please Enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
