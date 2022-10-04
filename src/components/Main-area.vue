<template>
  <div class="main-area">
    <div class="test">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
        necessitatibus ducimus officiis ex, eius voluptatum dolore magnam sunt!
        Magni, repellendus?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main-area",
};
</script>

<style scoped>
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
}
</style>
