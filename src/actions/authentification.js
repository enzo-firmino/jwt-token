import * as Keychain from 'react-native-keychain';
import {MMKV} from 'react-native-mmkv';

function authenticate(login, password) {
  return fetch('http://localhost:8000/auth/login/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({login, password}),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      if (responseData.error != null) {
        return {error: responseData.error, message: responseData.message};
      }
      if (responseData.jwt != null) {
        MMKV.set('jwt', responseData.jwt);
        Keychain.setGenericPassword(login, responseData.refreshToken);
        return responseData.jwt;
      }
    });
}

function getJwt() {
  return MMKV.getString('jwt');
}

async function refreshJwt() {
  const refreshToken = await Keychain.getGenericPassword();

  return fetch('http://localhost:8000/auth/login/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({refreshToken}),
  }).then((response) =>
    response.json().then((responseData) => MMKV.set('jwt', responseData.jwt)),
  );
}

function newUser(login, password) {
  console.log(login);
  console.log(password);
  return fetch('http://localhost:8000/auth/signup/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({login, password}),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log('responsedata', responseData);
      if (responseData.error != null) {
        return {error: responseData.error, message: responseData.message};
      } else {
        return Keychain.setGenericPassword(
          login,
          responseData.refreshToken,
        ).then((r) => responseData.jwt);
      }
    });
}

export {authenticate, newUser, refreshJwt, getJwt};
