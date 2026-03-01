import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts', 'jest-extended/all']
};

export default config;
