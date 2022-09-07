<template>
  <div class="sidenav">
    <ul class="ls">
      <li @click="toggleDropdown" class="dropdownbtn">
        <span>Analysis</span>
        <i class="fa fa-angle-down angle-down" aria-hidden="true"></i>
      </li>

      <ul class="dropdown-container" v-show="toggledown">
        <li class="dropdown-items">
          <i class="fa fa-search"></i>
          <a class="dsc" href="#">SQL workspace</a>
        </li>
        <li class="dropdown-items">
          <i class="fa fa-exchange" aria-hidden="true"></i>
          <a class="dsc" href="#">Data transfer</a>
        </li>
        <li class="dropdown-items">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <a class="dsc" href="#">Scheduled queries</a>
        </li>
        <li class="dropdown-items">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          <a class="dsc" href="#">Analytic Hub</a>
        </li>
      </ul>
    </ul>

    <ul>
      <li @click="toggleDropdown2" class="dropdownbtn">
        <span>Migration</span>
        <i class="fa fa-angle-down angle-down" aria-hidden="true"></i>
      </li>
      <ul class="dropdown-container" v-show="toggledown2">
        <li class="dropdown-items">
          <i class="fa fa-search"></i>
          <a class="dsc" href="#">SQL translator</a>
        </li>
      </ul>
    </ul>

    <ul>
      <li @click="toggleDropdown3" class="dropdownbtn">
        <span>Administrator</span>
        <i class="fa fa-angle-down angle-down" aria-hidden="true"></i>
      </li>
      <ul class="dropdown-container" v-show="toggledown3">
        <li class="dropdown-items">
          <i class="fa fa-bar-chart" aria-hidden="true"></i>
          <span class="dsc" href="#">Monitoring</span>
        </li>
        <li class="dropdown-items">
          <i class="fa fa-th" aria-hidden="true"></i>
          <span class="dsc" href="#">Capacity management</span>
        </li>
        <li class="dropdown-items">
          <i class="fa fa-cogs" aria-hidden="true"></i>
          <span class="dsc" href="#">BI Engine</span>
        </li>
      </ul>
    </ul>

    <ul class="dropdown-container Rnote">
      <li class="dropdown-items">
        <i class="fa fa-file-text-o" aria-hidden="true"></i>
        <span class="dsc">Release notes</span>
      </li>
    </ul>

    <ul class="dropdown-container nav-menu">
      <li class="">
        <span>
          &#10073;
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main-sidebar",
  data() {
    return {
      toggledown: false,
      toggledown2: false,
      toggledown3: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.toggledown = !this.toggledown;
    },
    toggleDropdown2() {
      this.toggledown2 = !this.toggledown2;
    },
    toggleDropdown3() {
      this.toggledown3 = !this.toggledown3;
    },
  },
};
</script>

<style scoped>
.sidenav {
  left: 0;
  width: 60px;
  min-height: 85.5vh;
  border-right: 1px solid #ddd;
  position: absolute;
  z-index: 1;
  transition: 0.4s;
  cursor: pointer;
  overflow: hidden;
  background: #fff;
}

.info {
  font-size: 0;
}

.sidenav:hover {
  width: 250px !important;
}

.sidenav ul {
  margin: 0;
  padding: 0;
}
.sidenav .dsc {
  padding-left: 20px;
}
.dropdownbtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  transform: translateY(10px);
  cursor: pointer;
}
.dropdownbtn:hover {
  background-color: #ddd;
}
.dropdownbtn .fa {
  font-size: 20px;
  font-weight: 600;
  margin-top: 6px;
  color: rgb(147, 137, 137);
}
.dropdown-container {
  display: flex;
  flex-direction: column;
  padding-top: 5px !important;
}
.dropdown-items .fa {
  color: rgb(135, 131, 131);
}
.dropdown-items .dsc {
  text-decoration: none;
  font-size: 14px;
  padding: 8px 22px;
  color: rgb(75, 71, 71);
}
.dropdown-items:hover {
  background-color: rgb(236, 232, 232);
}
.dropdown-container .dropdown-items {
  display: flex;
  align-items: center;
  padding: 3px 20px;
}
.Rnote {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  transform: translateY(400px);
  position: -webkit-sticky; /* Safari */
  position: sticky;
}
.nav-menu {
  transform: translateY(405px);
}
.nav-menu li {
  transform: translateY(2.5px);
  font-size: 13px;
  font-weight: 100;
  padding: 2px 22px;
}
.nav-menu .fa {
  transform: translateX(-2.5px);
}
</style>
