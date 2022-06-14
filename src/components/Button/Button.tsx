import { Feather } from '@expo/vector-icons';
import React, { ReactElement, useState } from 'react';
import { GestureResponderEvent, StyleProp, Text, TouchableHighlight, View } from 'react-native';
import flex from '../../styles/flex.styles';
import spacing from '../../styles/spacing.styles';
import buttonStyles from './Button.styles';

const styles: any = buttonStyles;

type ButtonProps = {
  children?: React.ReactNode;
  icon?: any;
  type?: 'purple' | 'primary' | 'regular' | 'outline';
  size?: 'small' | 'medium' | 'normal';
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<any>;
};

const Button: React.FC<ButtonProps> = ({ children, icon, type = 'primary', size = 'normal', style = {}, onPress }) => {
  const [isPress, setIsPress] = useState<boolean>(false);

  return (
    <TouchableHighlight
      style={[styles.button, styles[type], styles[size], icon ? styles['buttonIcon'] : {}, style, isPress ? styles.hover : {}]}
      activeOpacity={1}
      underlayColor="none"
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
      onPress={onPress}
    >
      <View style={flex.centerHorizontal}>
        {icon && <Feather name={icon} style={[styles.icon, children ? spacing.mr_4 : {}]} />}
        {children && <Text style={[styles.text, styles[`${type}Text`]]}>{children}</Text>}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
