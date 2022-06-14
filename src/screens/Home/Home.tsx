import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import AvatarBubble from '../../components/Avatar/AvatarBubble';
import colors from '../../constants/color.styles';
import flex from '../../styles/flex.styles';
import spacing from '../../styles/spacing.styles';
import text from '../../styles/text.styles';
import typography from '../../styles/typography.styles';
import styles from './Home.styles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/route.types';
import { KanbanService } from '../../services/kanban/kanban.service';
import { KanbanApi } from '../../api/kanban/kanban.api';
import { KanbanActionTypes } from '../../services/kanban/kanban.reducer';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import { IKanban } from '../../types/kanban.types';
import { AuthService } from '../../services/auth/auth.service';
import { api } from '../../config/api.config';

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'home'>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [store, dispatch] = KanbanService.useReducer();
  const auth = AuthService.useContext();

  async function kanbans() {
    dispatch({
      type: KanbanActionTypes.LOADING,
      payload: {
        isLoading: true,
      },
    });
    const { status, errors, data } = await KanbanApi.getAll();

    switch (status) {
      case 422:
        dispatch({
          type: KanbanActionTypes.ERROR,
          payload: {
            errors: errors,
          },
        });
        break;
      default:
        dispatch({
          type: KanbanActionTypes.SETALL,
          payload: {
            kanbans: data.data,
          },
        });
    }

    dispatch({
      type: KanbanActionTypes.LOADING,
      payload: {
        isLoading: false,
      },
    });
  }

  useEffect(() => {
    kanbans();
  }, []);

  if (store.isLoading) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={spacing.mb_24}>
        <Text style={typography.h2}>Všechyn kanbany</Text>
      </View>
      <ScrollView>
        {store.kanbans ? (
          store.kanbans.map((kanban: IKanban, index: number) => (
            <TouchableHighlight key={index} activeOpacity={1} underlayColor="none" onPress={() => navigation.navigate('board', { id: kanban.id })}>
              <View style={styles.card}>
                <Text style={[typography.h4, spacing.mb_8]}>{kanban.name}</Text>
                <Text style={[typography.p, text.muted]}>{kanban.description ? kanban.description : 'Žádný popis'}</Text>
                <View style={[flex.centerHorizontal, flex.between, spacing.mt_16]}>
                  <AvatarBubble user={kanban.members[0]} size="small" />
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={[flex.centerHorizontal, spacing.mr_12]}>
                      <Feather name="columns" size={12} color={colors.black.secondary} style={spacing.mr_4} />
                      <Text style={[typography.span, text.muted]}>{kanban.columns_count} sloupců</Text>
                    </View>
                    <View style={[flex.centerHorizontal]}>
                      <Feather name="check-square" size={12} color={colors.black.secondary} style={spacing.mr_4} />
                      <Text style={[typography.span, text.muted]}>{kanban.tasks_count} úkolů</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          ))
        ) : (
          <>
            <Text>Toto se zobrazuje, protože Matěj je ňouma a neopravil to</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
