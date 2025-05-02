# TravelRequestForm Unit Tests

This directory contains unit tests for the TravelRequestForm component using Jest and React Testing Library.

## Setup

The following packages have been added to the project:

- jest
- @testing-library/react
- @testing-library/jest-dom
- ts-jest
- jest-environment-jsdom
- identity-obj-proxy
- @types/jest

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Test Files

- `setupTests.ts`: Configures Jest with React Testing Library
- `TravelRequestForm.test.tsx`: Contains tests for the TravelRequestForm component

## Tests Implemented

1. **Form Rendering Test**: Verifies that all form elements are correctly rendered
2. **Validation Error Test**: Checks that validation errors appear when submitting an empty form
3. **Date Validation Test**: Ensures that the end date must be after the start date
4. **Successful Submission Test**: Confirms that the form submits correctly with valid data

## Configuration Files

- `jest.config.js`: Main Jest configuration file
- `package.json`: Updated with test dependencies and script
