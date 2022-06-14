import React from 'react';
import { NativeSyntheticEvent, StyleProp, Text, TextInput, TextInputChangeEventData, View } from 'react-native';

import styles from './Input.styles';

type InputProps = {
  type?: 'text' | 'password';
  size?: 'large' | 'medium' | 'regular' | 'small';
  label?: string;
  value?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  style?: StyleProp<any>;
};

const Input: React.FC<InputProps> = ({ type = 'text', size, label, value, onChange, style = {} }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} secureTextEntry={type === 'password' ? true : false} value={value} onChange={onChange} />
    </View>
  );
};

export default Input;
