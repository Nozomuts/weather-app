import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
}

const Header:FC<Props> = ({title}) => {
  return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  }
});

export default Header;
