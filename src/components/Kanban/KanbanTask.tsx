import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, Text, View } from 'react-native';
import colors from '../../constants/color.styles';
import badge from '../../styles/badge.styles';
import flex from '../../styles/flex.styles';
import spacing from '../../styles/spacing.styles';
import text from '../../styles/text.styles';
import typography from '../../styles/typography.styles';
import { IKanbanTask } from '../../types/kanban.types';
import AvatarBubble from '../Avatar/AvatarBubble';
import styles from './Kanban.styles';

type KanbanTaskProps = {
  style?: StyleProp<any>;
  task: IKanbanTask;
};

const KanbanTask: React.FC<KanbanTaskProps> = ({ style = {}, task }) => {
  return (
    <View style={[styles.kanbanTask, style]}>
      <View style={[spacing.mb_8, badge.badge]}>
        <Text style={typography.p}>{task.column.name}</Text>
      </View>
      <Text style={[typography.h4, spacing.mb_8]}>{task.name}</Text>
      <Text style={typography.p}>{task.description}</Text>
      <View style={[spacing.mt_16, flex.between, flex.centerHorizontal, spacing.w_100]}>
        <AvatarBubble user={task.executor} size="small" />
        <View style={[flex.centerHorizontal]}>
          <Feather name="calendar" size={12} color={colors.black.secondary} style={spacing.mr_4} />
          <Text style={[typography.span, text.muted]}>{task.created_at}</Text>
        </View>
      </View>
    </View>
  );
};

export default KanbanTask;
