import { Edit, Trash2 } from "lucide-react";
import React, { useState, useRef } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  editTask: (id: number, value: string) => void;
  toggleTaskCompletion: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  editTask,
  toggleTaskCompletion,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleEdit = () => {
    if (isEditing && spanRef.current) {
      editTask(task.id, spanRef.current.innerText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex justify-between items-center gap-2 mb-3 border rounded-md p-1.5 border-gray-400 bg-white hover:bg-slate-50 grow">
      <div className="flex gap-3 px-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="scale-110"
        />
        <span
          ref={spanRef}
          contentEditable={isEditing}
          suppressContentEditableWarning={true}
          className={`cursor-pointer ${
            task.completed ? "line-through text-gray-500" : ""
          } ${isEditing ? "border-none pl-1 outline-none" : ""}`}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEdit();
              e.preventDefault();
            }
          }}
        >
          {task.text}
        </span>
      </div>
      <div className="flex gap-1">
        <button
          onClick={handleEdit}
          className="bg-green-500 text-white p-1 px-1 rounded hover:bg-green-600 transition"
        >
          <Edit size={22} />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white p-1 px-1 rounded hover:bg-red-600 transition"
        >
          <Trash2 size={22} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
