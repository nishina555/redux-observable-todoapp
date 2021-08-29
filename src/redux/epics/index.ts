import { combineEpics } from "redux-observable";
import { getTodoEpic } from "./todoEpics";

export default combineEpics(getTodoEpic);
