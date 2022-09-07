<template>
  <div class="add-data">
    <form>
      <header>Create Data</header>
      <hr />
      <div class="form-group">
        <label for="">First Name</label>
        <input type="text" class="form-control" placeholder="Test" />
      </div>
      <div class="form-group">
        <label for=""></label>
        <input type="text" class="form-control" placeholder="Test" />
      </div>
      <div class="form-group">
        <label for=""></label>
        <input type="text" class="form-control" placeholder="Test" />
      </div>

      <div>
        <button class="btn btn-primary">Create Data</button>
        <button
          @click.prevent="$emit('cancel-form')"
          class="btn btn-outline-primary cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add-data",
};
</script>

<style scoped>
.add-data {
  background-color: #fff;
  position: absolute;
  z-index: 10;
  height: 85.5vh;
  width: 500px;
  right: 0;
  padding: 15px 20px;
  margin-top: -580px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
header {
  font-weight: 600;
}
.btn {
  margin-top: 25px;
}
.cancel-btn {
  margin-left: 20px;
}
</style>
