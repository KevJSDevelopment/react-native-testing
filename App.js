import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestingComponent from './TestingComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>does this work?</Text>
      <StatusBar style="light" />
      <TestingComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
