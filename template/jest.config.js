module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    testResultsProcessor: 'jest-sonar-reporter',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/types',
        '<rootDir>/src/config',
        '<rootDir>/src/constants',
        '<rootDir>/src/index.tsx',
        '<rootDir>/src/i18n.ts',
        '<rootDir>/src/reportWebVitals.ts'
    ],
    transform: {
        '\\.[jt]sx?$': 'babel-jest'
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!blip-ds)',
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$'
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'jest-transform-stub',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/__mocks__/svg.js'
    }
};
