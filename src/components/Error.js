import React from 'react';
import {View, Text} from 'react-native';

export function Error({error}) {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 15}}>Error</Text>
      <Text style={{borderWidth: 2, borderColor: 'red', padding: 5}}>
        {error}
      </Text>
    </View>
  );
}

Error.defaultProps = {
  error: 'No error',
};
