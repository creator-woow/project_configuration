export default {
  preset: 'ts-jest',
  rootDir: '../..',
  clearMocks: true,
  modulePaths: ['<rootDir>/src'],
  roots: [
    '<rootDir>'
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  testRegex: ['.test.ts$'],
  transform: {
    '.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
};
