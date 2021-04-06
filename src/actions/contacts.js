import {getJwt, refreshJwt} from './authentification';
import {MMKV} from 'react-native-mmkv';

function getContacts() {
  let jwt = getJwt();
  return fetch('http://localhost:3000/api/contacts', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((err) => console.log(err));
}

function getContact(id) {
  let jwt = getJwt();

  return fetch('http://localhost:3000/api/contact/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      // if (responseData.code != null && responseData.code === 'tokenexpired')
      return responseData;
    });
}

function newContact(contact) {
  let jwt = getJwt();
  return fetch('http://localhost:3000/api/contact/', {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  })
    .then((response) => {
      console.log('response data', response);
      return response.json();
    })
    .then((responseData) => {
      return responseData;
    });
}

function editContact(contact) {
  let jwt = getJwt();

  return fetch('http://localhost:3000/api/contact/', {
    method: 'PUT',
    body: JSON.stringify(contact),
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((err) => console.log(err));
}

export {getContacts, getContact, newContact, editContact};
