export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
      useESM: true,
    }],
  },
  moduleNameMapper: {
    '^/src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/class8/tests/setupTests.ts'],
  testMatch: ['<rootDir>/src/class8/tests/**/*.test.{ts,tsx}'],
  transformIgnorePatterns: [
    '/node_modules/(?!.*\\.mjs$)'
  ]
};
