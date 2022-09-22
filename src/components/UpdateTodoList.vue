<template>
  <div @update-item="updateData">
    <h4>Update Todo</h4>
    <form @submit="onSubmit">
      <input
        type="text"
        v-model="todo"
        class="todo-form"
        placeholder="Enter Todo"
      />
      <input
        type="text"
        v-model="date"
        class="todo-form"
        placeholder="Enter Date"
      />
      <button class="todo-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UpdateTodoList",
  props: {
    item: Object,
  },
  data() {
    return {
      todo: "",
      date: "",
    };
  },
  methods: {
    updateData(item) {
      (this.todo = item.todo), (this.date = item.date);
    },
  },
};
</script>

<style scoped>
.todo-form {
  width: 300px !important;
  height: 30px;
  border: 1px solid rgb(66, 64, 64);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0px 10px;
  margin-right: 10px;
}
.check {
  margin-right: 10px;
}
.check label {
  margin-right: 40px;
}
.todo-btn {
  height: 30px;
  border: 1px solid rgb(66, 64, 64);
  border-radius: 5px;
  padding: 0px 15px;
  margin-left: 30px;
}
form {
  margin-bottom: 40px;
  display: flex;
}
</style>
