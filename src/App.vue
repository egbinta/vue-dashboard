<template>
  <Topbar />
  <Subbar />
  <!-- <Mainsidebar /> -->
  <Subsidebar @toggle-form="toggleForm" />
  <Tabbar />
  <Transition name="fade">
    <AddData @cancel-form="cancelForm" v-if="showDataForm" />
  </Transition>
  <router-view />
  <Foot />
</template>

<script>
import Topbar from "@/components/Top-bar.vue";
import Subbar from "@/components/Sub-bar.vue";
//import Mainsidebar from "@/components/Main-sidebar.vue";
import Subsidebar from "@/components/Sub-sidebar.vue";
import Tabbar from "@/components/Tab-bar.vue";
import AddData from "@/components/Add-data.vue";
import Foot from "@/components/Main-foot.vue";
export default {
  name: "App",
  components: {
    Topbar,
    Subbar,
    // Mainsidebar,
    Subsidebar,
    Tabbar,
    AddData,
    Foot,
  },
  data() {
    return {
      showDataForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showDataForm = !this.showDataForm;
    },
    cancelForm() {
      this.showDataForm = false;
    },
  },
};
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  box-sizing: border-box;
}
.main-area {
  background: #fff;
  margin-top: 20px;
  margin-left: 300px;
  margin-right: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
@media (max-width: 699px) {
  .main-area {
    margin-left: 70px;
  }
}
.test {
  height: 510px;
  padding: 20px;
  overflow-y: scroll;
}
.fade-enter-active {
  transition: all 0.3s ease-in;
}
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  /* transform: translateX(20px); */
  opacity: 0;
}
</style>
