import { TodoActionTypes, GetTodosType, PostTodoType } from "./actionTypes";
import { TodoItem, VisibilityFilterTypes } from "./types";

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

type SetFilterAction = {
  type: TodoActionTypes.SET_FILTER;
  payload: {
    filter: VisibilityFilterTypes;
  };
};

export const setFilter = (filter: VisibilityFilterTypes): SetFilterAction => ({
  type: TodoActionTypes.SET_FILTER,
  payload: { filter },
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

export type TodoActions = SetTodosAction | AddTodoAction | SetFilterAction;
export type GetTodosActions = GetTodosRequestAction;
export type PostTodoActions = PostTodoRequestAction;
