import { TodoActionTypes, GetTodosType, PostTodoType } from "./actionTypes";
import { TodoItem } from "./types";

type SetTodosAction = {
  type: TodoActionTypes.SET_TODOS;
  payload: { todos: TodoItem[] };
};

export const setTodos = (todos: TodoItem[]): SetTodosAction => ({
  type: TodoActionTypes.SET_TODOS,
  payload: { todos },
});

type AddTodoAction = {
  type: TodoActionTypes.ADD_TODO;
  payload: {
    id: number;
    content: string;
  };
};

export const addTodo = (content: string, id: number): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload: {
    id,
    content,
  },
});

type GetTodosRequestAction = {
  type: GetTodosType.GET_TODOS_REQUEST;
};
export const getTodosRequest = (): GetTodosRequestAction => ({
  type: GetTodosType.GET_TODOS_REQUEST,
});

type PostTodoRequestAction = {
  type: PostTodoType.POST_TODO_REQUEST;
  payload: {
    input: string;
  };
};
export const postTodoRequest = (input: string): PostTodoRequestAction => ({
  type: PostTodoType.POST_TODO_REQUEST,
  payload: {
    input,
  },
});

export type TodoActions = SetTodosAction | AddTodoAction;
export type GetTodosActions = GetTodosRequestAction;
export type PostTodoActions = PostTodoRequestAction;
