import React from "react";
import TodoItem from "./TodoItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  toggleTaskCompletion: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  deleteTask,
  editTask,
  toggleTaskCompletion,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;
