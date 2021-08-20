<template>
<h1>The counter</h1>
<div>{{counter}}</div><br>
<button @click="UP()">up</button>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Counter',
  components: {
  },
  data(){
      return {
          counter :0
      }
  },
  methods : {
      UP(){
          this.counter++;
      }
  }
}
</script>
<style scoped>

h1{
  color: gray;
}
</style>