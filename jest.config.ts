/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  testMatch: ['**/?(*.)+(test).[tj]s?(x)'],
};

export default createJestConfig(config);
