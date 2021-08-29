import { Epic, ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { ActionTypes } from "../actionTypes";
import { TodoActions, setTodos } from "../actions";
import axios from "axios";
import { from } from "rxjs";

export const getTodoEpic: Epic<TodoActions, TodoActions> = (action$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_TODOS),
    mergeMap(() =>
      from(axios.get("http://localhost:4000/todos")).pipe(
        map((response) => setTodos(response.data))
      )
    )
  );
