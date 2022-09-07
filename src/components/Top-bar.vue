<template>
  <nav class="bg-primary p-2">
    <div class="topbar-container container-fluid row">
      <div class="col-md-3 logo-section">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <router-link to="/" class="topbar-logo">
          Google <span class="topbar-sublogo">Cloud</span>
        </router-link>
        <button class="topbar-title">
          <i class="fa fa-cubes mr-1" aria-hidden="true"></i>
          My First Project
          <i class="fa fa-caret-down ml-2" aria-hidden="true"></i>
        </button>
      </div>
      <div class="search-form col-md-6">
        <form>
          <input
            type="text"
            class="search-input"
            placeholder="Search product"
          />
          <button><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="col-md-3 topbar-icon">
        <span class="icon-bar">
          <i class="fa fa-gift ficon" aria-hidden="true"></i>
          <i class="fa fa-dashcube ficon" aria-hidden="true"></i>
          <i class="fa fa-bell ficon" aria-hidden="true"></i>
          <i class="fa fa-question-circle ficon" aria-hidden="true"></i>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Top-bar",
};
</script>

<style scoped>
nav {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
.topbar-container {
  display: flex;
  justify-content: space-between !important;
  align-items: center;
}
.logo-section {
  display: flex;
  justify-content: left;
  align-items: center;
}
.fa-bars {
  color: aliceblue;
  margin-right: 15px;
}
.topbar-logo {
  font-size: 19px;
  font-weight: 550;
  color: aliceblue;
  cursor: pointer;
  text-decoration: none;
}
.topbar-logo .topbar-sublogo {
  font-size: 19px;
  font-weight: 400;
}
.topbar-title {
  margin-left: 25px;
  font-size: 15px;
  font-weight: 500;
  color: aliceblue;
  border: none;
  background-color: #007bff;
}
.topbar-title:hover {
  background-color: #99c7f946;
  padding: 4px 6px;
  border-radius: 5px;
}
.search-form {
  width: 100%;
}
.search-form .search-input {
  width: 100%;
  background-color: #007bff;
  border: 1px solid aliceblue;
  padding: 5px 20px;
  border-radius: 10px;
  position: relative;
}
::placeholder {
  color: aliceblue;
  font-weight: 500;
}
.search-form button {
  border: none;
  background-color: transparent;
  color: aliceblue;
  position: absolute;
  right: 45px;
  top: 4px;
}
.topbar-icon {
  display: flex;
  justify-content: right;
  align-items: center;
}
.topbar-icon .icon-bar .ficon {
  margin-right: 45px;
  color: aliceblue;
}
.topbar-icon .icon-bar .fa {
  color: aliceblue;
}
</style>
