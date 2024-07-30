import React, { useState } from "react";

interface TodoFormProps {
  addTask: (task: { id: number; text: string; completed: boolean }) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ id: Date.now(), text: taskText, completed: false });
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="rounded-s-md grow border border-gray-400 p-2"
        placeholder="New task to do"
      />
      <button
        type="submit"
        className="p-2 px-3 rounded-e-md bg-blue-600 text-white hover:bg-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
