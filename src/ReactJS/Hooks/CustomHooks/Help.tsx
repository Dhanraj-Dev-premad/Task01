import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useToggle from './useToggle';

const Help = () => {
  const [value, toggleValue] = useToggle(true);

  console.log('Val-------------', value);

  return (
    <View>
      <Button
        title="Toggle Heading"
        onPress={() => toggleValue()}
      />

      <Button
        title="Hide Heading"
        onPress={() => toggleValue(false)}
      />

      <Button
        title="Show Heading"
        onPress={() => toggleValue(true)}
      />

      {

      value ?  ( <Text>Custom Hooks in React Native</Text> ) : null
      
      }
    </View>
  );
};

export default Help;