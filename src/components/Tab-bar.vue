<template>
  <div class="tab-bar">
    <div class="tabbar-item">
      <span class="item-icon">
        <i class="fa fa-plus-square" aria-hidden="true"></i>
      </span>
      <span class="item-icons">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        <i class="fa fa-keyboard-o" aria-hidden="true"></i>
        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab-bar",
};
</script>

<style scoped>
.tab-bar {
  background: rgb(239 238 238);
  margin-top: -85.5vh;
  margin-left: 340px;
  padding: 12px 10px;
  border-bottom: 1px solid #ddd;
}
.tab-bar .tabbar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  margin-right: -10px;
  transform: translateY(5px);
  cursor: pointer;
  color: #007bff;
}
.tab-bar .tabbar-item .item-icons .fa {
  padding-right: 15px;
}
</style>
