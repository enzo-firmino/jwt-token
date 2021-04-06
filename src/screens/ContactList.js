import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {ContactItem} from '../components/ContactItem';
import {getContact, getContacts} from '../actions/contacts';

export function ContactList({navigation}) {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((response) => setContacts(response));
  }, []);

  function onClick(id) {
    getContact(id).then((contact) =>
      navigation.navigate('Contact', {contact}),
    );
  }

  const renderContact = ({item}) => {
    return <ContactItem contact={item} onClick={onClick} />;
  };

  return (
    <View>
      <FlatList
        style={{borderTopColor: 'black', borderTopWidth: 2}}
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="New contact"
        onPress={() =>
          navigation.navigate('ContactForm', {contact: null})
        }
      />
    </View>
  );
}
