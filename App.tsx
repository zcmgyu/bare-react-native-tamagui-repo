/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TamaguiProvider} from 'tamagui';
import config from './tamagui.config';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <TamaguiProvider config={config}>
      <View>
        <Text>Test</Text>
      </View>
    </TamaguiProvider>
  );
}
