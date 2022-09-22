<template>
  <div class="main-area">
    <div class="test">
      <div v-if="todoForm">
        <h4>Enter a Todo</h4>
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
      <div v-if="updateForm">
        <h4>Update Todo</h4>
        <form @submit.prevent="update">
          <input type="hidden" v-model="itemId" />
          <input
            type="text"
            v-model="updateTodo"
            class="todo-form"
            placeholder="Enter Todo"
          />
          <input
            type="text"
            v-model="updateDate"
            class="todo-form"
            placeholder="Enter Date"
          />
          <button class="todo-btn">Submit</button>
        </form>
      </div>
      <hr />
      <h4>Todos List</h4>
      <TodoList
        :items="items"
        @delete-task="deleteItem"
        @update-item="updateItem"
        @update-status="updateStatus"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UpdateTodoList from "../components/UpdateTodoList.vue";
import TodoList from "../components/TodoList.vue";
export default {
  name: "TabPage",
  components: {
    UpdateTodoList,
    TodoList,
  },
  data() {
    return {
      items: [],
      todo: "",
      date: "",
      reminder: false,
      updateTodo: "",
      updateDate: "",
      itemId: "",
      todoForm: true,
      updateForm: false,
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      if (this.todo == "") {
        alert("Input field can not be empty");
        return;
      }

      const res = await axios.post(`http://localhost:5000/tasks`, {
        text: this.todo,
        date: this.date,
        reminder: this.reminder,
      });
      this.items = [...this.items, res.data];
      this.todo = "";
      this.date = "";
      this.reminder = false;
    },
    updateItem(item) {
      this.todoForm = false;
      this.updateForm = true;
      this.updateTodo = item.text;
      this.updateDate = item.date;
      this.itemId = item.id;
    },
    async update() {
      let id = this.itemId;
      try {
        const res = await axios.patch(`http://localhost:5000/tasks/${id}`, {
          text: this.updateTodo,
          date: this.updateDate,
        });
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.text = this.updateTodo;
            item.date = this.updateDate;
          }
          return item;
        });
        this.todoForm = true;
        this.updateForm = false;
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatus(id) {
      // alert(id);
      const changeStatus = await this.fetchTask(id);
      const updStatus = { ...changeStatus, reminder: !changeStatus.reminder };
      try {
        const res = await axios.patch(`http://localhost:5000/tasks/${id}`, {
          reminder: updStatus.reminder,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(id) {
      axios.delete(`http://localhost:5000/tasks/${id}`);
      this.items = this.items.filter((item) => item.id !== id);
    },
    async fetchTask(id) {
      try {
        const res = await axios.get(`http://localhost:5000/tasks/${id}`);
        const data = await res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:5000/tasks`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
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
