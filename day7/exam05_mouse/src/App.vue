<template>
<h1>{{score}}</h1>
<p>{{mousePos.x}},{{mousePos.y}}</p>
<div class = "blue-box" @mousemove="onMouseMove($event,1)"> </div>
<div class = "red-box" @mousemove="onMouseMove($event,-1)"> </div> <!--첫번째 인자로 이벤트객체가 넘어간다-->
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
    score : 0,
    mousePos : {x:0,y:0}
    }
  },
  methods : {
    onMouseMove(evt,score){
      this.mousePos.x=evt.pageX
      this.mousePos.y=evt.pageY
      this.score+=score
    }
  }
}
</script>

<style scoped>

.blue-box{
  width: 200px;
  height: 200px;
  background-color: blue;
}

.red-box{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
