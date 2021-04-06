import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, Button, Text} from 'react-native';

function RegisterForm({buttonText, onRegister}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [avatar, setAvatar] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLogin(text)}
        value={login}
        keyboardType="email-address"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title={buttonText} onPress={() => onRegister(login, password)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
  },
});

export default RegisterForm;
