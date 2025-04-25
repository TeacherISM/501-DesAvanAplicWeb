import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import "/src/A01028033/styles.css";

// Tipamos los valores del formulario
interface TravelRequestValues {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Se necesita un destino'),
  startDate: Yup.date().required('Se necesita una fecha de inicio'),
  endDate: Yup.date()
    .required('Se necesita una fecha de finalización')
    .min(Yup.ref('startDate'), 'La fecha de finalización de ser después a la fecha de inicio'),
  purpose: Yup.string().required('Se necesita una razón de viaje'),
});

const TravelRequestForm: React.FC = () => {
  const initialValues: TravelRequestValues = {
    destination: '',
    startDate: '',
    endDate: '',
    purpose: '',
  };

  const handleSubmit = (
    values: TravelRequestValues,
    actions: FormikHelpers<TravelRequestValues>
  ) => {
    console.log('Travel Request:', values);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={travelRequestSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="p-4">
            <h1 className="text-2xl font-bold mb-4">Formulario de Solicitud de Viaje</h1>
            <div className="mb-4">
              <Field
                type="text"
                name="destination"
                placeholder="Destination"
                className="p-2 border rounded"
              />
              <ErrorMessage name="destination" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Field
                type="date"
                name="startDate"
                placeholder="Start Date"
                className="p-2 border rounded"
              />
              <ErrorMessage name="startDate" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Field
                type="date"
                name="endDate"
                placeholder="End Date"
                className="p-2 border rounded"
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
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
  
      <div>
        <a href="/public/A01028033/menu/milestoneMenu.html">
          <button className="bg-gray-300 text-black p-2 rounded">
            Back to menu
          </button>
        </a>  
      </div>
    </>
  );
}
  
export default TravelRequestForm;
