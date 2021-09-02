import { combineEpics, Epic, ofType } from "redux-observable";
import { map, mergeMap, withLatestFrom } from "rxjs/operators";
import { GetTodosType, PostTodoType } from "../actionTypes";
import { TodoActions, setTodos, GetTodosActions, addTodo } from "../actions";
import axios from "axios";
import { from } from "rxjs";
import { AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../types";

const getTodosEpic: Epic<GetTodosActions | TodoActions> = (action$) =>
  action$.pipe(
    ofType(GetTodosType.GET_TODOS_REQUEST),
    mergeMap(() =>
      from(axios.get("http://localhost:4000/todos")).pipe(
        map((response) => setTodos(response.data))
      )
    )
  );

type PostTodoItem = {
  content: string;
  completed: boolean;
};

const postTodoEpic: Epic<AnyAction, AnyAction, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(PostTodoType.POST_TODO_REQUEST),
    withLatestFrom(state$),
    // mergeMap([action, state])
    mergeMap(([{ payload }, { todos }]) => {
      const todo: PostTodoItem = {
        content: payload.input,
        completed: false,
      };
      return from(axios.post("http://localhost:4000/todos", todo)).pipe(
        map(() => addTodo(payload.input, todos.todoItems.length + 1))
      );
    })
  );

export default combineEpics(getTodosEpic, postTodoEpic);
