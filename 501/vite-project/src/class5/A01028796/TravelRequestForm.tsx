/** @jsxImportSource react */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required("Destino faltante"),
  startDate: Yup.date().required("Fecha inicio faltante"),
  endDate: Yup.date()
    .required("Fecha regreso faltante")
    .min(Yup.ref("startDate"), "Fecha de regreso tiene que ser despues de fecha de inicio"),
  purpose: Yup.string().required("Descripción faltante"),
});

export default function TravelRequestForm() {
  return (
    <Formik
      initialValues={{
        destination: "",
        startDate: "",
        endDate: "",
        purpose: "",
      }}
      validationSchema={travelRequestSchema}
      onSubmit={(values) => {
        console.log("Travel Request:", values);
        alert("Formulario enviado correctamente");
      }}
    >
      {() => (
        <Form className="p-4">
          <h1 className="text-2xl font-bold mb-4">Travel Request Form</h1>

          <div className="mb-4">
            <Field
              type="text"
              name="destination"
              placeholder="Destination"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="destination" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              type="date"
              name="startDate"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="startDate" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              type="date"
              name="endDate"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="endDate" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              as="textarea"
              name="purpose"
              placeholder="Purpose"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="purpose" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
