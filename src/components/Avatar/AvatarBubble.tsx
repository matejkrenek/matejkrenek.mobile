import React from 'react';
import { Text, View } from 'react-native';

import styles from './AvatarBubble.styles';

type AvatarBubbleProps = {
  user?: {
    username: string;
    avatar?: string;
  };
  remaining?: number;
  size?: 'small' | 'regular';
};

const AvatarBubble: React.FC<AvatarBubbleProps> = ({ user, remaining, size = 'regular' }) => {
  return (
    <View style={[styles.avatar, size === 'small' ? styles.small : {}]}>
      {user ? <Text style={styles.inicials}>{user.username.slice(0, 2).toUpperCase()}</Text> : <Text style={styles.inicials}>{remaining}</Text>}
    </View>
  );
};

export default AvatarBubble;
