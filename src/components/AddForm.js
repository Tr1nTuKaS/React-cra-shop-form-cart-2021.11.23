import { Formik } from "formik";
import css from "./AddForm.module.css";
import * as yup from "yup";

function AddForm() {
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError().required("Whats you name?"),
    address: yup.string().typeError().min(5).required("Whre you live?"),
    reapetAdrress: yup
      .string()
      .oneOf([yup.ref("address")], "adrress not match")
      .required(),
    cardNo: yup
      .string()
      .typeError()
      .min(5)
      .required("came on look, something wrong"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        cardNo: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationsSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className={css.form}>
          <p>
            <label htmlFor={"name"}>Name</label>
            <br />
            <input
              className={css.input}
              type={"text"}
              name={"name"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </p>
          {touched.name && errors.name && (
            <p className={css.errors}>{errors.name}</p>
          )}

          <p>
            <label htmlFor={"address"}>address</label>
            <br />
            <input
              className={css.input}
              type={"text"}
              name={"address"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
          </p>
          {touched.address && errors.address && (
            <p className={css.errors}>{errors.address}</p>
          )}

          <p>
            <label htmlFor={"reapetAdrress"}>reapetAdrress</label>
            <br />
            <input
              className={css.input}
              type={"text"}
              name={"reapetAdrress"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reapetAdrress}
            />
          </p>
          {touched.reapetAdrress && errors.reapetAdrress && (
            <p className={css.errors}>{errors.reapetAdrress}</p>
          )}

          <p>
            <label htmlFor={"cardNo"}>cardNo</label>
            <br />
            <input
              className={css.input}
              type={"text"}
              name={"cardNo"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardNo}
            />
          </p>
          {touched.cardNo && errors.cardNo && (
            <p className={css.errors}>{errors.cardNo}</p>
          )}

          <hr />
          <button
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={"submit"}
          >
            Send
          </button>
        </div>
      )}
    </Formik>
  );
}

export default AddForm;
