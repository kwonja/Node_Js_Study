<template>
<div>
    <h1>Counter</h1>
    <h2> {{counter}}</h2>
    <button @click="inc">count</button>
    <button @click="dec">dec</button>
    <button @click="clear">reset</button>
</div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Counter',
  computed : {
      counter(){
          return this.$store.state.counter
      }
  },
  methods: {
      inc(){
          this.$store.commit('inc');
          //this.$store.state.counter++;
      },
      dec(){
          this.$store.commit('dec');
      },
       clear(){
          this.$store.commit('clear',{value : 10});
      },
  },
}
</script>
<style scoped>

</style>