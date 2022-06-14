import React from 'react';
import { Dimensions, ScrollView, StyleProp, Text, View } from 'react-native';
import flex from '../../styles/flex.styles';
import typography from '../../styles/typography.styles';
import styles from './Kanban.styles';
import KanbanTask from './KanbanTask';
import { IKanbanColumn, IKanbanTask } from '../../types/kanban.types';
import { TaskService } from '../../services/task/task.service';
import colors from '../../constants/color.styles';
import spacing from '../../styles/spacing.styles';
import { Feather } from '@expo/vector-icons';
import text from '../../styles/text.styles';
import badge from '../../styles/badge.styles';
import SplashScreen from '../SplashScreen/SplashScreen';

const { width, height } = Dimensions.get('window');

type KanbanColumnProps = {
  style?: StyleProp<any>;
  column: IKanbanColumn;
};

const KanbanColumn: React.FC<KanbanColumnProps> = ({ style = {}, column }) => {
  const tasks = TaskService.useContext();

  return (
    <View style={[styles.kanbanColumn, { width: width - 80 }, style]}>
      <View style={[styles.kanbanColumn__header]}>
        <View
          style={[
            {
              marginRight: 8,
              width: 8,
              height: 8,
              borderRadius: 16,
              backgroundColor: colors.grey.secondary,
            },
          ]}
        />
        <View style={flex.centerHorizontal}>
          <Text style={typography.h5}>{column.name}</Text>
        </View>
        <View
          style={[
            {
              marginLeft: 12,
              width: 20,
              height: 20,
              borderRadius: 40,
              backgroundColor: colors.grey.secondary,
            },
            flex.center,
          ]}
        >
          <Text style={typography.p}>{tasks.whereColumn(column.id).length || 0}</Text>
        </View>
      </View>
      <View style={[styles.hr]}></View>
      <View style={[styles.kanbanColumn__content, { maxHeight: height - 195 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {tasks.isLoading() ? (
            <SplashScreen />
          ) : (
            <>
              {tasks.whereColumn(column.id).map((task: IKanbanTask, index: number) => {
                return <KanbanTask key={index} task={task} style={{ marginBottom: index === tasks.whereColumn(column.id).length - 1 ? 20 : 10, marginTop: index === 0 ? 20 : 10 }} />;
              })}
              {!tasks.whereColumn(column.id).length && !tasks.isLoading() && (
                <View style={[flex.center, { padding: 32, height: 200 }]}>
                  <View style={[spacing.mb_12, badge.badge]}>
                    <Feather name="coffee" size={24} color={colors.black.secondary} />
                  </View>
                  <Text style={[typography.h5, text.muted]}>Žádné tasky</Text>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default KanbanColumn;
