import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Styles/TravelRequestForm.css';

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  purpose: Yup.string().required('Purpose is required'),
});

interface TravelRequestFormValues {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

const TravelRequestForm: React.FC = () => {
  return (
    <Formik<TravelRequestFormValues>
      initialValues={{ destination: '', startDate: '', endDate: '', purpose: '' }}
      validationSchema={travelRequestSchema}
      onSubmit={(values) => {
        console.log('Travel Request:', values);
      }}
    >
      {() => (
        <Form className="form-container">
          <div className="class-container">
            <h1 className="class-title">Class 5</h1>
            <p className="class-description">Form Handling and Validation.</p>
            <a href="../../../../../src/class3/a01029079/public/menu2.html" className="class-button-link">
              Go to Menu
            </a>
          </div>
          <h1 className="form-title">Travel Request Form</h1>
          <div className="form-group">
            <Field
              type="text"
              name="destination"
              placeholder="Destination"
              className="form-input"
            />
            <ErrorMessage name="destination" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <Field
              type="date"
              name="startDate"
              placeholder="Start Date"
              className="form-input"
            />
            <ErrorMessage name="startDate" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <Field
              type="date"
              name="endDate"
              placeholder="End Date"
              className="form-input"
            />
            <ErrorMessage name="endDate" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <Field
              as="textarea"
              name="purpose"
              placeholder="Purpose"
              className="form-textarea"
            />
            <ErrorMessage name="purpose" component="div" className="form-error" />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TravelRequestForm;