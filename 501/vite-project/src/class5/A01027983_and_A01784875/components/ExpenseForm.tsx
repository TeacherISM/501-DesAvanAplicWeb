import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import Button from './Button';

// Yup validation schema
const expenseValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive')
    .min(1, 'Amount must be at least $1'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
});

const ExpenseForm = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>

      <Formik
        initialValues={{ amount: '', category: '', description: '' }}
        validationSchema={expenseValidationSchema}
        onSubmit={(values) => {
          console.log('Expense:', values);
        }}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <Field
                type="number"
                name="amount"
                placeholder="Amount"
                className="p-2 border rounded w-full"
              />
              <ErrorMessage name="amount" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Field
                type="text"
                name="category"
                placeholder="Category"
                className="p-2 border rounded w-full"
              />
              <ErrorMessage name="category" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Field
                as="textarea"
                name="description"
                placeholder="Description"
                className="p-2 border rounded w-full"
              />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>
            <Button label="Submit" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExpenseForm;