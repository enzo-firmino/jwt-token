/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import {Login} from './src/screens/Login';
import {ContactList} from './src/screens/ContactList';
import {Contact} from './src/screens/Contact';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Register} from './src/screens/Register';
import {ContactForm} from './src/screens/ContactForm';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  let isLoggedIn = true;

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.body}>
          <NavigationContainer>
            {/*{isLoggedIn ? (*/}
            {/*  <Stack.Navigator initialRouteName="Login">*/}
            {/*    <Stack.Screen name="ContactList" component={ContactList} />*/}
            {/*    <Stack.Screen name="Contact" component={Contact} />*/}
            {/*  </Stack.Navigator>*/}
            {/*) : (*/}
            {/*  <Stack.Navigator initialRouteName="Login">*/}
            {/*    <Stack.Screen name="Login" component={Login} />*/}
            {/*    <Stack.Screen name="Register" component={Register} />*/}
            {/*  </Stack.Navigator>*/}
            {/*)}*/}
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="ContactList" component={ContactList} />
              <Stack.Screen name="ContactForm" component={ContactForm} />
              <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
