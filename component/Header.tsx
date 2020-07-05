import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string|undefined;
  setDetail?: React.Dispatch<React.SetStateAction<boolean>>
}

const Header:FC<Props> = ({title,setDetail}) => {
  return (
      <View style={styles.header}>
        {setDetail&&<Text style={styles.back} onPress={()=>setDetail(false)}>←</Text>}
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
    fontWeight: 'bold'
  },
  back: {
    color: 'white',
    fontSize: 30,
    position: "absolute",
    left: 20,
    top: 30
  }
});

export default Header;
