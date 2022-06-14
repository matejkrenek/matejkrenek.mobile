import React from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Board from './screens/Board/Board';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthService } from './services/auth/auth.service';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { KanbanService } from './services/kanban/kanban.service';
import { RootStackParamList } from './types/route.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const auth = AuthService.useContext();

  useEffect(() => {
    const authorize = async () => await auth.authorize();
    authorize();
  }, []);

  if (auth.isAuthorizing()) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      <>
        {auth.user() && !auth.isAuthorizing() && !auth.isLoading() ? (
          <>
            <Stack.Screen name="home" options={{ headerShown: false }}>
              {(props) => (
                <>
                  <Navbar />
                  <Home {...props} />
                </>
              )}
            </Stack.Screen>
            <Stack.Screen name="board" options={{ headerShown: false }}>
              {(props) => (
                <>
                  <Navbar />
                  <KanbanService.Provider>
                    <Board {...props} />
                  </KanbanService.Provider>
                </>
              )}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
          </>
        )}
      </>
    </Stack.Navigator>
  );
};

export default Navigation;
