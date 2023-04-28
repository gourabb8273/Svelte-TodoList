<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";
  const dispatch = createEventDispatcher();

  function handleDeleteList(id) {
    dispatch("handleDelete", {
      id,
    });
  }
  export let title;
  export let date;
  export let id;
</script>

<div class="listBody">
  <div class="listItem">
    <h3>{title}</h3>
    <h6>{date}</h6>
    <div on:click={handleDeleteList.bind(this, id)} class="deleteIcon">
      <Icon icon="mdi-light:delete" />
    </div>
  </div>
</div>

<style>
  .listBody {
    display: flex;
    border: 1px solid rgb(180, 180, 180);
    margin: 5px;
    padding: 5px 30px;
    height: 35px;
    border-radius: 3px;
    background: rgba(229, 229, 250, 0.342);
    border: 1px solid rgba(0, 0, 0, 0.123);
  }

  .listBody:hover {
    background: rgba(229, 229, 250, 0.808);
  }

  .listItem {
    display: flex;
    width: 100%;
  }

  .listItem h3 {
    margin: 2px;
    flex: 7;
    font-family: inherit;
    text-align: start;
    font-size: 1.2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .listItem h6 {
    /* border: 1px solid green; */
    height: 17px;
    flex: 1.2;
    background: rgb(27, 87, 27);
    color: white;
    border-radius: 5%;
    text-align: center;
    justify-content: center;
    margin: 8px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .deleteIcon {
    flex: 0.2;
    margin: 7px;
  }
</style>
