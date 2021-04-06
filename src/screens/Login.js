import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import LoginForm from '../components/LoginForm';
import {authenticate} from '../actions/authentification';
import {Error} from '../components/Error';

export function Login({navigation}) {
  const [error, setError] = useState('');

  function onSubmit(login, password) {
    authenticate(login, password).then((response) => {
        console.log(response);
      if (response.error !== undefined) {
        setError(response.message);
      } else {
        return navigation.navigate('ContactList', {jwt: response});
      }
    });
  }

  return (
    <View style={{flex: 1}}>
      <LoginForm buttonText="Log in" onSubmit={onSubmit} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Error error={error} />
    </View>
  );
}
