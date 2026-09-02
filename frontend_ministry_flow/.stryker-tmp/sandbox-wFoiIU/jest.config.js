// @ts-nocheck
module.exports = {
  roots: ["<rootDir>/../dossier_test"],

  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/../jest.setup.js"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { tsconfig: "<rootDir>/../tsconfig.jest.json" }
    ]
  },

  testMatch: [
    "<rootDir>/../dossier_test/**/*.test.ts",
    "<rootDir>/../dossier_test/**/*.test.tsx"
  ]
};
