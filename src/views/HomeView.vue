<template>
  <div class="home">
    <Topbar />
    <Subbar />
    <Mainsidebar />
    <Subsidebar @toggle-form="toggleForm" />
    <Tabbar />
    <Mainarea />
    <Transition name="fade">
      <AddData @cancel-form="cancelForm" v-if="showDataForm" />
    </Transition>
    <Foot />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from "@/components/Top-bar.vue";
import Subbar from "../components/Sub-bar.vue";
import Mainsidebar from "../components/Main-sidebar.vue";
import Subsidebar from "../components/Sub-sidebar.vue";
import Tabbar from "../components/Tab-bar.vue";
import Foot from "../components/Main-foot.vue";
import Mainarea from "../components/Main-area.vue";
import AddData from "../components/Add-data.vue";

export default {
  name: "HomeView",
  components: {
    Topbar,
    Subbar,
    Mainsidebar,
    Subsidebar,
    Tabbar,
    AddData,
    Mainarea,
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
<style scoped>
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
