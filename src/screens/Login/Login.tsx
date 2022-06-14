import AuthCard from '../../components/AuthCard/AuthCard';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import typography from './../../styles/typography.styles';
import Input from '../../components/Input/Input';
import spacing from '../../styles/spacing.styles';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import flex from '../../styles/flex.styles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/route.types';
import { AuthService } from '../../services/auth/auth.service';

type LoginProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'login'>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const auth = AuthService.useContext();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  async function handleLogin() {
    await auth.login(form);
  }

  return (
    <View style={[spacing.h_100, flex.center]}>
      <AuthCard>
        <Text style={[typography.h2, spacing.mb_28]}>Přihlášení</Text>
        <Input label="Přihlašovací jméno" style={spacing.mb_12} value={form.username} onChange={(event) => setForm({ ...form, username: event.nativeEvent.text })} />
        <Input type="password" label="Heslo" style={spacing.mb_12} value={form.password} onChange={(event) => setForm({ ...form, password: event.nativeEvent.text })} />
        <Button type="primary" style={[spacing.w_100, spacing.mb_24]} onPress={handleLogin}>
          {auth.isLoading() ? '...loading' : 'Přilásit se'}
        </Button>
        <Link onPress={() => navigation.navigate('register')}>Ještě nemáš účet</Link>
      </AuthCard>
    </View>
  );
};

export default Login;
