import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export function ContactItem({contact, onClick}) {
  return (
    <TouchableOpacity onPress={() => onClick(contact.id)}>
      <View style={styles.contactItem}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {contact.lastName} {contact.firstName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
