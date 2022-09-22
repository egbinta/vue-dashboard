<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <th>S/N</th>
        <th>Todos</th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>
      </thead>
      <tbody v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.text }}</td>
        <td>{{ item.date }}</td>
        <td v-if="item.reminder">
          <span class="badge badge-success">Completed</span>
        </td>
        <td v-else><span class="badge badge-warning">Pending</span></td>
        <td class="edit">
          <input
            @change="onChange(item.id)"
            type="checkbox"
            v-model="item.reminder"
          />
          <i
            @click="update(item.id, item.text, item.date, item.reminder)"
            class="fa fa-pencil"
            aria-hidden="true"
          ></i>
          <i
            @click="onClick(item.id)"
            class="fa fa-trash-o"
            aria-hidden="true"
          ></i>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    items: Array,
  },
  methods: {
    onChange(id) {
      this.$emit("update-status", id);
    },
    onClick(id) {
      this.$emit("delete-task", id);
    },
    update(id, text, date, reminder) {
      let item = { id, text, date, reminder };
      this.$emit("update-item", item);
    },
  },
};
</script>

<style scoped>
.edit {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.edit input {
  margin-right: 15px;
}
.edit .fa-pencil {
  margin-right: 15px;
}
</style>
