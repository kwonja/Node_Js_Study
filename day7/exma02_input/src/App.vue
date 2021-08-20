<template>
  <div>
    <h1>v-model</h1>
    <h5>{{textVal}}</h5>
    <input type="text" :value="textVal" @change="onChange"><br>
    <input type="text" :value="textVal" @input="onInput"><br>
    <input type="text" value="textVal"><br>
    <button @click="onOK()">ok</button>
  </div>
  <div>
    <h1>with v-model</h1>
    <h5>{{textVal_vm}}</h5>
    <input type="text" v-model="textVal_vm">    <!-- 쌍방향 데이터 동기화! 함수선언이 필요없다-->
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      textVal : 'hello',
      textVal_vm : 'hi vue'
    }
  },
  methods: {
    onOK(){
      this.textVal=this.tempText;
    },
    onChange(evt){
      this.tempText=evt.target.value;
    },
    onInput(evt)
    {
      console.log(evt.target.value)
      this.textVal=evt.target.value
    }
  },
  created(){
    this.tempText='';  //임시변수
  }
}
</script>

<style scoped>
div{
  border : solid black 1px;
}
</style>
