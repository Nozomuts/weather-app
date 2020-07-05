import React, { FC } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

type Props = {
  area: string|undefined;
  forecastsRef: any;
  setDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodaysForecast: FC<Props> = ({ area, forecastsRef, setDetail }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.areaTitle}>{area}</Text>
      <Text>
        {forecastsRef['date']}({forecastsRef['dateLabel']})
      </Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: forecastsRef['image']['url'] }}
      />
      <Text style={{ fontSize: 18, marginVertical: 10 }}>
        {forecastsRef['image']['title']}
      </Text>
      <Button title='詳しく見る' onPress={() => setDetail(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 200,
  },
  image: {
    height: 62,
    width: 100,
  },
  areaTitle: { fontSize: 25, fontWeight: 'bold' },
});

export default TodaysForecast;
