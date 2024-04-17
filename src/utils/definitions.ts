export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
  filter: string;
  editModalOpen: boolean;
  currentTask: Task | null;
}
