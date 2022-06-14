import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import AvatarBubble from '../../components/Avatar/AvatarBubble';
import Kanban from '../../components/Kanban/Kanban';
import spacing from '../../styles/spacing.styles';
import typography from '../../styles/typography.styles';
import styles from './Board.styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/route.types';
import { KanbanService } from '../../services/kanban/kanban.service';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import { ColumnService } from '../../services/column/column.service';
import { TaskService } from '../../services/task/task.service';

type BoardProps = NativeStackScreenProps<RootStackParamList, 'board'>;

const Board: React.FC<BoardProps> = ({ navigation, route }) => {
  const kanban = KanbanService.useContext();

  async function getKanban() {
    if (route.params.id) {
      await kanban.loadKanban(route.params.id);
    }
  }

  useEffect(() => {
    getKanban();
  }, []);

  if (kanban.isLoading()) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      {kanban.get() && (
        <View style={[spacing.mb_24, styles.header]}>
          <Text style={typography.h2}>{kanban.get().name}</Text>
          <AvatarBubble user={kanban.get().members[0]} />
        </View>
      )}
      <ColumnService.Provider>
        <TaskService.Provider>
          <Kanban kanban={kanban.get()} />
        </TaskService.Provider>
      </ColumnService.Provider>
    </View>
  );
};

export default Board;
