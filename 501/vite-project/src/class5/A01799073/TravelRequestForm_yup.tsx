import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BackToMenu from '../../class3/A01799073/components/BackMenu';
import '../A01799073/styles/neonform.css';

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  purpose: Yup.string().required('Purpose is required'),
});

const TravelRequestForm_yup: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log('Travel Request:', values);
    alert('Form submitted successfully!');
  };

  return (
    <div className="neon-bg">
      <Formik
        initialValues={{ destination: '', startDate: '', endDate: '', purpose: '' }}
        validationSchema={travelRequestSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="neon-card">
            <div className="neon-title">🚩 Travel Request</div>

            <label className="neon-label" htmlFor="destination">Destination</label>
            <Field
              id="destination"
              name="destination"
              type="text"
              placeholder="Destination"
              className={`neon-input${errors.destination && touched.destination ? " neon-invalid" : ""}`}
            />
            <ErrorMessage name="destination" component="div" className="neon-error" />

            <label className="neon-label" htmlFor="startDate">Start Date</label>
            <Field
              id="startDate"
              name="startDate"
              type="date"
              className={`neon-input${errors.startDate && touched.startDate ? " neon-invalid" : ""}`}
            />
            <ErrorMessage name="startDate" component="div" className="neon-error" />

            <label className="neon-label" htmlFor="endDate">End Date</label>
            <Field
              id="endDate"
              name="endDate"
              type="date"
              className={`neon-input${errors.endDate && touched.endDate ? " neon-invalid" : ""}`}
            />
            <ErrorMessage name="endDate" component="div" className="neon-error" />

            <label className="neon-label" htmlFor="purpose">Purpose</label>
            <Field
              id="purpose"
              name="purpose"
              as="textarea"
              placeholder="Purpose"
              className={`neon-textarea${errors.purpose && touched.purpose ? " neon-invalid" : ""}`}
              rows={3}
            />
            <ErrorMessage name="purpose" component="div" className="neon-error" />

            <button type="submit" className="neon-btn">
              Submit 🚀
            </button>
          </Form>
        )}
      </Formik>
      <BackToMenu/>
    </div>
  );
};

export default TravelRequestForm_yup;
