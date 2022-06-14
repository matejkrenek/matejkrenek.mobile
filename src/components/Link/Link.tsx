import React from 'react';
import { GestureResponderEvent, StyleProp, Text, TouchableHighlight } from 'react-native';

import styles from './Link.styles';

type LinkProps = {
  children: React.ReactNode;
  style?: StyleProp<any>;
  onPress?: (event: GestureResponderEvent) => void;
};

const Link: React.FC<LinkProps> = ({ children, style = {}, onPress }) => {
  return (
    <TouchableHighlight activeOpacity={1} underlayColor="none" onPress={onPress}>
      <Text style={[styles.link, style]}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Link;
