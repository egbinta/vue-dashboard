<template>
  <div class="topbar">
    <div class="topbar-item">
      <div class="sandbox">
        <button class="updbtn">SANDBOX</button>
        <span
          >Set up billing to update Bigquery experience.
          <a href="#">Learn more</a>
        </span>
      </div>
      <div class="mr-4 dis-upd-btn">
        <button class="dismissbtn mr-2">DISMISS</button>
        <button class="upgradebtn bg-primary">UPGRADE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sub-bar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar {
  width: 100%;
  top: 0;
  border-bottom: 1px solid #ddd;
  padding: 12px 0px;
}
.topbar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
}
.topbar-item .updbtn {
  border: none;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 700;
  background-color: rgb(101, 101, 101);
  color: #ffffff;
}
.topbar-item span {
  font-size: 14px;
  font-weight: 400;
  padding-left: 10px;
  color: #000;
}
.topbar-item span a {
  color: blueviolet;
  border-bottom: 1px solid blueviolet;
  text-decoration: none;
}
.dis-upd-btn .dismissbtn {
  border: none;
  background-color: #fff;
  color: #007bff;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.03s ease-in-out;
}
.dis-upd-btn .dismissbtn:hover {
  background-color: #ddd;
  padding: 4px 6px;
  border-radius: 5px;
}
.dis-upd-btn .upgradebtn {
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 500;
}
@media (max-width: 699px) {
  .sandbox {
    display: none;
  }
  .topbar-item {
    display: flex;
    margin-left: 10px;
  }
}
</style>
