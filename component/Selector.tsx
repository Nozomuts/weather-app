import React,{useState} from 'react';
import Axios from '../axios';
import { View, Button, Alert, Text, StyleSheet } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import { AreaOptions,checkName } from '../AreaOptions';
import Forecasts from './Forecasts';

const Selector = () => {
  const [area, setArea] = useState('');
  const [data, setData] = useState();
  const [areaName,setAreaName]=useState<string|undefined>('')

  const searchWeather = () => {
    if (area === '') {
      return Alert.alert('地域を選択してください');
    }
    Axios.get('v1', { params: { city: area } })
      .then((res) => {
        setAreaName(checkName(area))
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setArea(value)}
        items={AreaOptions}
        style={pickerStyle}
        placeholder={{ label: '選択してください', value: '' }}
        Icon={() => <Text style={styles.icon}>▼</Text>}
      />
      <Button title='Search' onPress={searchWeather} />
      {data&&<Forecasts area={areaName} data={data}/>}
    </View>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginHorizontal: '10%'
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 18,
    color: '#789',
  },
})

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#789',
    borderRadius: 4,
    color: '#789',
    paddingRight: 30,
    width: 300,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#789',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    width: 280,
    backgroundColor: '#eee',
  },
});


export default Selector;
