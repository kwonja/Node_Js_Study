<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="gohome">홈으로..</button>
  </div>
</template>

<script>
export default {
  name : "About",
  component : {},
  methods : {
    gohome(){
      this.$router.push({
        "path" : "/"
      })
    }
  }

}
</script>
<style scoped>

h1{
  color: red;
}
</style>
