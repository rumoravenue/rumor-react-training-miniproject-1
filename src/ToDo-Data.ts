export interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
    description: string;
  }
  
  export const todoData: TodoItem[] = [
    {
      id: 1,
      title: "Learn JavaScript",
      completed: false,
      description: "Description for item",
    },
    {
      id: 2,
      title: "Learn React",
      completed: false,
      description: "Description for item",
    },
    {
      id: 3,
      title: "Build a simple project",
      completed: true,
      description: "Description for item",
    },
  ];
  