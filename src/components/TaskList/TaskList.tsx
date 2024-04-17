import { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import { TaskListItem } from '../TaskListItem/TaskListItem';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  selectAllTasks,
  selectFilteredTasks,
} from '@/redux/task/taskSelectors';
import {
  deleteTask,
  openEditModal,
  reorderTasks,
  toggleTask,
} from '@/redux/task/tasksSlice';

import { Task } from '@/utils/definitions';

export const TaskList: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filteredTasks = useAppSelector(selectFilteredTasks);
  const fullTasks = useAppSelector(selectAllTasks);

  function findIndexInFullList(
    filteredIndex: number,
    filteredTasks: Task[],
    fullTasks: Task[]
  ): number {
    const task = filteredTasks[filteredIndex];
    return fullTasks.findIndex(t => t.id === task.id);
  }

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIndex = findIndexInFullList(
      result.source.index,
      filteredTasks,
      fullTasks
    );
    const destinationIndex = findIndexInFullList(
      result.destination.index,
      filteredTasks,
      fullTasks
    );

    dispatch(
      reorderTasks({
        startIndex: sourceIndex,
        endIndex: destinationIndex,
      })
    );
  };

  const handleToggleTask = (id: string) => dispatch(toggleTask({ id }));
  const handleDeleteTask = (id: string) => dispatch(deleteTask({ id }));
  const handleEditTask = (id: string) => dispatch(openEditModal(id));

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {provided => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="custom-scrollbar flex flex-col gap-2 items-center w-full pr-2 mt-4"
          >
            <TransitionGroup component={null}>
              {filteredTasks.map((task, index) => (
                <CSSTransition key={task.id} timeout={500} classNames="task">
                  <Draggable draggableId={task.id} index={index}>
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-full"
                      >
                        <TaskListItem
                          task={task}
                          index={index}
                          toggleTask={handleToggleTask}
                          editTask={handleEditTask}
                          deleteTask={handleDeleteTask}
                        />
                      </div>
                    )}
                  </Draggable>
                </CSSTransition>
              ))}
            </TransitionGroup>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
