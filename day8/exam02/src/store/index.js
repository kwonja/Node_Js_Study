import { createStore } from 'vuex'

export default createStore({
  state() {
    let _counter=10
    if(localStorage.getItem('counter')!== null)
    { _counter=parseInt(localStorage.getItem('counter'))

    }
    else{
      localStorage.setItem('counter',_counter) //초기값
    }
    return{
    counter : _counter
    }
  },
  mutations: {
    inc(state){
      state.counter++;
      localStorage.setItem('counter',state.counter)
      //this는 사용불가
    },
    dec(state){
      state.counter--;
      localStorage.setItem('counter',state.counter)
      //this는 사용불가
    },
    clear(state,playload)
    {
      state.counter=playload.value
      localStorage.setItem('counter',state.counter)
    }
  },
  actions: {
  },
  modules: {
  }
})
