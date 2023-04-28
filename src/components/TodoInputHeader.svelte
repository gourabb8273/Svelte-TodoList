<script>
  import { todoList } from "../stores/TodoStore";
  import TodoListItem from "./TodoListItem.svelte";
  import getCurrentDateTime from "../services/getFormattedDateTime";
  import uuid from "react-uuid";
  let title;

  function handleAdd() {
    const newList = { title, date: getCurrentDateTime(), id: uuid() };
    todoList.update((list) => {
      return [...list, newList];
    });
    title = null;
  }

  function handleClearAll() {
    todoList.set([]);
  }

  function handleDelete(id) {
    todoList.update((list) => {
      return list.filter((list) => list.id !== id.detail.id);
    });
  }
</script>

<div>
  <div class="navBar">
    <h3>My Todo List</h3>
  </div>
  <div class="inputHeader">
    <input bind:value={title} class="inputText" type="text" />
    <button on:click={handleAdd} class="addingButton" disabled={!title}
      >Add</button
    >
    <button
      on:click={handleClearAll}
      class="clearAllButton"
      disabled={!$todoList.length}>Clear All</button
    >
  </div>
  <div class="listItemBody">
    {#each $todoList as { title, date, id }}
      <!-- <h4>{t.title}</h4> -->
      <TodoListItem {title} {date} {id} on:handleDelete={handleDelete} />
    {:else}
      <h2 class="noContent">No content</h2>
    {/each}
  </div>
</div>

<style>
  .navBar {
    background: rgb(22, 21, 21);
    padding: 0;
    margin: 0;
    height: 45px;
  }
  .navBar h3 {
    background: rgb(22, 21, 21);
    padding: 0;
    margin: 0;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    text-align: center;
    padding: 5px 0;
  }
  .inputHeader {
    display: flex;
    width: 45%;
    /* border: 1px solid red; */
    height: 50px;
    margin: 5% 25% 1% 25%;
  }
  .listItemBody {
    /* border: 1px red solid; */
    width: 45%;
    /* height: 50px; */
    margin: 2% 25%;
  }
  .inputText {
    width: 70%;
    margin-right: 10px;
    /* border-radius: 2%; */
    /* width: 69%; */
    outline: none;
    margin: 1px;
    margin-right: 10px;
    margin-left: 0px;
    border-radius: 3px;
    border: 1px solid rgba(78, 78, 87, 0.596);
  }
  input[type="text"] {
    font-size: 20px;
  }
  .addingButton {
    width: 15%;
    margin-right: 10px;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(96, 73, 199);
    color: white;
    border-radius: 3px;
    /* border-radius: 2%; */
  }
  .clearAllButton {
    width: 15%;
    font-size: 15px;
    margin-right: 0px;
    outline: none;
    border: 0;
    border-radius: 3px;
    background: rgb(192, 99, 99);
    color: white;
    /* border-radius: 2%; */
  }
  .noContent{
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
  }
</style>
