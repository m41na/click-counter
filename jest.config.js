module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/__tests__/setup/setupEnzyme.js"],
    testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
    transform: {"^.+\\.(js|jsx)?$":"babel-jest", ".+\\.(css|style|less|sass|scss)$": "jest-transform-css"},
    moduleNameMapper: { "#(.*)$": "<rootDir>/src/$1" },
    clearMocks: true
};