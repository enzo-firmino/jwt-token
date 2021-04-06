import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Text} from 'react-native';

function LoginForm({buttonText, onSubmit}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
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
      <Button title={buttonText} onPress={() => onSubmit(login, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
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

export default LoginForm;
