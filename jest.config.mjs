// jest.config.mjs
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
  // preset: "ts-jest",
  // roots: ["<rootDir>/src"],
  // modulePaths: ["<rootDir>/src"],
  // moduleDirectories: ["node_modules", "<rootDir>/"],
  // testMatch: ["**/*.test.(ts|tsx)"],
};

// createJestConfig is exported this way
export default createJestConfig(config);
