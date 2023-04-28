import { writable } from "svelte/store";
const myTodo = [];

export const todoList = writable(myTodo);
