import React, { FC, useState } from 'react';
import { StyleSheet, Modal, ScrollView } from 'react-native';
import Card from './Card';
import TodaysForecast from './TodaysForecast';
import Forecast from './Forecast';
import Header from './Header';

type Props = {
  data: any;
  area: string | undefined;
};

const Forecasts: FC<Props> = ({ data, area }) => {
  const [detail, setDetail] = useState(false);
  const days = ['(今日)', '(明日)', '(明後日)'];
  return (
    <Card style={{ marginTop: 20 }}>
      <TodaysForecast
        area={area}
        setDetail={setDetail}
        forecastsRef={data['forecasts'][0]}
      />
      <Modal
        visible={detail}
        onDismiss={() => setDetail(false)}
        animationType='slide'
      >
        <Header title={`${area}の天気`} setDetail={setDetail}/>
        <ScrollView>
          {days.map((day: string, i: number) => (
            <Card key={day}>
              <Forecast
                day={day}
                area={area}
                forecastsRef={data['forecasts'][i]}
              />
            </Card>
          ))}
        </ScrollView>
      </Modal>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default Forecasts;
