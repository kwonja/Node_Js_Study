<template>
<div v-html="tags"></div>
<button @click="changeHtml">change</button>
<div>
  <img v-bind:src=imgScr>
  <button @click="onSize100()">size 100</button>
  <button @click="onSize200()">size 200</button>
 </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      tags:'<h1>hello view </h1>',
      //imgScr100 : 'https://placeimg.com/100/100/tech',
      //imgScr200 : 'https://placeimg.com/200/200/tech',
      imgScr :''
    }
  },
  methods: {
    changeHtml(){
      this.tags='<ul><li>item1</li></ul>'
    },
    onSize100(){
      this.imgScr='https://placeimg.com/100/100/tech'
    },
    onSize200(){
      this.imgScr='https://placeimg.com/200/200/tech'
    },
  },
}
</script>

<style>
 div{border : solid 1px black;
       margin : 4px;
 }
</style>
