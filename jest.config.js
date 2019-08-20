const jestConfig = {
  setupFiles: ["<rootDir>/.jest/register-context.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/lib/**/*.js",
    "!client/**/*.stories.js",
    "!**/index.js"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -0
    }
  }
};

module.exports = jestConfig;
