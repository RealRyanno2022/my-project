module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'babel-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['my-project/node_modules/'],
  };