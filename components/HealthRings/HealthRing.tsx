import { View, Text } from 'react-native';
import { colors } from './colors';
import React, { useState } from 'react';
import { Ring } from './Ring/Ring';
import { SmallButton } from '../SmallButton/SmallButton';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
export const HealthRings: React.FC = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const [percent3, setPercent3] = useState(0);

  const regenerateData = () => {
    setPercent1(Math.floor(Math.random() * 100));
    setPercent2(Math.floor(Math.random() * 100));
    setPercent3(Math.floor(Math.random() * 100));
    setIsGenerated(true);
  };

  const deleteData = () => {
    setPercent1(0);
    setPercent2(0);
    setPercent3(0);
    setIsGenerated(false);
  };

  const ringProps = [
    {
      radius: 70,
      bgColor: colors.redDisabled,
      gradientStartColor: colors.redStart,
      gradientEndColor: colors.redEnd,
      fill: percent1,
      icon: <AntDesign name="arrowright" size={10} color="black" />,
    },
    {
      radius: 50,
      bgColor: colors.greenDisabled,
      gradientStartColor: colors.greenStart,
      gradientEndColor: colors.greenEnd,
      fill: percent2,
      icon: <AntDesign name="doubleright" size={10} color="black" />,
    },
    {
      radius: 30,
      bgColor: colors.blueDisabled,
      gradientStartColor: colors.blueStart,
      gradientEndColor: colors.blueEnd,
      fill: percent3,
      icon: <AntDesign name="arrowup" size={10} color="black" />,
    },
  ];

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Text
        style={{
          color: 'white',
          fontSize: 50,
          top: -200,
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
          textAlign: 'left',
        }}
      >
        Health Rings
      </Text>

      {ringProps.map((props, index) => (
        <Ring key={index} {...props} />
      ))}

      <View style={{ top: 200 }}>
        <SmallButton title={isGenerated ? 'Regenerate' : 'Generate'} onPress={regenerateData} />
      </View>
      <View style={{ top: 210 }}>
        <SmallButton title={'Delete'} onPress={deleteData} />
      </View>
    </View>
  );
};
