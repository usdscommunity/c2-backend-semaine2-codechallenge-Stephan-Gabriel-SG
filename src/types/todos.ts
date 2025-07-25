export type todoEntry = {
  id: number;
  title: string;
  description?: string;
  priority: string;
  tags?: string[];
  isFavorite?: boolean;
  isCompleted?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type todoList = todoEntry[];

// API Response
export type errorDetails = {
  code: string;
  message: string;
};
export type SuccessResponse = {
  success: true;
  message: string;
  data: todoEntry | todoList;
};

export type ErrorResponse = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: errorDetails[];
  };
  timestamp: string;
};

export type filter = {
  tag?: string;
  priority?: string;
  isFavorite?: string;
  isCompleted?: string;
  search?: string;
};
