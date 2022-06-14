import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import { ColumnService } from '../../services/column/column.service';
import { TaskService } from '../../services/task/task.service';
import { IKanban, IKanbanColumn } from '../../types/kanban.types';
import styles from './Kanban.styles';
import KanbanColumn from './KanbanColumn';

const { width } = Dimensions.get('window');

type KanbanProps = {
  kanban: IKanban;
};

const Kanban: React.FC<KanbanProps> = ({ kanban }) => {
  let scrollView: any;
  const column = ColumnService.useContext();
  const task = TaskService.useContext();

  async function getColumns() {
    await column.loadColumns(kanban.id);
  }
  async function getTasks() {
    await task.loadTasks(kanban.id);
  }

  useEffect(() => {
    getColumns();
    getTasks();
  }, []);

  function fixPosition() {
    scrollView.scrollTo({ x: -30 });
  }

  useEffect(() => {
    const timeout = setTimeout(fixPosition, 1);
    return clearTimeout(timeout);
  }, [fixPosition]);

  return (
    <ScrollView
      ref={(SW) => (scrollView = SW)}
      horizontal={true}
      decelerationRate={0}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 30}
      snapToAlignment={'center'}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}
      style={styles.kanban}
    >
      {column.all() && column.all().map((column: IKanbanColumn, index: number) => <KanbanColumn key={index} column={column} />)}
    </ScrollView>
  );
};

export default Kanban;
