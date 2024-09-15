import "./Form.css";
import { Formik, Form } from "formik";
import { Button, Input, UploadInput, Select } from "..";
import * as yup from "yup";

const FormDesign = ({
  fields,
  grid = 1,
  gap = 4,
  disabled = false,
  formData = null,
  btnType = "create",
  ...rest
}) => {
  const schema = {
    fullname: yup.string().required("This Field Is Required !"),
    name: yup.string().required("This Field Is Required !"),
    mobile: yup.string().required("This Field Is Required !"),
    message: yup.string().required("This Field Is Required !"),
    email: yup
      .string()
      .required("This Field Is Required !")
      .email("Enter a valid email"),
    password: yup.string().required("This Field Is Required !"),
    title: yup.string().required("This Field Is Required !"),
    desc: yup.string().required("This Field Is Required !"),
    duration: yup.string().required("This Field Is Required !"),
    actorsName: yup.string().required("This Field Is Required !"),
    thumbnail: yup.string().required("This Field Is Required !"),
    movie: yup.string().required("This Field Is Required !"),
    video: yup.string().required("This Field Is Required !"),
    category: yup.string().required("This Field Is Required !"),
    tags: yup.string().required("This Field Is Required !"),
    emi: yup.string().required("This Field Is Required !"),
    amount: yup.string().required("This Field Is Required !"),
  };

  const defaultValues = {};
  const validation = {};

  const Fields = ({ formik }) => {
    const allFields = fields.map((item, index) => {
      const { component, props } = item;
      switch (component) {
        case "input":
          return <Input key={index} {...props} />;
        case "upload":
          return <UploadInput key={index} formik={formik} {...props} />;
        case "select":
          return <Select key={index} {...props} />;

        default:
          return null;
      }
    });

    return allFields;
  };

  fields.map((item, index) => {
    const { props } = item;
    const { name } = props;
    defaultValues[name] = formData ? formData[name] : "";
    validation[name] = schema[name];
  });

  const design = (
    <>
      <Formik
        {...rest}
        initialValues={defaultValues}
        validationSchema={yup.object(validation)}
      >
        {(formik) => {
          return (
            <>
              <Form className={`grid gap-${gap}`}>
                <div className={`grid  gap-${gap}`}>
                  <Fields formik={formik} />
                </div>

                {
                    btnType === "create"
                     ?
                     <Button disabled={disabled} theme="error" type="submit">
                     Submit
                   </Button> 
                   :
                   <Button disabled={disabled} theme="info" type="submit">
                   Save Changes
                 </Button>

                }

               
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
  return design;
};

export default FormDesign;
