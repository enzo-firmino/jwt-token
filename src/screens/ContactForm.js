import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, Button, Text} from 'react-native';
import {editContact, newContact} from '../actions/contacts';

export function ContactForm({route, navigation}) {
  const {contact, jwt} = route.params;

  const [firstName, setFirstName] = useState(
    contact == null ? '' : contact.firstName,
  );
  const [lastName, setLastName] = useState(
    contact == null ? '' : contact.lastName,
  );
  const [email, setEmail] = useState(contact == null ? '' : contact.email);
  const [phone, setPhone] = useState(contact == null ? '' : contact.phone);
  const [avatar, setAvatar] = useState(contact == null ? '' : contact.avatar);

  function onSubmit() {
    if (contact == null) {
      newContact({firstName, lastName, email, phone, avatar}, jwt);
    } else {
      editContact(
        {id: contact.id, firstName, lastName, email, phone, avatar},
        jwt,
      );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text>Nom</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <Text>Prénom</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <Text>Téléphone</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        keyboardType="phone-pad"
      />
      <Text>Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAvatar(text)}
        value={avatar}
      />
      <Button
        title={contact == null ? 'Ajouter' : 'Modifier'}
        onPress={() => onSubmit()}
      />
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
