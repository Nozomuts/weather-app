import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './component/Header';
import Selector from './component/Selector';

export default function App() {


  return (
    <View style={styles.screen}>
      <Header title='お天気くん' />
      <Selector/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

