import React from 'react';
import { StyleProp, View } from 'react-native';

import styles from './AuthCard.styles';

type AuthCardProps = {
  children: React.ReactNode;
  style?: StyleProp<any>;
};

const AuthCard: React.FC<AuthCardProps> = ({ children, style = {} }) => {
  return <View style={[styles.authCard, style]}>{children}</View>;
};

export default AuthCard;
