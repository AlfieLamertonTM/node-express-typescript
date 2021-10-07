module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    globals: {
      "ts-jest": {
        diagnostics: {
          ignoreCodes: ["TS6133"],
        },
      },
    },
    setupFilesAfterEnv: ["jest-extended"],
    testMatch: ["**/?(*.)+(spec|test).(t|j)s"],
    testPathIgnorePatterns: ["/node_modules/", "fakes"],
};