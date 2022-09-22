<template>
  <div class="main-area">
    <div class="test">
      <h5>Please enter your search hear</h5>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="searchItem" class="searchInput" />
        <input type="submit" value="Search" class="searchBtn" />
      </form>
      <hr />
      <h5>Search Result</h5>
      <div class="searchResultContainer">
        <div v-for="item in items" :key="item.id">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import env from "../env";

export default {
  name: "SearchPage",

  data() {
    return {
      searchItem: "",
      items: [],
    };
  },
  methods: {
    async onSubmit() {
      if (!this.searchItem) {
        alert("Please enter a search");
        return;
      }
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${env.apiKey}&cx=${env.cx}&q=${this.searchItem}`
      );
      const data = await response.json();
      console.log(data.items[0].pagemap);
    },
  },
  async mounted() {
    this.items = await this.onSubmit();
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
}
form .searchInput {
  width: 80%;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495058;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
form .searchBtn {
  border: 1px solid #ced4da;
  background: transparent;
  padding: 6px 10px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
