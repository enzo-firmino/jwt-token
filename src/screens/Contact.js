import React from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';

export function Contact({route, navigation}) {
  const {contact} = route.params;

  return (
    <View style={styles.contact}>
      <Image
        style={{width: 60, height: 60}}
        source={{
          uri: contact.avatar,
        }}
      />
      <Text style={styles.informations}> {contact.lastName}</Text>
      <Text style={styles.informations}> {contact.firstName}</Text>
      <Text style={styles.informations}> {contact.email}</Text>
      <Text style={styles.informations}> {contact.phone}</Text>
      <Button title="CALL" color="#841584" />
      <Button
        title="Edit contact"
        onPress={() => navigation.navigate('ContactForm', {contact})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  informations: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});
