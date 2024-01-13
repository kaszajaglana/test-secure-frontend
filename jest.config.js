module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "./src/tests/setupJest.ts"
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  }
};
