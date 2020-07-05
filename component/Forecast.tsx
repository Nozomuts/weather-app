import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  day: string;
  area: string | undefined;
  forecastsRef: any;
};

const Forecast: FC<Props> = ({ day, area, forecastsRef }) => {
  console.log(forecastsRef);
  return (
    <View style={styles.container}>
      <Text style={styles.areaTitle}>{forecastsRef['date']}
        {day}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: forecastsRef['image']['url'] }}
      />
      <Text style={{ fontSize: 18, marginVertical: 10 }}>
        {forecastsRef['image']['title']}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 62,
    width: 100,
  },
  areaTitle: { fontSize: 25, fontWeight: 'bold' },
});

export default Forecast;
