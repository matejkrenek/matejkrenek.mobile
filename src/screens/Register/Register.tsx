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

type RegisterProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'register'>;
};

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const auth = AuthService.useContext();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  async function handleRegistration() {
    await auth.register(form);
  }

  return (
    <View style={[spacing.h_100, flex.center]}>
      <AuthCard>
        <Text style={[typography.h2, spacing.mb_28]}>Registrace</Text>
        <Input label="Přihlašovací jméno" style={spacing.mb_12} value={form.username} onChange={(event) => setForm({ ...form, username: event.nativeEvent.text })} />
        <Input label="Email" style={spacing.mb_12} value={form.email} onChange={(event) => setForm({ ...form, email: event.nativeEvent.text })} />
        <Input label="Heslo" style={spacing.mb_12} value={form.password} onChange={(event) => setForm({ ...form, password: event.nativeEvent.text })} />
        <Input label="Heslo znovu" style={spacing.mb_12} value={form.password_confirmation} onChange={(event) => setForm({ ...form, password_confirmation: event.nativeEvent.text })} />
        <Button type="primary" style={[spacing.w_100, spacing.mb_24]} onPress={handleRegistration}>
          Zaregistrovat se
        </Button>
        <Link onPress={() => navigation.navigate('login')}>Už mám účet</Link>
      </AuthCard>
    </View>
  );
};

export default Register;
