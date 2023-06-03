import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';

const en = require('./locales/en.json');
const es = require('./locales/es.json');

i18n.translations = {
  en,
  es
};

const fallback = { languageTag: "en", isRTL: false };

const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;

i18n.locale = languageTag;

export default i18n;

Here, react-native-localize is used to find the best matching language provided by the user's device settings. If none is matched, it will fall back to English.

    Usage:

Now you can import your i18n.js file and use it to translate text:

jsx

import React from 'react';
import { Text } from 'react-native';
import i18n from './i18n';

const WelcomeScreen = () => {
  return (
    <Text>{i18n.t('welcome')}</Text>
  );
};

export default WelcomeScreen;

In the example above, i18n.t('welcome') will display the welcome message in the user's language (either English or Spanish, in this case).

Remember, i18n is not limited to React Native. You can use it in any JavaScript or TypeScript project.
User
[{
	"resource": "/c:/Users/danie/Desktop/ReactNative2/my-project/my-project/components/onboarding/ShopFront.tsx",
	"owner": "typescript",
	"code": "2724",
	"severity": 8,
	"message": "'\"react-native\"' has no exported member named 'View'. Did you mean '_View'?",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 10,
	"endLineNumber": 2,
	"endColumn": 14,
	"relatedInformation": [
		{
			"startLineNumber": 612,
			"startColumn": 15,
			"endLineNumber": 612,
			"endColumn": 20,
			"message": "'_View' is declared here.",
			"resource": "/c:/Users/danie/Desktop/ReactNative2/my-project/my-project/node_modules/react-native/Libraries/Animated/Animated.d.ts"
		}
	]
}]         import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';
import ShopHeader from '../shop/ShopHeader';
import ShopFooter from '../shop/ShopFooter';

type ShopFrontProps = {
  navigation: any;
}

const ShopFront: React.FC<ShopFrontProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandPress = (productType: string) => {
    if (productType === 'Disposables') {
      navigation.navigate('VapeScreen');
    }
    if (productType === 'Juice') {
      navigation.navigate('JuiceScreen');
    } 
  };

  const { styles } = navigation.screenProps;

  return (
    <View style={{backgroundColor: styles.background}}>
      <ShopHeader navigation={navigation} /> <ScrollView contentContainerStyle={styles.scrollViewContent} stickyHeaderIndices={[1]}>
     
        <View style={styles.cardContainer}>
          <View style={styles.space} />
          <TouchableOpacity
            id="disposables"
            style={styles.card}
            onPress={() => handleBrandPress('Disposables')}
          >
            <Image 
              source={require('my-project/components/pictures/VapePics/elfbar-fotor-bg-remover-20230514115238.png')} 
              style={styles.imageStyle}
            />
            <Text style={styles.cardText}>Disposables</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            id="juice"
            style={styles.card}
            onPress={() => handleBrandPress('Juice')}
          >
            <Image 
              source={require('my-project/components/pictures/VapePics/juice-fotor-bg-remover-20230514115248.png')} 
              style={styles.imageStyle}
            />
            <Text style={styles.cardText}>Juice</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.space} />
       
      </ScrollView>
      <ShopFooter navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  space: {
    marginTop: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#1F1F1F',
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  imageStyle: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default ShopFront;
ChatGPT

The error message is saying that the module 'react-native' doesn't have an exported member named 'View'. This might be caused due to different reasons such as incorrect import statements or an issue with your typescript configuration.

The first thing you should verify is whether your import statement is correct and there are no typos or mistakes. Based on your code, the import statement seems to be correct.

You are importing the View component as:

javascript

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

Another possible cause of this issue could be the TypeScript configuration. You might have a tsconfig.json file with an incorrect or incompatible configuration.

Here are few things you could do:

    Check your TypeScript version. Ensure that the version of TypeScript you are using is compatible with the version of React Native you're using.

    Check your tsconfig.json file. The configuration file for TypeScript could be incorrectly set up. An example of a basic tsconfig.json for a React Native project might look like this:

json

{
    "compilerOptions": {
        "target": "esnext",
        "module": "commonjs",
        "jsx": "react-native",
        "outDir": "./dist",
        "strict": true,
        "moduleResolution": "node",
        "baseUrl": "./",
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true
    },
    "exclude": [
        "node_modules",
        "babel.config.js",
        "metro.config.js",
        "jest.config.js"
    ]
}

You could try replacing your current tsconfig.json with the above and see if that resolves the issue.

    Update the React Native TypeScript declaration file: If you're using a version of React Native that comes with a TypeScript declaration file (react-native.d.ts), you could try updating that file, or your entire React Native version.

    Restart Your Development Server and Clear Cache: There might be a caching issue. You can clear the cache by using npm start -- --reset-cache or yarn start --reset-cache,

User
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "skipLibCheck": true
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ],
  "include": [
    "typings/*.d.ts"
  ],
  "extends": "expo/tsconfig.base"
}               [{
	"resource": "/c:/Users/danie/Desktop/ReactNative2/my-project/my-project/tsconfig.json",
	"owner": "typescript",
	"severity": 8,
	"message": "Cannot find type definition file for 'applepayjs'.\n  The file is in the program because:\n    Entry point for implicit type library 'applepayjs'",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2
}]
ChatGPT

It looks like your TypeScript configuration is trying to include type definitions for 'applepayjs', but it's not able to find them. This is typically an issue when using a package that doesn't include TypeScript definitions by default.

Here's what you can do to solve this:

    Install the types for 'applepayjs':

If available, you can install the types for 'applepayjs' using npm or yarn:

bash

npm install --save-dev @types/applepayjs
# or
yarn add --dev @types/applepayjs

    If the types are not available:

If the TypeScript types for 'applepayjs' are not available (as it seems to be the case), you can create a type declaration file for 'applepayjs' and include it in your TypeScript configuration. Here's how to do it:

    Create a new file called applepayjs.d.ts in your 'typings' directory.

    In this file, declare a module for 'applepayjs':

typescript

declare module 'applepayjs' {
  // You can add more detailed type definitions here if you want
}

    This tells TypeScript that 'applepayjs' is a module and to not worry about missing types.

    Check your 'include' and 'exclude' settings:

Your current tsconfig.json file includes 'typings/*.d.ts' and excludes 'node_modules'. Make sure that your 'typings' directory and 'applepayjs.d.ts' file is correctly included in your TypeScript configuration.

    Skip library check:

If you don't want to deal with libraries that don't have types, you can skip checking them by adding "skipLibCheck": true to your tsconfig.json file, although this is not generally recommended as it can lead to untyped libraries being used in your codebase. This option is already present in your tsconfig.json, so it should skip checking of all declaration files (*.d.ts).

After making these changes, you may need to restart your TypeScript server or your IDE for the changes to take effect.
User
    Check your 'include' and 'exclude' settings:

Your current tsconfig.json file includes 'typings/*.d.ts' and excludes 'node_modules'. Make sure that your 'typings' directory and 'applepayjs.d.ts' file is correctly included in your TypeScript configuration. fix this in my tsconfig.json                {
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "skipLibCheck": true
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ],
  "include": [
    "typings/*.d.ts"
  ],
  "extends": "expo/tsconfig.base"
}
ChatGPT

Your current tsconfig.json seems correct, but you might be missing the 'typings' directory or the 'applepayjs.d.ts' file inside it.

Here's how you can fix this:

    Create a directory named 'typings' in your project root directory (if it's not already there).

    Inside the 'typings' directory, create a file named applepayjs.d.ts.

    In the applepayjs.d.ts file, add the following:

typescript

declare module 'applepayjs' {
  // Add more detailed type definitions here if necessary
}

After doing these steps, your project structure should look like this:

css

my-project/
├── typings/
│   └── applepayjs.d.ts
├── node_modules/
├── src/
├── package.json
└── tsconfig.json

And your tsconfig.json should look like this:

json

{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "skipLibCheck": true
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ],
  "include": [
    "typings/*.d.ts"
  ],
  "extends": "expo/tsconfig.base"
}

