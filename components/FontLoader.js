import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const loadFonts = () => {
  return Font.loadAsync({
    FontAwesome: require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
  });
};

const FontLoader = ({ children }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  }

  return children;
};

export default FontLoader;