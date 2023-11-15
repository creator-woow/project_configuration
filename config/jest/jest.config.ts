import path from 'path';

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
  testRegex: ['.test.tsx?$'],
  transform: {
    '.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'svgTransformer.tsx')
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts']
};
