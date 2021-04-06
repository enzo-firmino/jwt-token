import React, {useState} from 'react';
import {View} from 'react-native';
import {newUser} from '../actions/authentification';
import {Error} from '../components/Error';
import RegisterForm from '../components/RegisterForm';

export function Register({navigation}) {
  const [error, setError] = useState('');

  function onRegister(login, password) {
    newUser(login, password).then((response) => {
      if (response.error != null) {
        setError(response.message);
      } else {
        return navigation.navigate('ContactList', {jwt: response});
      }
    });
  }

  return (
    <View style={{flex: 1}}>
      <RegisterForm buttonText="Register" onRegister={onRegister} />
      <Error error={error} />
    </View>
  );
}
