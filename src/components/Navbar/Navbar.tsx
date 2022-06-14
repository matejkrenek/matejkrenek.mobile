import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { AuthService } from '../../services/auth/auth.service';
import flex from '../../styles/flex.styles';
import spacing from '../../styles/spacing.styles';
import text from '../../styles/text.styles';
import typographyStyles from '../../styles/typography.styles';
import AvatarBubble from '../Avatar/AvatarBubble';
import Button from '../Button/Button';
import styles from './Navbar.styles';

const Navbar: React.FC = () => {
  const auth = AuthService.useContext();
  const route = useRoute();
  const navigation = useNavigation();

  async function handleLogout() {
    await auth.logout();
  }

  return (
    <View style={styles.navbar}>
      <View>
        {route.name === 'board' && (
          <Button icon="arrow-left" style={spacing.mr_24} type="regular" onPress={() => navigation.goBack()}>
            Zpět
          </Button>
        )}
      </View>
      <View style={[flex.centerHorizontal]}>
        <Button icon="log-out" style={spacing.mr_24} type="regular" onPress={handleLogout} />
        <View style={spacing.mr_12}>
          <Text style={[typographyStyles.h5, text.right]}>{auth.user().username}</Text>
        </View>
        <AvatarBubble user={auth.user()} />
      </View>
    </View>
  );
};

export default Navbar;
