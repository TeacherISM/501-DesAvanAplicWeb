import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface TravelRequestFormValues {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

const initialValues: TravelRequestFormValues = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  purpose: Yup.string().required('Purpose is required'),
});

const TravelRequestForm: React.FC = () => {
  const handleSubmit = (
    values: TravelRequestFormValues,
    { resetForm }: FormikHelpers<TravelRequestFormValues>
  ) => {
    console.log('Travel Request:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={travelRequestSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="p-4">
          <h1 className="text-2xl font-bold mb-4">Travel Request Form</h1>
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
  );
};

export default TravelRequestForm;
