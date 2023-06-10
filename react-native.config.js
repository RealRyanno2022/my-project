module.exports = {
  dependency: {
    platforms: {
      android: null,
      ios: null,
      ...(process.env.NO_FLIPPER === '1'
        ? {}
        : {'react-native-flipper': { platforms: ['android', 'ios'] }}),
    },
  },
  commands: [],
};
