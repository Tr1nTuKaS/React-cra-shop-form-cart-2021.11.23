import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const inputsData = [
  { type: "text", placeholder: "Name", name: "name" },
  { type: "text", placeholder: "Town", name: "town" },
  { type: "text", placeholder: "Street", name: "street" },
  { type: "number", placeholder: "House Nr", name: "houseNr" },
  { type: "text", placeholder: "Phone nr", name: "phoneNr" },
];

const Input = styled.input`
  display: block;
  font-size: 1rem;
  padding: 3px;
`;

function UserForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      town: "",
      street: "",
      houseNr: "",
      phoneNr: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3).max(30).required(),
      town: Yup.string().min(3).max(30).required(),
      street: Yup.string().min(3).max(30).required(),
      houseNr: Yup.number().min(1).integer().positive().required(),
      phoneNr: Yup.number().min(1).integer().positive().required(),
    }),
    onSubmit: (values) => {
      console.log("UserForm.js: values ===", values);
    },
  });

  console.log(formik.errors);
  console.log(formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      {inputsData.map(({ type, placeholder, name }) => (
        <div key={name}>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          {formik.touched[name] && formik.errors[name] && (
            <span>{formik.errors[name]}</span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
