import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface TravelRequestFormValues {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  purpose: Yup.string().required('Purpose is required'),
});

const TravelRequestForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ destination: '', startDate: '', endDate: '', purpose: '' }}
      validationSchema={travelRequestSchema}
      onSubmit={(values: TravelRequestFormValues) => {
        console.log('Travel Request:', values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{ padding: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Travel Request Form
          </h1>
          <div style={{ marginBottom: '16px' }}>
            <Field
              type="text"
              name="destination"
              placeholder="Destination"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
              }}
            />
            <ErrorMessage
              name="destination"
              component="div"
              style={{ color: 'red', marginTop: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <Field
              type="date"
              name="startDate"
              placeholder="Start Date"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
              }}
            />
            <ErrorMessage
              name="startDate"
              component="div"
              style={{ color: 'red', marginTop: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <Field
              type="date"
              name="endDate"
              placeholder="End Date"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
              }}
            />
            <ErrorMessage
              name="endDate"
              component="div"
              style={{ color: 'red', marginTop: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <Field
              as="textarea"
              name="purpose"
              placeholder="Purpose"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                height: '100px',
              }}
            />
            <ErrorMessage
              name="purpose"
              component="div"
              style={{ color: 'red', marginTop: '4px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TravelRequestForm;
