<template>
<div>
  <h1>
    {{msg}}
  </h1>
  <button @click="ChangeMsg('hello')">change</button> <!--@는 메세지 핸들러-->
  <button @click="ChangeMsg('hello1')">change1</button> <!--@는 메세지 핸들러-->
  <button @click="ChangeMsg('hello2')">change2</button> <!--@는 메세지 핸들러-->
</div>
<div>
  <h2>Counter</h2>
<p>{{counter}}</p>   <!-- 변수위치 -->
<button @click="Counter()">Counter</button>
<button @click="Decrease()">dercrease</button>
<button @click="Reset()">reset</button>
</div>
<div>
  <h5>{{myCounter}}</h5>
  <button @click="Reset1()">reset</button>
  </div>
</template>

<script>
import { onUpdated } from '@vue/runtime-core';

export default {
  name: 'App',
  components: {},
  data(){       //뷰에서 변수를 사용하려면 여기에서 선언해줘야한다.
  return{msg: '어서와 뷰는 처음이지',
  counter : 0
  }
  },
  //button에서 사용할 메소드
  methods : {
    ChangeMsg(msg){
      this.msg = msg
    },
    Counter(){
      this.counter++;
    },
    Decrease(){
      if(this.counter===0)
      {
        alert('더이상 감소가 안됩니다!');
      }
      else{
      this.counter--;
      }
    },
    Reset(){
      this.counter=0
    },
    Reset1(){
      this.myCounter=0
    },
  },
  created()   //훅킹 중간에 값넣기
  {
    this.counter=100
    this.myCounter=200  //none reactive 리셋해도 바뀌지않는다
    }
}
</script>

<style scoped>
h1{
  color: red;
}
div{
  border : solid 1px black;
}
</style>
