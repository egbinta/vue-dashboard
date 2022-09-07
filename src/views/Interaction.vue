<template>
  <Topbar />
  <Subbar />
  <Mainsidebar />
  <Subsidebar />
  <Tabbar />
  <div class="main-area">
    <div class="test">
      <h1>This is the Interaction page</h1>
    </div>
  </div>
  <Foot />
</template>

<script>
import Topbar from "@/components/Top-bar.vue";
import Subbar from "../components/Sub-bar.vue";
import Mainsidebar from "../components/Main-sidebar.vue";
import Subsidebar from "../components/Sub-sidebar.vue";
import Tabbar from "../components/Tab-bar.vue";
import Foot from "../components/Main-foot.vue";
export default {
  name: "Interaction",
  components: {
    Topbar,
    Subbar,
    Mainsidebar,
    Subsidebar,
    Tabbar,
    Foot,
  },
};
</script>
