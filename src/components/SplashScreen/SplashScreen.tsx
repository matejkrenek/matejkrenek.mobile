import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../../constants/color.styles';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={colors.purple.primary} size={48} />
    </View>
  );
};

export default SplashScreen;
