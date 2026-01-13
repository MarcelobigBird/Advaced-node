/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // A raiz é apenas 'src', pois os testes estão dentro de src
  roots: ['<rootDir>/src'],

  // Padrão para encontrar arquivos de teste
  testMatch: [
    '<rootDir>/src/tests/**/*.test.ts',
    '<rootDir>/src/tests/**/*.spec.ts',
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.spec.ts',
  ],

  // Transformar arquivos TypeScript
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  // Coletar cobertura apenas dos arquivos fonte, excluindo testes
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/tests/**/*.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.d.ts',
  ],

  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  // Mapeamento de módulos
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/src/tests/$1',
  },

  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  clearMocks: true,
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/'],
};

module.exports = config;
