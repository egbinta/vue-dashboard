<template>
  <div class="sub-sidenav">
    <div class="sub-sidenav-head">
      <div class="sub-sidenav-head-item1">Explore</div>
      <div class="sub-sidenav-head-item2">
        <span>
          <i class="fa fa-plus pr-2" aria-hidden="true"></i>
          <span @click="onClick">ADD DATA</span>
        </span>
      </div>
      <div class="arrow">
        <span>
          &#10073;
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <div class="search-input">
      <form>
        <input type="text" placeholder="Type to search" />
        <div class="searchicon"><i class="fa fa-search"></i></div>
        <div class="queicon">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </form>
    </div>

    <div class="link-container">
      <ul>
        <li class="link-item">
          <i class="fa fa-podcast" aria-hidden="true"></i>
          <router-link to="/">Some random text</router-link>
        </li>
        <li class="link-item">
          <i class="fa fa-snowflake-o" aria-hidden="true"></i>
          <router-link to="/tab">Todos with JSON Server</router-link>
        </li>
        <li class="link-item">
          <i class="fa fa-life-ring" aria-hidden="true"></i>
          <router-link to="/interact">Interaction</router-link>
        </li>
        <li class="link-item">
          <i class="fa fa-server" aria-hidden="true"></i>
          <router-link to="/form">Some form manipulation</router-link>
        </li>
        <li class="link-item">
          <i class="fa fa-server" aria-hidden="true"></i>
          <router-link to="/search-page">Search Page</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sub-sidebar",
  methods: {
    onClick() {
      this.$emit("toggle-form");
    },
  },
};
</script>

<style scoped>
.sub-sidenav {
  top: 0;
  /* margin-left: 60px; */
  width: 280px;
  min-height: 85.5vh;
  background-color: #fff;
  border-right: 1px solid #ddd;
}
.sub-sidenav-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}
.sub-sidenav-head-item1 {
  color: black;
  font-weight: 500;
}
.sub-sidenav-head-item2 {
  margin-left: 65px;
  color: #007bff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.sub-sidenav-head-item2:hover {
  background: rgb(230, 228, 228);
  padding: 3px 8px;
  border-radius: 5px;
}
.arrow {
  cursor: pointer;
}
.arrow span {
  color: #007bff;
}
.arrow .fa {
  margin-left: -3px !important;
}
.search-input {
  padding: 10px 10px;
}
.search-input input {
  width: 100%;
  padding: 4px 33px;
  border: 1px solid rgb(151, 146, 146) !important;
  border-radius: 5px;
  position: relative;
}
.search-input .searchicon {
  background: transparent;
  border: none;
  color: rgb(152, 149, 149);
  font-size: 14px;
  position: absolute;
  left: 23px;
  top: 173px;
}
.search-input .queicon {
  position: absolute;
  top: 172px;
  left: 240px;
  cursor: pointer;
}
.link-container {
  margin-top: 15px;
  margin-left: -40px;
}
.link-container .link-item {
  list-style: none;
  padding: 8px 15px;
}
.link-container .link-item:hover {
  background-color: #ddd;
}
.link-container .link-item a {
  text-decoration: none;
  color: #2d2b2b;
  font-size: 13px;
  font-weight: 600;
  margin-left: 15px;
}
</style>
