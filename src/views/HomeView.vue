<template>
  <div class="home">
    <Mainarea />
  </div>
</template>

<script>
// @ is an alias to /src

import Mainarea from "../components/Main-area.vue";

export default {
  name: "HomeView",
  components: {
    Mainarea,
  },
};
</script>
<style scoped></style>
