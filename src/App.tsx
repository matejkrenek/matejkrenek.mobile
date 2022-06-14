import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { AuthService } from './services/auth/auth.service';
import colorStyles from './constants/color.styles';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: colorStyles.white.primary } }}>
      <AuthService.Provider>
        <Navigation />
      </AuthService.Provider>
      <StatusBar />
    </NavigationContainer>
  );
}
